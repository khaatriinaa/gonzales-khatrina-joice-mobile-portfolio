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
    paddingHorizontal: 16,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  card: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
  },
  bio: {
    textAlign: "center",
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  skillContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  projectItem: {
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
});
