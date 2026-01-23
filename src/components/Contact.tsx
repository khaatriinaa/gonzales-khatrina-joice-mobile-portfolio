import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  styles: any;
  theme: any;
};

export default function Contact({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.sectionTitle, { color: theme.text, textAlign: "center" }]}>
        Contact
      </Text>

      {/* ICON ROW */}
      <View style={styles.contactIcons}>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:your.email@gmail.com")}
        >
          <Ionicons name="mail-outline" size={28} color={theme.text} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://github.com/yourname")}
        >
          <Ionicons name="logo-github" size={28} color={theme.text} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => Linking.openURL("https://linkedin.com/in/yourname")}
        >
          <Ionicons name="logo-linkedin" size={28} color={theme.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
