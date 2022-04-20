import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../pages/HomeScreen";
import AboutScreen from "../pages/AboutScreen";

function HomeStack () {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
    );
}

export default HomeStack