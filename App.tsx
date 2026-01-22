import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Switch,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native";

type Project = {
  id: string;
  title: string;
  description: string;
};

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = darkMode ? darkTheme : lightTheme;

  const projects: Project[] = [
    {
      id: "1",
      title: "FurSure",
      description: "Pet care platform connecting owners and service providers.",
    },
    {
      id: "2",
      title: "Student Management System",
      description: "CRUD app using PHP and MySQL.",
    },
    {
      id: "3",
      title: "Computer Shop System",
      description: "Session-based computer usage and reporting system.",
    },
  ];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.bg }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* THEME TOGGLE */}
        <View style={styles.toggleRow}>
          <Text style={[styles.toggleText, { color: theme.text }]}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>

        {/* PROFILE CARD */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Image
            source={{ uri: "https://i.pravatar.cc/300" }}
            style={styles.avatar}
          />
          <Text style={[styles.name, { color: theme.text }]}>
            Your Name
          </Text>
          <Text style={[styles.username, { color: theme.subText }]}>
            @yourusername
          </Text>

          <Text style={[styles.bio, { color: theme.text }]}>
            Computer Science student | Mobile & Web Developer | Tech Explorer
          </Text>
        </View>

        {/* SKILLS */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Skills
          </Text>

          <View style={styles.skillContainer}>
            {["React Native", "React", "Node.js", "TypeScript", "PHP", "MySQL"].map(
              (skill) => (
                <View key={skill} style={[styles.skill, { backgroundColor: theme.skillBg }]}>
                  <Text style={{ color: theme.skillText }}>{skill}</Text>
                </View>
              )
            )}
          </View>
        </View>

        {/* PROJECTS */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Projects
          </Text>

          <FlatList
            data={projects}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={[styles.projectItem, { backgroundColor: theme.projectBg }]}>
                <Text style={[styles.projectTitle, { color: theme.text }]}>
                  {item.title}
                </Text>
                <Text style={{ color: theme.subText }}>
                  {item.description}
                </Text>
              </View>
            )}
          />
        </View>

        {/* CONTACT */}
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            Contact
          </Text>

          <Text style={{ color: theme.text }}>📧 your.email@gmail.com</Text>
          <Text style={{ color: theme.text }}>🐙 github.com/yourname</Text>
          <Text style={{ color: theme.text }}>🔗 linkedin.com/in/yourname</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ------------------ THEMES ------------------ */

const darkTheme = {
  bg: "#0f172a",
  card: "#111827",
  text: "#ffffff",
  subText: "#9ca3af",
  skillBg: "#1f2933",
  skillText: "#ffffff",
  projectBg: "#1f2933",
};

const lightTheme = {
  bg: "#f3f4f6",
  card: "#ffffff",
  text: "#111827",
  subText: "#6b7280",
  skillBg: "#e5e7eb",
  skillText: "#111827",
  projectBg: "#f3f4f6",
};

/* ------------------ STYLES ------------------ */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
  toggleText: {
    fontSize: 16,
    fontWeight: "600",
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
  username: {
    textAlign: "center",
    marginBottom: 8,
  },
  bio: {
    textAlign: "center",
    lineHeight: 20,
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
