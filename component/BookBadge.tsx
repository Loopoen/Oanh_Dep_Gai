import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function BookBadge() {
  return (
    <View style={styles.container}>

      
      <View style={styles.bookImage}>

   
        <View style={styles.badge}>
          <Text style={styles.badgeText}>-20%</Text>
        </View>

      
        <Text style={styles.imageText}>
          Ảnh bìa sách
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },


  bookImage: {
    width: 300,
    height: 220,

    backgroundColor: "#D1D5DB",

    justifyContent: "center",
    alignItems: "center",

   
    position: "relative",

    borderWidth: 1,
    borderColor: "#6366F1",
  },

  imageText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111827",
  },

  
  badge: {
    position: "absolute",

    top: 6,
    left: 6,

    backgroundColor: "#EF4444",

    paddingHorizontal: 14,
    paddingVertical: 10,

    borderRadius: 4,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
})