import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  FlatList,
  ImagePickerIOS,
} from "react-native";
import { Dimensions } from "react-native";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors";

const screenWidth = Dimensions.get("window").width;

export default function Item({ navigation, route }) {
  const [sizeSelected, setSizeSelected] = useState(null);
  const [colorSelected, setColorSelected] = useState(null);

  const itemInfo = route.params.item;

  const sizes = [
    {
      id: 1,
      size: "XS",
    },
    {
      id: 2,
      size: "S",
    },
    {
      id: 3,
      size: "M",
    },
    {
      id: 4,
      size: "L",
    },
    {
      id: 5,
      size: "XL",
    },
  ];

  const SizeListView = ({ item, backgroundColor, textColor }) => {
    return (
      <TouchableOpacity
        style={[styles.sizeList, { backgroundColor }]}
        onPress={() => setSizeSelected(item.id)}
      >
        <Text style={{ color: textColor }}>{item.size}</Text>
      </TouchableOpacity>
    );
  };

  const renderSizes = ({ item }) => {
    const backgroundColor =
      item.id == sizeSelected ? colors.black : colors.white;
    const textColor = item.id == sizeSelected ? colors.white : colors.black;

    return (
      <SizeListView
        item={item}
        backgroundColor={backgroundColor}
        textColor={textColor}
      />
    );
  };

  const ColorListView = ({ color, borderWidth }) => {
    return (
      <TouchableOpacity
        style={[styles.colorList, { color: color, borderWidth: borderWidth }]}
        onPress={() => setColorSelected(null)}
      ></TouchableOpacity>
    );
  };

  const [fontsLoaded] = useFonts({
    "Criteria-CF": require("../assets/fonts/criteria-cf-bold.otf"),
  });
  // console.log(itemInfo.description);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="arrow-back" size={36} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{itemInfo.brand}</Text>
        <TouchableOpacity>
          <Ionicons name="basket-outline" size={36} />
        </TouchableOpacity>
      </View>
      {/* below needs to be a scrolling view with autolocking */}
      <View style={styles.imageList}>
        <ImageBackground
          source={itemInfo.img}
          style={styles.images}
        ></ImageBackground>
      </View>
      <View style={styles.body}>
        <View style={styles.desrciption}>
          <View style={styles.itemHeader}>
            <Text style={styles.topText}>{itemInfo.clothingName}</Text>
            <Text style={styles.topText}>{`$${itemInfo.price}`}</Text>
          </View>
          <View style={styles.info}>
            <Text style={{ color: colors.primary }}>
              {itemInfo.description}
            </Text>
          </View>
        </View>
        <View style={styles.selections}>
          <FlatList
            data={sizes}
            scrollEnabled={false}
            horizontal={true}
            extraData={sizeSelected}
            renderItem={renderSizes}
          />
          <FlatList data={itemInfo.colors} />
        </View>
        <View style={styles.buttons}></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
  },
  buttons: {},
  colorList: {
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: colors.black,
  },
  container: {
    flex: 1,
  },
  desrciption: {},
  header: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  headerText: {
    fontFamily: "Criteria-CF",
    fontSize: 30,
  },
  images: {
    height: "100%",
    // width: screenWidth,
  },
  imageList: {
    height: 300,
  },
  info: {},
  itemHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  selections: {
    marginTop: 20,
  },
  sizeList: {
    height: 40,
    width: 40,
    borderColor: colors.black,
    borderWidth: 1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  topText: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
