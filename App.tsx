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

  const styles = useMemo(() => createStyles(theme), [theme]);

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

const createStyles = (theme: Theme) =>
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

    // Replace your current avatar and card styles with these

profileCard: {
  width: "100%",
  maxWidth: 360,
  borderRadius: 28,
  paddingTop: 40,
  paddingBottom: 32,
  paddingHorizontal: 24,
  alignItems: "center",
  marginBottom: 20,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.18,
  shadowRadius: 16,
  elevation: 10,
},

avatarFrame: {
  width: 140,
  height: 140,
  borderRadius: 20,           // square with rounded corners
  overflow: "hidden",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 20,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.25,
  shadowRadius: 12,
  elevation: 8,
},

avatarInner: {
  width: 110,
  height: 110,
  borderRadius: 55,           // circular inner avatar
  borderWidth: 4,
  borderColor: theme.accent,
},

name: {
  fontSize: 26,
  fontWeight: "700",
  marginBottom: 6,
  letterSpacing: -0.3,
},

username: {
  fontSize: 16,
  fontWeight: "600",
  marginBottom: 12,
},

role: {
  fontSize: 15,
  textAlign: "center",
  lineHeight: 22,
  paddingHorizontal: 12,
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
    borderRadius: 16,
    // borderWidth and backgroundColor are set inline to use theme values
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },

  projectShortDesc: {
    fontSize: 14,
    lineHeight: 20,
  },

  projectDesc: {
    fontSize: 15,
    lineHeight: 22,
  },
  });