import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Linking,
} from "react-native";

import { skills } from "./src/data/skills";
import { projects } from "./src/data/projects";
import { links } from "./src/utils/links";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const colors = {
    background: darkMode ? "#0F172A" : "#F8FAFC",
    card: darkMode ? "#1E293B" : "#FFFFFF",
    text: darkMode ? "#F8FAFC" : "#0F172A",
    subText: darkMode ? "#CBD5E1" : "#475569",
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* THEME TOGGLE */}
      <Switch value={darkMode} onValueChange={setDarkMode} />

      {/* PROFILE */}
      <View style={[styles.profileCard, { backgroundColor: colors.card }]}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.profileImage}
        />
        <Text style={[styles.name, { color: colors.text }]}>
          Your Name
        </Text>
        <Text style={[styles.bio, { color: colors.subText }]}>
          React Native Developer | Student
        </Text>
      </View>

      {/* SKILLS */}
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Skills
        </Text>
        {skills.map((skill, index) => (
          <Text key={index} style={{ color: colors.subText }}>
            • {skill}
          </Text>
        ))}
      </View>

      {/* PROJECTS */}
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Projects
        </Text>
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.projectItem}>
              <Text style={{ color: colors.text, fontWeight: "600" }}>
                {item.title}
              </Text>
              <Text style={{ color: colors.subText }}>
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>

      {/* CONTACT */}
      <View style={[styles.section, { backgroundColor: colors.card }]}>
        <Text style={[styles.sectionTitle, { color: colors.text }]}>
          Contact
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL(`mailto:${links.email}`)}>
          <Text style={{ color: "#2563EB" }}>{links.email}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(links.github)}>
          <Text style={{ color: "#2563EB" }}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL(links.facebook)}>
          <Text style={{ color: "#2563EB" }}>Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  profileCard: {
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    marginBottom: 16,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },

  bio: {
    fontSize: 14,
  },

  section: {
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  projectItem: {
    marginBottom: 10,
  },
});
