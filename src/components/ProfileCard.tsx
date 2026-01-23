import React from "react";
import { View, Text, Image, StyleProp, ViewStyle, TextStyle } from "react-native";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: any;
};

export default function ProfileCard({ styles, theme }: Props) {
  return (
    <View style={styles.profileWrapper}>
      {/* Avatar (half outside card) */}
      <Image
        source={{
          uri: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/434149085_3799460017045876_7608266015219454770_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mfBrz1xssRYQ7kNvwFRG-sP&_nc_oc=Adn1Wc3zMZUOuK3IoyU8WiZn2_biwG2mPaO1nzDR6lXi6cPL4fwJ7XgoXAJJ9IP5ecU7e_qb-mw1QW6JHMNsJSar&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=wboemzV2g9w8Rb-5jRFrTA&oh=00_Afp5Q5rrilXgQ6a2Fc1rtv_9v8EK0CtJW8x3OeoKdVzeKA&oe=697936F9://your-image-url-here",
        }}
        style={styles.profileAvatar}
      />

      {/* Card box */}
      <View style={[styles.profileCard, { backgroundColor: theme.card }]}>
        <Text style={[styles.name, { color: theme.text }]}>
        Khatrina Joice M. Gonzales
      </Text>

      <Text style={[styles.username, { color: theme.subText }]}>
        @khaatriinaa
      </Text>

      <Text style={[styles.bio, { color: theme.subText }]}>
        Computer Science student • C3A • 3rd-Year Computer Science
        Mobile & Web Developer passionate about creating 
        clean, user-friendly applications.
      </Text>
      </View>
    </View>
  );
}
