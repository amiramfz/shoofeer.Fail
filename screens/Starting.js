import { View, StyleSheet, Image } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";

export default function Starting() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inerContainer}>
          <Image source={require("../assets/image/images/logo.png")} />
          <Image source={require("../assets/image/images/shoofeer.png")} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBlack500,
    alignItems: "center",
    justifyContent: "center",
  },
  inerContainer: {
    minWidth: 270,
    width: "80%",
    minHeight: 313,
    minHeight: "60%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});
