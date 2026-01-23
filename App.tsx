import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
} from "react-native";

import { lightTheme, darkTheme, Theme } from "./src/theme/colors";

import ProfileCard from "./src/components/ProfileCard";
import Skills from "./src/components/Skills";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const theme: Theme = isDark ? darkTheme : lightTheme;
  const styles = useMemo(() => createStyles(), []);

  return (
    <>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
        {/* Theme toggle */}
        <TouchableOpacity
          style={styles.themeToggleContainer}
          onPress={() => setIsDark((prev) => !prev)}
          activeOpacity={0.8}
        >
          <View style={[styles.toggleTrack, { backgroundColor: theme.toggleTrack }]}>
            <View
              style={[
                styles.toggleKnob,
                {
                  backgroundColor: theme.toggleKnob,
                  transform: [{ translateX: isDark ? 22 : 0 }],
                },
              ]}
            />
          </View>
        </TouchableOpacity>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <ProfileCard styles={styles} theme={theme} />
          <Skills styles={styles} theme={theme} />

          {/* You can add Projects and Contact later */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 24,
      paddingTop: 80,
      paddingBottom: 60,
    },

    themeToggleContainer: {
      position: "absolute",
      top: 50,
      right: 24,
      zIndex: 10,
    },
    toggleTrack: {
      width: 52,
      height: 28,
      borderRadius: 14,
      justifyContent: "center",
      padding: 3,
    },
    toggleKnob: {
      width: 22,
      height: 22,
      borderRadius: 11,
    },

    // Card (used in Skills too)
    card: {
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.12,
      shadowRadius: 8,
      elevation: 4,
    },

    // ProfileCard styles
    profileCard: {
      borderRadius: 24,
      padding: 28,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.2,
      shadowRadius: 16,
      elevation: 10,
    },

    avatarContainer: {
      width: 120,
      height: 120,
      borderRadius: 16,
      overflow: "hidden",
      marginBottom: 16,
      backgroundColor: "#2d3748",
      justifyContent: "center",
      alignItems: "center",
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },

    name: {
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 4,
    },
    role: {
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 12,
    },

    locationRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginBottom: 20,
    },
    locationText: {
      fontSize: 14,
    },

    linksRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 16,
      marginBottom: 24,
    },
    linkButton: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderRadius: 12,
      backgroundColor: "#f1f5f9", // light bg – adjust in dark mode if needed
    },
    linkText: {
      fontSize: 14,
      fontWeight: "500",
    },

    summaryContainer: {
      width: "100%",
      alignItems: "flex-start",
    },
    sectionTitleSmall: {
      fontSize: 18,
      fontWeight: "700",
      marginBottom: 12,
    },
    summaryText: {
      fontSize: 15,
      lineHeight: 24,
    },

    // Skills styles
    skillsRow: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
    },
    skillTag: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 12,
      borderWidth: 1,
    },
    skillTagText: {
      fontSize: 14,
      fontWeight: "500",
    },
    subHeader: {
      fontSize: 14,
      fontWeight: "600",
    },
  });