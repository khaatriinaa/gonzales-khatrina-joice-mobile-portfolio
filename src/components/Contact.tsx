import React from "react";
import { View, TouchableOpacity, Linking, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: Theme;
};

export default function Contact({ styles, theme }: Props) {
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Error opening link", err));
  };

  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Let's Connect
      </Text>

      <View style={styles.contactIconsRow}>
        <TouchableOpacity onPress={() => openLink("mailto:khatrina@example.com")}>
          <Ionicons name="mail-outline" size={32} color={theme.accent} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://github.com/yourusername")}>
          <Ionicons name="logo-github" size={32} color={theme.accent} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://linkedin.com/in/yourprofile")}>
          <Ionicons name="logo-linkedin" size={32} color={theme.accent} />
        </TouchableOpacity>

        {/* Add more if needed: twitter, instagram, etc. */}
      </View>
    </View>
  );
}