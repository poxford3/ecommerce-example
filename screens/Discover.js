import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors";
import { useFonts } from "expo-font";

export default function Discover({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Criteria-CF": require("../assets/fonts/criteria-cf-bold.otf"),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "Criteria-CF",
          }}
        >
          Discover
        </Text>
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          {/* <Ionicons name="menu-outline" size={50} /> */}
          <View style={styles.hamurgerTopBot}></View>
          <View style={styles.hamurgerMiddle}></View>
          <View style={styles.hamurgerTopBot}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ImageBackground
          source={require("../assets/glasses.png")}
          style={styles.glassesPic}
        >
          <View style={styles.imgTxt}>
            <Text style={styles.imgTxtLg}>New Autumn</Text>
            <Text style={styles.imgTxtLg}>2023 collection</Text>
            <Text style={styles.imgTxtSm}>
              Choose the perfect outfit in our app
            </Text>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  container: {
    flex: 1,
  },
  glassesPic: {
    height: 375,
    width: "100%",
    tintColor: "#3e3e3e",
  },
  hamburger: {
    alignItems: "flex-end",
  },
  hamurgerMiddle: {
    height: 2,
    marginVertical: 7,
    width: 20,
    backgroundColor: colors.black,
  },
  hamurgerTopBot: {
    height: 2,
    width: 30,
    backgroundColor: colors.black,
  },
  header: {
    height: 100,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  imgTxt: {
    flex: 1,
    justifyContent: "flex-end",
    // alignItems: "flex-",
    paddingLeft: 40,
    paddingBottom: 30,
    backgroundColor: "rgba(11,11,11,.5)",
  },
  imgTxtLg: {
    color: colors.white,
    fontFamily: "Criteria-CF",
    fontSize: 30,
    textAlign: "left",
  },
  imgTxtSm: {
    marginTop: 15,
    color: colors.white,
    fontFamily: "Criteria-CF",
    fontSize: 12,
    textAlign: "left",
  },
});
