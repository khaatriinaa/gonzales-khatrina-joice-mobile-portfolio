import React from "react";
import { View, Text } from "react-native";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: Theme;
};

const programmingSkills = [
  "React Native",
  "Expo",
  "TypeScript",
  "JavaScript",
  "React",
  "Node.js",
  "PHP",
  "MySQL",
  "Git",
];

export default function Skills({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card, marginTop: 16 }]}>
      <Text style={[styles.sectionTitleSmall, { color: theme.text }]}>
        TECHNICAL SKILLS
      </Text>

      <Text style={[styles.subHeader, { color: theme.subText, marginTop: 12, marginBottom: 8 }]}>
        PROGRAMMING LANGUAGES & TOOLS
      </Text>

      <View style={styles.skillsRow}>
        {programmingSkills.map((skill) => (
          <View
            key={skill}
            style={[
              styles.skillTag,
              { backgroundColor: theme.projectBg, borderColor: theme.border },
            ]}
          >
            <Text style={[styles.skillTagText, { color: theme.text }]}>
              {skill}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}