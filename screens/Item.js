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
  // const declarations
  const [sizeSelected, setSizeSelected] = useState(null);
  const [moreLessButton, setMoreLessButton] = useState("more detailed");
  const [numDescriptionLines, setNumDescriptionLines] = useState(3);
  const [scrollEnabling, setScrollEnabling] = useState(false);
  const [colorSelected, setColorSelected] = useState(null);
  const [heartColor, setHeartColor] = useState(colors.primary);
  const [heartIcon, setHeartIcon] = useState("heart-outline");

  const itemInfo = route.params.item;
  // console.log(itemInfo.colors);

  // objects
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

  const colorList = itemInfo.colors;
  const imgList = itemInfo.imgs;

  // custom components
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

  const ColorListView = ({ item, borderWidth }) => {
    return (
      <TouchableOpacity
        style={[styles.colorCircle, { borderWidth: borderWidth }]}
        onPress={() => setColorSelected(item.id)}
      >
        <View
          style={{
            backgroundColor: item.colorX,
            margin: 3,
            flex: 1,
            borderRadius: 15,
          }}
        ></View>
      </TouchableOpacity>
    );
  };

  // functions
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

  const renderColorList = ({ item }) => {
    const borderWidth = item.id == colorSelected ? 1 : null;

    return <ColorListView item={item} borderWidth={borderWidth} />;
  };

  const moreLessFunc = () => {
    if (numDescriptionLines == 3) {
      setMoreLessButton("less detailed");
      setNumDescriptionLines(18);
      setScrollEnabling(true);
    } else {
      setMoreLessButton("more detailed");
      setNumDescriptionLines(3);
      setScrollEnabling(false);
    }
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
        <TouchableOpacity
          onPress={() => {
            // navigation.navigate("Test");
          }}
        >
          <Ionicons name="basket-outline" size={36} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageList}>
        <FlatList
          data={imgList}
          disableIntervalMomentum={true}
          snapToInterval={350} // this number is the height of the view
          decelerationRate={0}
          snapToAlignment={"center"}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <ImageBackground
                source={item}
                style={styles.images}
                resizeMode={"contain"}
              >
                {/* <Text style={styles.testText}>{index}</Text> */}
              </ImageBackground>
            );
          }}
        />
        {/* <ImageBackground
          source={itemInfo.imgs[0]}
          style={styles.images}
        ></ImageBackground> */}
      </View>
      <View style={styles.body}>
        <View style={styles.desrciption}>
          <View style={styles.itemHeader}>
            <Text style={styles.topText}>{itemInfo.clothingName}</Text>
            <Text style={styles.topText}>{`$${itemInfo.price}`}</Text>
          </View>
          <View style={styles.info}>
            <ScrollView scrollEnabled={scrollEnabling}>
              <Text
                numberOfLines={numDescriptionLines}
                style={{ color: colors.primary }}
              >
                {itemInfo.description}
              </Text>
            </ScrollView>
            <Text style={styles.moreLessStyle} onPress={moreLessFunc}>
              {moreLessButton}
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
          <FlatList
            data={colorList}
            scrollEnabled={false}
            horizontal={true}
            renderItem={renderColorList}
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.favButton}
            onPress={() => {
              if (heartColor == colors.primary) {
                setHeartColor(colors.red);
                setHeartIcon("heart");
              } else {
                setHeartColor(colors.primary);
                setHeartIcon("heart-outline");
              }
            }}
          >
            <Ionicons name={heartIcon} size={35} color={heartColor} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buyNowButton}>
            <Text style={{ color: colors.white, fontFamily: "Criteria-CF" }}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 20,
    justifyContent: "space-between",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    padding: 10,
  },
  buyNowButton: {
    // width: 300,
    width: "80%",
    height: 50,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
  },
  colorCircle: {
    height: 30,
    width: 30,
    borderRadius: 15,
    margin: 7,
    borderColor: colors.black,
    // borderWidth: 1,
  },
  container: {
    flex: 1,
  },
  desrciption: {
    fontFamily: "Criteria-CF",
  },
  favButton: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightgrey,
  },
  header: {
    height: 90,
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
    height: 350,
    // width: screenWidth,
  },
  imageList: {
    height: 350,
  },
  info: {
    maxHeight: 150,
  },
  itemHeader: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  moreLessStyle: {
    fontWeight: "bold",
    fontFamily: "Criteria-CF",
  },
  selections: {
    marginVertical: 10,
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
