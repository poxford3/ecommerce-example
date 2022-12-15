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
          contentInset={{ top: 400, bottom: 400, right: 0, left: 0 }}
          renderItem={({ item, index }) => {
            return (
              <ImageBackground source={item} style={styles.images}>
                <Text>{index}</Text>
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
  },
  imageHolder: {
    height: 400,
  },
});
