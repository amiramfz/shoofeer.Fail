import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import Starting from "./screens/Starting";
import Login from "./screens/Login";
import ComfirmLogin from "./screens/ComfirmLogin";
import AddCarData from "./screens/AddCarData";
import CollectionInformation from "./screens/CollectionInformation";
import Services from "./screens/Services";
import FuelManagement from "./screens/FuelManagement";
import AddMachin from "./screens/AddMachin";
import MainService from "./screens/MainService";
import AppLoading from "expo-app-loading";
import Colors from "./assets/constatns/Colors";

export default function App() {
  const [fontLoaded] = useFonts({
    "vazir-Bold": require("./assets/fonts/vazir/Vazirmatn-Bold.ttf"),
    "vazir-Light": require("./assets/fonts/vazir/Vazirmatn-Light.ttf"),
    "vazir-Medium": require("./assets/fonts/vazir/Vazirmatn-Medium.ttf"),
    "vazir-Regular": require("./assets/fonts/vazir/Vazirmatn-Regular.ttf"),
    "vazir-Thin": require("./assets/fonts/vazir/Vazirmatn-Thin.ttf"),
    digital: require("./assets/fonts/digital-7/digital-7.ttf"),
  });
  // if (!fontLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.rootContainer}>
        {/* <Starting /> */}
        {/* <Login /> */}
        {/* <ComfirmLogin /> */}
        <AddCarData />
        {/* <CollectionInformation /> */}
        {/* <Services /> */}
        {/* <FuelManagement /> */}
        {/* <AddMachin /> */}
        {/* <MainService />  */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.primaryBlack500,
    alignItems: "center",
    justifyContent: "center",
  },
});
