import React, { useState, useMemo } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from "react-native";

import { lightTheme, darkTheme, Theme } from "./src/theme/colors";
import { projects } from "./src/data/projects";

import ProfileCard from "./src/components/ProfileCard";
import Skills from "./src/components/Skills";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";

export default function App() {
  const systemColorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === "dark");

  const theme: Theme = isDark ? darkTheme : lightTheme;

  const styles = useMemo(() => createStyles(), []);

  return (
    <>
      <StatusBar barStyle={isDark ? "light-content" : "dark-content"} />
      <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
        {/* Fancy toggle */}
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
          <Projects styles={styles} theme={theme} data={projects} />
          <Contact styles={styles} theme={theme} />
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
      paddingHorizontal: 20,
      paddingTop: 70,     // space for toggle
      paddingBottom: 40,
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

    card: {
      borderRadius: 20,
      padding: 20,
      marginBottom: 20,
      // subtle shadow
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.08,
      shadowRadius: 8,
      elevation: 3,
    },

    avatar: {
      width: 110,
      height: 110,
      borderRadius: 55,
      alignSelf: "center",
      marginBottom: 16,
      borderWidth: 3,
    },
    name: {
      fontSize: 24,
      fontWeight: "700",
      textAlign: "center",
      marginBottom: 4,
    },
    username: {
      fontSize: 15,
      fontWeight: "500",
      textAlign: "center",
      marginBottom: 12,
    },
    bio: {
      fontSize: 15,
      textAlign: "center",
      lineHeight: 22,
    },

    sectionTitle: {
      fontSize: 20,
      fontWeight: "700",
      marginBottom: 16,
      textAlign: "center",
    },

    skillsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    skillPill: {
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
      marginHorizontal: 6,
      marginVertical: 6,
      borderWidth: 1,
    },
    skillText: {
      fontSize: 14,
      fontWeight: "500",
    },

    skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
    gap: 12,
  },
  skillItemRowStyle: {
    flex: 1,
    minWidth: 140,
    maxWidth: '48%',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    marginBottom: 12,
  },

    contactIconsRow: {
      flexDirection: "row",
      justifyContent: "center",
      gap: 40,
      marginTop: 12,
    },

    // Project styles (used in Projects.tsx)
    projectItem: {
      padding: 16,
      borderRadius: 12,
      marginBottom: 12,
      borderWidth: 1,
    },
    projectTitle: {
      fontSize: 17,
      fontWeight: "600",
      marginBottom: 6,
    },
    projectDesc: {
      fontSize: 15,
      lineHeight: 22,
    },
  });