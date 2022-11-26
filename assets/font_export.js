import { useFonts } from "expo-font";

// best method of importing fonts:
// https://docs.expo.dev/guides/using-custom-fonts/
const [fontsLoaded] = useFonts({
  "Criteria-CF": require("../assets/fonts/criteria-cf-bold.otf"),
});

export default fontsLoaded;
