import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CART_ITEMS } from "../data";

export function FloatingCart() {

  const cartCount = CART_ITEMS.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <View style={styles.container}>

      <View style={styles.content}>

        <View style={styles.contentBox} />
        <View style={styles.contentBox} />
        <View style={styles.contentBox} />
        <View style={styles.contentBox} />

      </View>

     
      <View style={styles.cartButton}>

        <Text style={styles.cartText}>
          Giỏ hàng
        </Text>

        {cartCount > 0 && (
          <View style={styles.badge}>

            <Text style={styles.badgeText}>
              {cartCount}
            </Text>

          </View>
        )}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  
  container: {
    flex: 1,

    position: "relative",

    backgroundColor: "#FFFFFF",
  },

 
  content: {
    flex: 1,

    padding: 16,
  },

  contentBox: {
    height: 48,

    marginBottom: 20,

    backgroundColor: "#E5DADA",
  },

  cartButton: {
    position: "absolute",

    bottom: 24,
    right: 20,

    width: 80,
    height: 80,

    borderRadius: 40,

    backgroundColor: "#5B7FF1",

    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    color: "#000000",

    fontSize: 14,

    fontWeight: "700",
  },

 
  badge: {
    position: "absolute",

    top: 0,
    right: -2,

    minWidth: 28,
    height: 24,

    paddingHorizontal: 6,

    borderRadius: 12,

    backgroundColor: "#EF4444",

    justifyContent: "center",
    alignItems: "center",
  },

 
  badgeText: {
    color: "#FFFFFF",

    fontSize: 13,

    fontWeight: "700",
  },

})