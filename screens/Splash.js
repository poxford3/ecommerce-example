import React, { useCallback } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../assets/colors";

export default function Splash({ navigation }) {
  const [fontsLoaded] = useFonts({
    "Criteria-CF": require("../assets/fonts/criteria-cf-bold.otf"),
  });

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/splash_img.jpeg")}
        style={styles.imageBG}
      >
        <View style={{ flex: 1, alignItems: "flex-end" }}>
          <View style={styles.textContainer}>
            <View style={styles.top}>
              <Text style={styles.text}>NEW</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Draw");
                }}
              >
                <Ionicons name="arrow-forward" size={74} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.middle}>
              <Text
                style={[
                  styles.text,
                  {
                    textAlign: "center",
                  },
                ]}
              >
                ARRIVALS
              </Text>
            </View>
            <View style={styles.bottom}>
              <Text style={styles.text}>TODAY</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
    justifyContent: "center",
  },
  middle: {
    marginBottom: 20,
  },
  text: {
    color: colors.white,
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "Criteria-CF",
  },
  textContainer: {
    padding: 10,
    paddingLeft: 30,
    width: "90%",
    height: "85%",
    justifyContent: "flex-end",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
