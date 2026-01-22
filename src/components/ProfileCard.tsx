import React from "react";
import { View, Text, Image } from "react-native";

type Props = {
  styles: any;
  theme: any;
};

export default function ProfileCard({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={styles.avatar}
      />
      <Text style={[styles.name, { color: theme.text }]}>Your Name</Text>
      <Text style={{ color: theme.subText }}>@yourusername</Text>
      <Text style={[styles.bio, { color: theme.text }]}>
        Computer Science student | Mobile & Web Developer
      </Text>
    </View>
  );
}
