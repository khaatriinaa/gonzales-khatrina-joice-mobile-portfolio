import React from "react";
import { View, Text } from "react-native";

type Props = {
  styles: any;
  theme: any;
};

export default function Contact({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Contact
      </Text>

      <Text style={{ color: theme.text }}>📧 your.email@gmail.com</Text>
      <Text style={{ color: theme.text }}>🐙 github.com/yourname</Text>
      <Text style={{ color: theme.text }}>🔗 linkedin.com/in/yourname</Text>
    </View>
  );
}
