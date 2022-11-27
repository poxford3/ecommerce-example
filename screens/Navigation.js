import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "./Splash";
import Item from "./Item";

import Discover from "./Discover";
import Settings from "./Settings";
import Profile from "./Profile";
import colors from "../assets/colors";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Draw" component={DrawNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

export function DrawNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Discover"
        screenOptions={{
          headerShown: false,
          drawerPosition: "right",
        }}
      >
        <Drawer.Screen name="Discover" component={Discover} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Item" component={Item} screenOptions={{}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
