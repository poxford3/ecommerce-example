import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Item({ navigation, route }) {
  const itemInfo = route.params.item;
  // console.log(itemInfo);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
