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
        source={{ uri: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-1/434149085_3799460017045876_7608266015219454770_n.jpg?stp=cp6_dst-jpg_s160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=mfBrz1xssRYQ7kNvwFRG-sP&_nc_oc=Adn1Wc3zMZUOuK3IoyU8WiZn2_biwG2mPaO1nzDR6lXi6cPL4fwJ7XgoXAJJ9IP5ecU7e_qb-mw1QW6JHMNsJSar&_nc_zt=24&_nc_ht=scontent-hkg1-1.xx&_nc_gid=80g1lwqCEmw_nLsEJ5HoYA&oh=00_AfpJTeNgCQSVQ_9f5x7wxThmMcHHC0MHc8RIKADzMxTagQ&oe=6979173B" }}
        style={[
          styles.avatar,
          {
            borderWidth: 3,
            borderColor: theme.accent,
          },
        ]}
      />

      <Text style={[styles.name, { color: theme.text }]}>
        Khatrina Joice M. Gonzales
      </Text>

      <Text
        style={{
          color: theme.subText,
          marginTop: 2,
          fontSize: 13,
          fontWeight: "500",
        }}
      >
        @khaatriinaa
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
