import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function CategoryChips() {
  const categories = [
    "Văn học",
    "Kinh tế",
    "Thiếu nhi",
    "Truyện tranh",
    "Ngoại ngữ",
    "Lịch sử",
  ];

  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <View key={index} style={styles.chip}>
          <Text style={styles.chipText}>{category}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  // Container chứa tất cả chip
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,

    padding: 16,
  },

  // Từng chip
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 10,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#6366F1",

    backgroundColor: "#FFFFFF",
  },

  chipText: {
    fontSize: 14,
    color: "#333333",
  },
})