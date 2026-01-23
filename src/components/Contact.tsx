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
        <TouchableOpacity onPress={() => openLink("mailto:khatrina_joice_gonzales.edu.ph")}>
          <Ionicons name="mail-outline" size={32} color={theme.accent} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://github.com/khaatriinaa")}>
          <Ionicons name="logo-github" size={32} color={theme.accent} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://www.linkedin.com/in/khatrina-gonzales-58a50a389/")}>
          <Ionicons name="logo-linkedin" size={32} color={theme.accent} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => openLink("https://www.facebook.com/khaatriinaa/")}>
          <Ionicons name="logo-facebook" size={32} color={theme.accent} />
        </TouchableOpacity>

      </View>
    </View>
  );
}