// src/components/ProfileCard.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: Theme;
};

export default function ProfileCard({ styles, theme }: Props) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card, paddingTop: 40 }]}>
      {/* Avatar - big & centered */}
      <Image
        source={{
          uri: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/434149085_3799460017045876_7608266015219454770_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mfBrz1xssRYQ7kNvwFRG-sP&_nc_oc=Adn1Wc3zMZUOuK3IoyU8WiZn2_biwG2mPaO1nzDR6lXi6cPL4fwJ7XgoXAJJ9IP5ecU7e_qb-mw1QW6JHMNsJSar&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=6rxQL6dzubQZKncq3eWjxA&oh=00_Afqf7FQY5b-J_j4xiLmfBHYUhRz6ZMn-HTTJHgS7b2lSQg&oe=697936F9",
        }}
        style={{
          width: 140,
          height: 140,
          borderRadius: 70,
          alignSelf: "center",
          marginBottom: 20,
          borderWidth: 4,
          borderColor: theme.accent,
        }}
      />

      {/* Name & Username */}
      <Text style={{ fontSize: 26, fontWeight: "700", color: theme.text, textAlign: "center" }}>
        Khatrina Joice M. Gonzales
      </Text>
      <Text style={{ fontSize: 16, color: theme.subText, textAlign: "center", marginTop: 4 }}>
        @khaatriinaa
      </Text>

      {/* Bio */}
      <Text
        style={{
          fontSize: 15,
          color: theme.subText,
          textAlign: "center",
          marginTop: 12,
          lineHeight: 22,
          paddingHorizontal: 20,
        }}
      >
        Computer Science Student • Mobile & Web Developer
      </Text>

      {/* Date Badge */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 16,
          gap: 8,
        }}
      >
        <Ionicons name="calendar-outline" size={16} color={theme.subText} />
        <Text style={{ color: theme.subText, fontSize: 14 }}>
          Banyo Banyo Pakistan • Since 6 May 2024
        </Text>
      </View>

      {/* Social Buttons Row */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 16,
          marginTop: 24,
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: theme.accent + "22",
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Ionicons name="mail-outline" size={20} color={theme.accent} />
          <Text style={{ color: theme.accent, fontWeight: "600" }}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#1877f222",
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Ionicons name="logo-facebook" size={20} color="#1877f2" />
          <Text style={{ color: "#1877f2", fontWeight: "600" }}>Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: theme.accent + "22",
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Ionicons name="logo-github" size={20} color={theme.accent} />
          <Text style={{ color: theme.accent, fontWeight: "600" }}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}