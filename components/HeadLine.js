import { View, StyleSheet ,Text } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";


export default function HeadLine({children}) {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%'
  },
  text:{
    color:Colors.primaryWhite,
    fontFamily:'vazir-Regular',
    fontSize:18,
    fontWeight:'600',
  },
});
