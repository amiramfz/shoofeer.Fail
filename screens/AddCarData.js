import { View, StyleSheet, TextInput, Image, Text } from "react-native";
import React from "react";

import Colors from "../assets/constatns/Colors";
import Card from "../components/Card";
import HeadLine from "../components/HeadLine";
import PrimaryButton1 from "../components/PrimaryButton1";

export default function AddCarData() {
  return (
    <>
      <Card title='اطلاعات وسیله نقلیه'>
        <View style={styles.inputBox}>
          <HeadLine>شماره پلاک</HeadLine>
          <View style={styles.carNumberinputBox}>
            <Text style={styles.iranText}>ایران</Text>
            <TextInput
              maxLength={2}
              placeholder="--"
              keyboardType="number-pad"
              style={[styles.inputS, styles.carNumberInputRight]}
            />
            <TextInput
              maxLength={2}
              placeholder="--"
              keyboardType="number-pad"
              style={[styles.inputS, styles.carNumberInputCenterR]}
            />
            <TextInput
              maxLength={3}
              placeholder="---"
              style={[styles.inputS, styles.carNumberInputCenterL]}
            />
            <TextInput
              maxLength={3}
              placeholder="---"
              keyboardType="number-pad"
              style={[styles.inputS, styles.carNumberInputLeft]}
            />
            <View style={styles.carImageBox}>
              <Image
                style={styles.carImage}
                source={require("../assets/image/images/carNumber.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.inputBox}>
          <HeadLine>کیلومتر</HeadLine>
          <View style={styles.kmBox}>
            <Text style={styles.km}>km</Text>
            <TextInput
            maxLength={10}
              keyboardType="number-pad"
              style={[styles.inputS, styles.kmInput]}
            />
          </View>
        </View>
        <View style={styles.inputBox}>
          <HeadLine>مدل</HeadLine>
          <TextInput keyboardType="number-pad" style={[styles.inputS]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>سال ساخت</HeadLine>
          <TextInput keyboardType="number-pad" style={[styles.inputS]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>نام وسیله نقلیه</HeadLine>
          <TextInput style={[styles.inputS]} />
        </View>
        <View style={styles.buttContainer}>
          <PrimaryButton1 style={styles.butt}>ذخیره</PrimaryButton1>
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
    width: "100%",
    height: "100%",
  },
  inputBox: {
    width: "100%",
    marginVertical: 15,
    gap: 10,
  },
  inputS: {
    backgroundColor: Colors.primaryGray,
    borderRadius: 15,
    height: 35,
    paddingHorizontal: 10,
    fontFamily: "vazir-Medium",
    fontSize: 15,
  },
  carNumberinputBox: {
    flexDirection: "row-reverse",
    width: "100%",
  },
  carImageBox: {
    width: "10%",
    height: 55,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    overflow: "hidden",
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    position: "relative",
  },
  iranText: {
    position: "absolute",
    zIndex: 1,
    left: "6%",
    top: "1%",
  },
  carImage: {
    width: "100%",
    height: "100%",
  },
  carNumberInputRight: {
    height: 55,
    width: "22%",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 14,
    fontFamily: "vazir-Medium",
    paddingTop: 8,
  },
  carNumberInputCenterR: {
    height: 55,
    width: "22%",
    borderRadius: 0,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "vazir-Medium",
  },
  carNumberInputCenterL: {
    height: 55,
    width: "20%",
    borderRadius: 0,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "vazir-Medium",
  },
  carNumberInputLeft: {
    height: 55,
    width: "25%",
    borderRadius: 0,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    textAlign: "center",
    fontSize: 15,
    fontFamily: "vazir-Medium",
  },
  kmBox: {
    position: "relative",
  },
  km: {
    position: "absolute",
    zIndex: 1,
    right: "3%",
    top: "35%",
    fontFamily: "digital",
    fontSize: 25,
    fontWeight: "400",
  },
  kmInput: {
    height: 58,
    fontWeight: "400",
    fontSize: 40,
    fontFamily:"digital",
  },
  buttContainer: {
    width: "100%",
    height: 45,
    textAlign: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  butt: {
    height: 45,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 15,
  },
});
