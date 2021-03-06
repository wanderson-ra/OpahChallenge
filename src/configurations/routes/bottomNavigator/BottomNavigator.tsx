import * as React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "styled-components/native";

import { strings } from "src/utils/strings";

import { Home } from "src/screens/home/Home";
import { ListPlanets } from "src/screens/planets/ListPlanets";

import { HOME, PLANETS } from "src/globals/constants/screens";

const BottomNavigatorStack = createMaterialBottomTabNavigator();

export const BottomNavigator = (): React.ReactElement => {
    const theme = useTheme();

    return (
        <BottomNavigatorStack.Navigator
            barStyle={{
                backgroundColor: theme.bottomNavigator.backgroundColor,
            }}
            activeColor={theme.bottomNavigator.activeColor}
            inactiveColor={theme.bottomNavigator.inactiveColor}
            shifting={true}
            sceneAnimationEnabled={false}
            initialRouteName={HOME}
            labeled
        >
            <BottomNavigatorStack.Screen
                options={{ tabBarIcon: "home-account", tabBarLabel: strings.bottomTabs.home }}
                name={HOME}
                component={Home}
            />

            <BottomNavigatorStack.Screen
                options={{ tabBarIcon: "earth", tabBarLabel: strings.bottomTabs.planets }}
                name={PLANETS}
                component={ListPlanets}
            />
        </BottomNavigatorStack.Navigator>
    );
};
