import { View, StyleSheet } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";


export default function CollectionInformation() {
  return (
    <>
      <View style={styles.container}></View>
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
});
