import { View, StyleSheet, ScrollView } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";
import Title from "./Title";

export default function Card({ children }) {
  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          <View style={styles.scrollinner}>
            <Title>اطلاعات وسیله نقلیه</Title>
            <View style={styles.innerContainer}>{children}</View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBlack500,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    width: "80%",
    backgroundColor: Colors.primaryBlack400,
    borderRadius: 20,
    padding: 10,
  },
  scroll: {
    width: "100%",
    marginTop:20
  },
  scrollinner:{
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  }
});
