import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Splash from "./screens/Splash";
import Navigation from "./screens/Navigation";

export default function App() {
  // return <Splash />;
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
