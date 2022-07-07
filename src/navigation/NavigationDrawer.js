
import React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import CreateScreen from "../screens/CreateScreen";




const Drawer = createDrawerNavigator();

export default function NavigationDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Detail" component={DetailScreen} />
      <Drawer.Screen name="Create" component={CreateScreen}  options={{ drawerLabel: 'Crear' }} />
    </Drawer.Navigator>
  );
}