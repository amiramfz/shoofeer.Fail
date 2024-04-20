import { View, StyleSheet, Text } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";

export default function PrimaryButton1({ children, style , buttHandler }) {

  return (
    <>
      <View style={[styles.container, style]}>
        <Text onPress={buttHandler} style={styles.text}>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.primaryBlack500,
    fontSize: 16,
    fontFamily: "vazir-Medium",
    fontWeight: "800",
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    textAlign:'center'
  },
});
