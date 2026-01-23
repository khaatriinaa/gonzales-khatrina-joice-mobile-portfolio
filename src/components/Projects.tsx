// src/components/Projects.tsx
import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { Project } from "../types/Project";
import { Theme } from "../theme/colors";  // ← make sure you import Theme

type Props = {
  styles: any;
  theme: Theme;
  data: Project[];
};

export default function Projects({ styles, theme, data }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Projects
      </Text>

      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 8, paddingBottom: 8 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.88}
            style={[
              styles.projectCard,
              {
                backgroundColor: theme.projectBg,
                borderColor: theme.border,
                borderWidth: 1,
              },
            ]}
            // You can add onPress later → open GitHub / demo link
            // onPress={() => console.log("Open project:", item.title)}
          >
            <Text style={[styles.projectTitle, { color: theme.text }]}>
              {item.title}
            </Text>

            <Text style={[styles.projectDesc, { color: theme.subText }]}>
              {item.description}
            </Text>

            {/* Optional: small tech tags or date */}
            {/* <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap', gap: 8 }}>
              <View style={{ backgroundColor: theme.accent + '22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 }}>
                <Text style={{ color: theme.accent, fontSize: 12, fontWeight: '500' }}>React Native</Text>
              </View>
            </View> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}