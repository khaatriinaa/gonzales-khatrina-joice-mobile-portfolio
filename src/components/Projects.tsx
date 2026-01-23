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
      {/* SECTION TITLE */}
      <Text
        style={[
          styles.sectionTitle,
          {
            color: theme.text,
            textAlign: "center",
          },
        ]}
      >
        Projects
      </Text>

      <FlatList
        data={data}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 4 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.projectItem,
              {
                backgroundColor: theme.projectBg,
              },
            ]}
          >
            {/* PROJECT TITLE */}
            <Text
              style={[
                styles.projectTitle,
                {
                  color: theme.text,
                },
              ]}
            >
              {item.title}
            </Text>

            {/* PROJECT DESCRIPTION */}
            <Text
              style={[
                styles.projectDesc,
                {
                  color: theme.subText,
                },
              ]}
            >
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
