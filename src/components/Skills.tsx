import React from "react";
import { View, Text } from "react-native";

type Props = {
  styles: any;
  theme: any;
};

export default function Skills({ styles, theme }: Props) {
  const skills = ["React Native", "React", "Node.js", "TypeScript", "PHP"];

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Skills
      </Text>

      <View style={styles.skillContainer}>
        {skills.map((skill) => (
          <View
            key={skill}
            style={[styles.skill, { backgroundColor: theme.skillBg }]}
          >
            <Text style={{ color: theme.skillText }}>{skill}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
