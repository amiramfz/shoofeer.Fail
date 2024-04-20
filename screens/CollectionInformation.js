import { View, StyleSheet, TextInput, Text, Image } from "react-native";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import Colors from "../assets/constatns/Colors";
import Card from "../components/Card";
import PrimaryButton1 from "../components/PrimaryButton1";
import HeadLine from "../components/HeadLine";

export default function CollectionInformation() {
  const [logoimage, setLogoimage] = useState("");
  const [licenseimage, setLicenseimage] = useState("");
  function saveHandler() {}
  function addAdress() {}
  function addMaster() {}

  return (
    <>
      <Card title="اطلاعات مجموعه">
        <View style={styles.inputBox}>
          <HeadLine>نام مجموعه</HeadLine>
          <TextInput style={[styles.inputS]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>آدرس</HeadLine>
          <TextInput style={[styles.inputS, styles.addresInput]} />
          <View style={styles.plusButt}>
            <Text onPress={addAdress} style={styles.plusButt}>
              افزودن روی نقشه
            </Text>
            <AntDesign name="plus" size={15} color={Colors.primaryGreen2} />
          </View>
        </View>
        <View style={styles.inputBox}>
          <HeadLine>نام صاحب امتیاز</HeadLine>
          <TextInput style={[styles.inputS]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>روز و ساعت کاری</HeadLine>
          <TextInput style={[styles.inputS]} />
        </View>
        <View style={styles.inputBox}>
          <HeadLine>استاد کاران</HeadLine>
          <TextInput style={[styles.inputS]} />
          <View style={styles.plusButt}>
            <Text onPress={addMaster} style={styles.plusButt}>
              افزودن
            </Text>
            <AntDesign name="plus" size={15} color={Colors.primaryGreen2} />
          </View>
        </View>
        <View style={styles.inputBox}>
          <HeadLine>خدمات</HeadLine>
          <View style={styles.servissBox}></View>
          <View style={styles.plusButt}>
            <Text onPress={addAdress} style={styles.plusButt}>
              افزودن خدمات
            </Text>
            <AntDesign name="plus" size={15} color={Colors.primaryGreen2} />
          </View>
        </View>
        <View style={styles.inputBox}>
          <HeadLine>لوگو</HeadLine>
          {logoimage == "" ? (
            <View style={styles.logoimg}>
              <Image
                style={styles.imageIcon}
                source={require("../assets/image/icons/photo 1.png")}
              />
            </View>
          ) : (
            <Image source={logoimage}></Image>
          )}
          <View style={styles.imageButtContainer}>
            <PrimaryButton1 style={styles.imgUpLoadButton}>
              <Ionicons name="cloud-upload-outline" size={24} color="black" />
            </PrimaryButton1>
            <PrimaryButton1 style={styles.imgTakeButton}>
              <Ionicons name="camera-outline" size={24} color="black" />
            </PrimaryButton1>
          </View>
        </View>
        <View style={styles.inputBox}>
          <HeadLine>جواز</HeadLine>
          {licenseimage == "" ? (
            <View style={styles.logoimg}>
              <Image
                style={styles.imageIcon}
                source={require("../assets/image/icons/photo 1.png")}
              />
            </View>
          ) : (
            <Image source={licenseimage}></Image>
          )}
          <View style={styles.imageButtContainer}>
            <PrimaryButton1 style={styles.imgUpLoadButton}>
              <Ionicons name="cloud-upload-outline" size={24} color="black" />
            </PrimaryButton1>
            <PrimaryButton1 style={styles.imgTakeButton}>
              <Ionicons name="camera-outline" size={24} color="black" />
            </PrimaryButton1>
          </View>
        </View>
        <View style={styles.buttContainer}>
          <PrimaryButton1 buttHandler={saveHandler} style={styles.butt}>
            ذخیره
          </PrimaryButton1>
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
  addresInput: {
    minHeight: 35,
    height: "auto",
    overflow: "scroll",
  },
  plusButt: {
    color: Colors.primaryGreen2,
    flexDirection: "row",
    width: "96%",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },

  servissBox: {
    width: "100%",
    height: 130,
    backgroundColor: Colors.primaryGray,
    borderRadius: 15,
  },
  logoimg: {
    width: "100%",
    height: 90,
    backgroundColor: "#B0B3B8",
    opacity: 0.7,
    borderRadius: 15,
    borderWidth: 4,
    borderStyle: "dashed",
    borderColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: {
    width: 57,
    height: 53,
  },
  imageButtContainer:{
    flexDirection:'row',
    justifyContent:"space-between"
  },
  imgTakeButton:{
    width:'45%',
    backgroundColor:Colors.primaryBlue,
    borderRadius:10,
    height:35,
  },
  imgUpLoadButton:{
    width:'45%',
    backgroundColor:Colors.primaryGreen,
    borderRadius:10,
    height:35,
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
