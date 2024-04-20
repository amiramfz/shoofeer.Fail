import { View, StyleSheet, TextInput } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";
import Card from "../components/Card";
import HeadLine from "../components/HeadLine";

export default function AddCarData() {
  return (
    <>
      <Card>
        <View style={styles.inputBox}>
          <HeadLine>شماره پلاک</HeadLine>
          <TextInput style={[styles.inputS , ]} />
          <TextInput style={[styles.inputS , ]} />
          <TextInput style={[styles.inputS , ]} />
          <TextInput style={[styles.inputS , ]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>کیلومتر</HeadLine>
          <TextInput style={[styles.inputS , ]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>مدل</HeadLine>
          <TextInput style={[styles.inputS , ]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>سال ساخت</HeadLine>
          <TextInput style={[styles.inputS , ]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>نام وسیله نقلیه</HeadLine>
          <TextInput style={[styles.inputS , ]} />
        </View>
      </Card>
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
  inputBox: { 
    margin: 10, 
    gap: 10 
  },
  inputS:{
    backgroundColor:Colors.primaryGray,
    borderRadius:15,
    height:35,
  },
});
