import { View, StyleSheet ,Text } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";


export default function Title({children}) {
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
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    marginVertical:10
  },
  text:{
    color:Colors.primaryWhite,
    textAlign:"center",
    alignItems:'center',
    fontFamily:'vazir-Medium',
    fontSize:25,
    fontWeight:'600',

  },
});
