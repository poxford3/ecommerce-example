import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { Dimensions } from "react-native";
import colors from "../assets/colors";

export default function Test({ navigation }) {
  const screenHeight = Dimensions.screenHeight;
  const images = [
    require("../assets/clothingImages/hoodie1.png"),
    require("../assets/clothingImages/hoodie2.png"),
    require("../assets/clothingImages/hoodie3.png"),
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageHolder}>
        <FlatList
          data={images}
          disableIntervalMomentum={true}
          snapToInterval={400}
          decelerationRate={0}
          snapToAlignment={"center"}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <ImageBackground source={item} style={styles.images}>
                <Text style={styles.testText}>{index}</Text>
              </ImageBackground>
            );
          }}
        />
      </View>
      <Text>Test</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  images: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  imageHolder: {
    borderWidth: 1,
    borderRadius: 1,
    borderColor: colors.black,
    backgroundColor: colors.primary,
    height: 400,
  },
  testText: {
    position: "absolute",
    // top: 0,
    // left: 0,
  },
});
