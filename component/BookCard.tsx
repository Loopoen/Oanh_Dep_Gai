import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import { Book } from "../data";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <View style={styles.card}>

      {/* Ảnh + Badge */}
      <View style={styles.coverContainer}>

        <Image
          source={{ uri: book.cover }}
          style={styles.cover}
        />

       
        {book.discountPercent !== undefined && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              -{book.discountPercent}%
            </Text>
          </View>
        )}

      
        {book.discountPercent === undefined && book.isNew && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              Mới
            </Text>
          </View>
        )}

      </View>

  
      <View style={styles.info}>

        <Text
          style={styles.title}
          numberOfLines={2}
        >
          {book.title}
        </Text>


        <Text style={styles.price}>
          - {book.price.toLocaleString("vi-VN")}đ
        </Text>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "45%",
    marginBottom: 16,
  },

  coverContainer: {
    width: "100%",
    aspectRatio: 3 / 4,

    position: "relative",

    borderRadius: 4,
    overflow: "hidden",

    backgroundColor: "#D1D5DB",
  },

  cover: {
    width: "100%",
    height: "100%",
  },

  badge: {
    position: "absolute",

    top: 6,
    left: 6,

    backgroundColor: "#EF4444",

    borderRadius: 4,

    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  badgeText: {
    color: "#FFFFFF",

    fontSize: 12,

    fontWeight: "700",
  },

  info: {
    marginTop: 8,
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"

  },

  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },

  author: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
  },

  price: {

    fontSize: 14,
    fontWeight: "700",
    color: "#DC2626",
  },
})