import React from "react";
import { View, Text, Image, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: Theme;
};

export default function ProfileCard({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Image
        source={{
          uri: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/434149085_3799460017045876_7608266015219454770_n.jpg?...",
        }}
        style={[
          styles.avatar,
          { borderColor: theme.accent },
        ]}
      />

      <Text style={[styles.name, { color: theme.text }]}>
        Khatrina Joice M. Gonzales
      </Text>

      <Text style={[styles.username, { color: theme.subText }]}>
        @khaatriinaa
      </Text>

      <Text style={[styles.bio, { color: theme.subText }]}>
        Computer Science student • Mobile & Web Developer passionate about
        creating clean, user-friendly applications.
      </Text>
    </View>
  );
}
