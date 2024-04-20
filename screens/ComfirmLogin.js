import { View, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";

import Colors from "../assets/constatns/Colors";
import HeadLine from "../components/HeadLine";
import PrimaryButton1 from "../components/PrimaryButton1";

export default function ComfirmLogin() {
  const [code, setCode] = useState();
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image source={require("../assets/image/images/logo.png")} />
            <Image source={require("../assets/image/images/shoofeer.png")} />
          </View>
          <View style={styles.Box}>
            <HeadLine>کد تایید</HeadLine>
            <TextInput
              onChangeText={setCode}
              keyboardType="number-pad"
              style={styles.input}
            />
          </View>
          <View style={styles.buttContainer}>
            <PrimaryButton1 style={styles.butt}>تایید</PrimaryButton1>
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
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    minWidth: 270,
    width: "80%",
    minHeight: 313,
    minHeight: "60%",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginTop: 30,
  },
  Box: {
    width: "100%",
    height: 75,
    marginBottom: 30,
    gap: 10,
  },
  input: {
    width: "100%",
    height: 40,
    backgroundColor: Colors.primaryBlack400,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.primaryBlue,
    color: Colors.primaryWhite,
    paddingHorizontal: 15,
    fontSize: 18,
  },
  buttContainer: {
    width: "100%",
    height: 45,
    textAlign: "center",
    alignItems: "center",
  },
  butt: {
    height: 45,
    backgroundColor: Colors.primaryGreen,
    borderRadius: 15,
  },
});
