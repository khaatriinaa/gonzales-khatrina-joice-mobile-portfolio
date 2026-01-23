import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Project } from '../types/Project';
import { Theme } from '../theme/colors';

// Enable LayoutAnimation on Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {
  styles: any;
  theme: Theme;
  data: Project[];
};

export default function Projects({ styles, theme, data }: Props) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderItem = ({ item }: { item: Project }) => {
    const isExpanded = expandedId === item.id;

    return (
      <TouchableOpacity
        activeOpacity={0.88}
        onPress={() => toggleExpand(item.id)}
        style={{ marginBottom: 12 }}
      >
        <View
          style={[
            styles.projectItem,
            {
              backgroundColor: theme.projectBg,
              borderColor: theme.border,
              borderWidth: 1,
            },
          ]}
        >
          {/* Title + Arrow */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={[styles.projectTitle, { color: theme.text }]}>
              {item.title}
            </Text>

            <Ionicons
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              size={20}
              color={theme.subText}
            />
          </View>

          {/* Short Description */}
          <Text
            style={[
              styles.projectShortDesc,
              { color: theme.subText, marginTop: 6 },
            ]}
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {item.shortDescription || item.description}
          </Text>

          {/* Expanded Content */}
          {isExpanded && (
            <View style={{ marginTop: 12 }}>
              <Text
                style={[
                  styles.projectDesc,
                  { color: theme.subText, lineHeight: 22 },
                ]}
              >
                {item.description}
              </Text>

              {/* Technologies */}
              {item.technologies && item.technologies.length > 0 && (
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginTop: 12,
                  }}
                >
                  {item.technologies.map((tech) => (
                    <View
                      key={tech}
                      style={{
                        backgroundColor: theme.accent + '22',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                        borderRadius: 12,
                      }}
                    >
                      <Text
                        style={{
                          color: theme.accent,
                          fontSize: 12,
                          fontWeight: '500',
                        }}
                      >
                        {tech}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Projects
      </Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false} // IMPORTANT inside ScrollView
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
