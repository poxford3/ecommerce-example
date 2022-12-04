import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors";
import { useFonts } from "expo-font";

const screenWidth = Dimensions.get("window").width;

export default function Discover({ navigation }) {
  const [selectedId, setSelectedId] = useState(1);

  const [fontsLoaded] = useFonts({
    "Criteria-CF": require("../assets/fonts/criteria-cf-bold.otf"),
  });

  const categories = [
    {
      id: 1,
      title: "New arrivals",
    },
    {
      id: 2,
      title: "Jeans",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Jackets",
    },
    {
      id: 5,
      title: "Shirts",
    },
  ];

  const clothesList = [
    {
      id: 1,
      refId: 1,
      imgs: [
        require("../assets/clothingImages/hoodie1.png"),
        require("../assets/clothingImages/hoodie2.png"),
        require("../assets/clothingImages/hoodie3.png"),
      ],
      price: 160.0,
      clothingName: "Men Hoodie",
      brand: "Brand1",
      colors: {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis. Tincidunt dui ut ornare lectus sit. In iaculis nunc sed augue lacus viverra vitae. Eget arcu dictum varius duis at consectetur. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut. Facilisis leo vel fringilla est. Et netus et malesuada fames. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Elementum tempus egestas sed sed risus. Pretium fusce id velit ut. Nascetur ridiculus mus mauris vitae ultricies leo.",
    },
    {
      id: 2,
      refId: 1,
      // img: require("../assets/clothingImages/hoodie1.png"),
      imgs: [
        require("../assets/clothingImages/beanie1.png"),
        require("../assets/clothingImages/beanie2.png"),
        require("../assets/clothingImages/beanie3.png"),
      ],
      price: 100.0,
      clothingName: "Autumn yellow hat",
      brand: "Brand1",
      colors: {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis. Tincidunt dui ut ornare lectus sit. In iaculis nunc sed augue lacus viverra vitae. Eget arcu dictum varius duis at consectetur. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut. Facilisis leo vel fringilla est. Et netus et malesuada fames. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Elementum tempus egestas sed sed risus. Pretium fusce id velit ut. Nascetur ridiculus mus mauris vitae ultricies leo.",
    },
    {
      id: 3,
      refId: 2,
      imgs: [
        require("../assets/clothingImages/jeans1.png"),
        require("../assets/clothingImages/jeans2.png"),
        require("../assets/clothingImages/jeans3.png"),
      ],
      price: 130.0,
      clothingName: "Blue jeans",
      brand: "Brand1",
      colors: {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis. Tincidunt dui ut ornare lectus sit. In iaculis nunc sed augue lacus viverra vitae. Eget arcu dictum varius duis at consectetur. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut. Facilisis leo vel fringilla est. Et netus et malesuada fames. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Elementum tempus egestas sed sed risus. Pretium fusce id velit ut. Nascetur ridiculus mus mauris vitae ultricies leo.",
    },
    {
      id: 4,
      refId: 2,
      imgs: [
        require("../assets/clothingImages/blkJeans1.png"),
        require("../assets/clothingImages/blkJeans2.png"),
        require("../assets/clothingImages/blkJeans3.png"),
      ],
      price: 125,
      clothingName: "Black jeans",
      brand: "Brand2",
      colors: {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus sit amet luctus venenatis. Tincidunt dui ut ornare lectus sit. In iaculis nunc sed augue lacus viverra vitae. Eget arcu dictum varius duis at consectetur. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Diam maecenas sed enim ut. Facilisis leo vel fringilla est. Et netus et malesuada fames. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Elementum tempus egestas sed sed risus. Pretium fusce id velit ut. Nascetur ridiculus mus mauris vitae ultricies leo.",
    },
    {
      id: 5,
      refId: 2,
      imgs: [
        require("../assets/clothingImages/jorts1.png"),
        require("../assets/clothingImages/jorts2.png"),
        require("../assets/clothingImages/jorts3.png"),
      ],
      price: 1205.0,
      clothingName: "Jorts",
      brand: "Brand3",
      colors: {
        red: "#ff0000",
        green: "#00ff00",
        blue: "#0000ff",
      },
      description: "This description is not as big as the rest.",
    },
  ];

  const CategoryObj = ({ item, borderWidth, textColor }) => {
    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <View style={[styles.catView, { borderBottomWidth: borderWidth }]}>
          <Text style={[styles.catText, { color: textColor }]}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const ClothingItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.clothesBox}
        onPress={() => {
          navigation.navigate("Item", {
            item: item,
          });
        }}
      >
        <ImageBackground source={item.imgs[0]} style={styles.clothesImage}>
          <TouchableOpacity onPress={() => {}}>
            {/* will want to set it to make the heart red  */}
            <Ionicons name="heart-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
        </ImageBackground>
        <Text style={styles.clothesText}>{item.clothingName}</Text>
        <Text
          style={{ fontWeight: "bold", fontSize: 26 }}
        >{`$${item.price}`}</Text>
      </TouchableOpacity>
    );
  };

  const renderCat = ({ item }) => {
    const borderWidth = item.id === selectedId ? 2 : 0;
    const textColor = item.id === selectedId ? colors.black : colors.primary;
    // const borderWidth = item.id === selectedId ? 2 : 0;

    return (
      <CategoryObj
        item={item}
        borderWidth={borderWidth}
        textColor={textColor}
      />
    );
  };

  const filteredClothes = clothesList.filter((x) => x.refId == selectedId);

  useEffect(() => {
    // console.log(filteredClothes);
  }, [selectedId]);

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
        <View style={styles.catList}>
          <FlatList
            data={categories}
            renderItem={renderCat}
            extraData={selectedId}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.clothingOptionsView}>
          <FlatList
            data={filteredClothes}
            numColumns={2}
            renderItem={({ item }) => <ClothingItem item={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  catList: {
    paddingHorizontal: 10,
    marginTop: 30,
    height: 50,
  },
  catText: {
    fontSize: 20,
  },
  catView: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 2,
  },
  clothesBox: {
    padding: 30,
    height: 240,
    width: screenWidth * 0.5,
    justifyContent: "center",
  },
  clothesImage: {
    height: 140,
    width: 140,
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  clothesText: {
    marginTop: 5,
    fontSize: 18,
  },
  clothingOptionsView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
