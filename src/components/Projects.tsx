import React from "react";
import { View, Text, FlatList } from "react-native";
import { Project } from "../types/Project";

type Props = {
  styles: any;
  theme: any;
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
        renderItem={({ item }) => (
          <View style={[styles.projectItem, { backgroundColor: theme.projectBg }]}>
            <Text style={[styles.projectTitle, { color: theme.text }]}>
              {item.title}
            </Text>
            <Text style={{ color: theme.subText }}>
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
