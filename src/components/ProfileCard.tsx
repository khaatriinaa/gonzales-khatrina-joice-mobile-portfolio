import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Theme } from "../theme/colors";

type Props = {
  styles: any;
  theme: Theme;
};

export default function ProfileCard({ styles, theme }: Props) {
  const openLink = (url: string) => {
    Linking.openURL(url).catch(() => {});
  };

  return (
    <View style={[styles.profileCard, { backgroundColor: theme.card }]}>
      {/* Avatar with gradient-like frame effect */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/434149085_3799460017045876_7608266015219454770_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=mfBrz1xssRYQ7kNvwFRG-sP&_nc_oc=Adn1Wc3zMZUOuK3IoyU8WiZn2_biwG2mPaO1nzDR6lXi6cPL4fwJ7XgoXAJJ9IP5ecU7e_qb-mw1QW6JHMNsJSar&_nc_zt=23&_nc_ht=scontent-hkg1-1.xx&_nc_gid=6rxQL6dzubQZKncq3eWjxA&oh=00_Afqf7FQY5b-J_j4xiLmfBHYUhRz6ZMn-HTTJHgS7b2lSQg&oe=697936F9",
          }}
          style={styles.avatar}
        />
      </View>

      {/* Name */}
      <Text style={[styles.name, { color: theme.text }]}>
        Khatrina Joice M. Gonzales
      </Text>

      {/* Title / Role */}
      <Text style={[styles.role, { color: theme.subText }]}>
        Mobile & Web Developer
      </Text>

      {/* Location */}
      <View style={styles.locationRow}>
        <Ionicons name="location-outline" size={16} color={theme.subText} />
        <Text style={[styles.locationText, { color: theme.subText }]}>
          Manila, Philippines
        </Text>
      </View>

      {/* Social / Links row */}
      <View style={styles.linksRow}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://github.com/yourusername")}
        >
          <Ionicons name="logo-github" size={20} color={theme.text} />
          <Text style={[styles.linkText, { color: theme.text }]}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://linkedin.com/in/yourprofile")}
        >
          <Ionicons name="logo-linkedin" size={20} color={theme.text} />
          <Text style={[styles.linkText, { color: theme.text }]}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => openLink("https://yourwebsite.com")}
        >
          <Ionicons name="globe-outline" size={20} color={theme.text} />
          <Text style={[styles.linkText, { color: theme.text }]}>Website</Text>
        </TouchableOpacity>
      </View>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <Text style={[styles.sectionTitleSmall, { color: theme.text }]}>
          SUMMARY
        </Text>
        <Text style={[styles.summaryText, { color: theme.subText }]}>
          Computer Science student with passion for mobile and web development. 
          Experienced in building clean, performant applications using React Native, Expo, 
          TypeScript and modern JavaScript stacks. Always learning and excited about 
          creating user-focused experiences.
        </Text>
      </View>
    </View>
  );
}