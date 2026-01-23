import React from "react";
import { View, Text, Image } from "react-native";

type Props = {
  styles: any;
  theme: any;
};

export default function ProfileCard({ styles, theme }: Props) {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.card,
          alignItems: "center",
        },
      ]}
    >
      <Image
        source={{ uri: "https://i.pravatar.cc/300" }}
        style={[
          styles.avatar,
          {
            borderWidth: 3,
            borderColor: theme.accent,
          },
        ]}
      />

      <Text style={[styles.name, { color: theme.text }]}>
        Your Name
      </Text>

      <Text
        style={{
          color: theme.subText,
          marginTop: 2,
          fontSize: 13,
          fontWeight: "500",
        }}
      >
        @yourusername
      </Text>

      <Text
        style={[
          styles.bio,
          {
            color: theme.text,
            maxWidth: "90%",
          },
        ]}
      >
        Computer Science student • Mobile & Web Developer
      </Text>
    </View>
  );
}
