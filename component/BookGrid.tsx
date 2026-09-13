import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import { BOOKS } from "../data";
import { BookCard } from "./BookCard";

export function BookGrid() {
  return (
    <View style={styles.container}>

      {BOOKS.map((book) => (
        <BookCard
          key={book.id}
          book={book}
        />
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",

    justifyContent: "space-between",

    paddingHorizontal: 16,
  },
});