// Skills.tsx - Variant 4: Grouped categories
import React from "react";
import { View, Text } from "react-native";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: Theme;
};

const skillGroups = [
  {
    title: "Frontend / Mobile",
    items: ["React Native", "Expo", "React", "TypeScript", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Backend / Database",
    items: ["Node.js", "PHP", "MySQL"],
  },
  {
    title: "Tools & Others",
    items: ["Git", "Figma", "UI/UX Basics"],
  },
];

export default function Skills({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Skills
      </Text>

      {skillGroups.map((group) => (
        <View key={group.title} style={{ marginBottom: 20 }}>
          <Text
            style={{
              color: theme.subText,
              fontSize: 15,
              fontWeight: "600",
              marginBottom: 10,
            }}
          >
            {group.title}
          </Text>

          <View style={styles.skillsContainer}>
            {group.items.map((skill) => (
              <View
                key={skill}
                style={[
                  styles.skillPill,
                  {
                    backgroundColor: theme.skillBg,
                    borderColor: theme.border,
                  },
                ]}
              >
                <Text style={[styles.skillText, { color: theme.text }]}>
                  {skill}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}