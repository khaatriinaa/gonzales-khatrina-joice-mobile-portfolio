import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  View,
  StyleSheet,
} from "react-native";

import ProfileCard from "./src/components/ProfileCard";
import Skills from "./src/components/Skills";
import Projects from "./src/components/Projects";
import Contact from "./src/components/Contact";

import { projects } from "./src/data/projects";
import { darkTheme, lightTheme } from "./src/theme/colors";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* THEME TOGGLE */}
        <View style={styles.toggleRow}>
          <Text style={{ color: theme.text }}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        <ProfileCard styles={styles} theme={theme} />
        <Skills styles={styles} theme={theme} />
        <Projects styles={styles} theme={theme} data={projects} />
        <Contact styles={styles} theme={theme} />
      </ScrollView>
    </SafeAreaView>
  );
}

/* ---------------- STYLES (CENTRALIZED) ---------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },

  /* ---------- THEME TOGGLE ---------- */
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
    paddingHorizontal: 4,
  },

  /* ---------- CARD BASE ---------- */
  card: {
    borderRadius: 24,
    padding: 18,
    marginBottom: 20,

    // subtle depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  /* ---------- PROFILE ---------- */
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    alignSelf: "center",
    marginBottom: 14,
  },

  name: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 0.4,
  },

  bio: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.85,
  },

  /* ---------- SECTIONS ---------- */
  sectionTitle: {
    fontSize: 20,
    fontWeight: "800",
    marginBottom: 14,
    letterSpacing: 0.3,
  },

  /* ---------- SKILLS ---------- */
  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  skill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },

  skillText: {
    fontSize: 13,
    fontWeight: "600",
  },

  /* ---------- PROJECTS ---------- */
  projectItem: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },

  projectTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 4,
  },

  projectDesc: {
    fontSize: 14,
    opacity: 0.8,
    lineHeight: 20,
  },

  /* ---------- CONTACT ---------- */
  contactItem: {
    marginBottom: 10,
  },

  contactText: {
    fontSize: 14,
    fontWeight: "500",
  },

  contactIcons: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 24,
  marginTop: 12,
},
});
