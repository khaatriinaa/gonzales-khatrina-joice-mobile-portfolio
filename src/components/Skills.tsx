// Skills.tsx - By rows (flex wrap with even spacing)
import React from "react";
import { View, Text } from "react-native";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: Theme;
};

const skills = [
  "React Native", "Expo", "TypeScript", "JavaScript",
  "React", "Node.js", "PHP", "MySQL",
  "Git", "Figma", "UI/UX Basics", "TailwindCSS",
];

export default function Skills({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Skills
      </Text>

      <View style={styles.skillsGrid}>
        {skills.map((skill) => (
          <View
            key={skill}
            style={[
              styles.skillItemRowStyle,
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
  );
}