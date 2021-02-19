import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import RNBootSplash from "react-native-bootsplash";
import { useSelector, useDispatch } from "react-redux";

import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components/native";

import { getMode } from "src/store/actions/theme/themeAction";
import { RootState } from "src/store/reducers";

import { BOTTOM_NAVIGATOR } from "src/globals/constants/screens";

import { BottomNavigator } from "./bottomNavigator/BottomNavigator";

const AppStack = createStackNavigator();

export const AppRouter = (): React.ReactElement => {
    const dispatch = useDispatch();

    const { mode, theme } = useSelector((state: RootState) => state.themeReducer.themeReducer);

    useEffect(() => {
        if (mode && theme) {
            RNBootSplash.hide({ fade: true });
        }
    }, [mode, theme]);

    useEffect(() => {
        dispatch(getMode());
    }, [dispatch]);

    return (
        <>
            {mode && theme ? (
                <ThemeProvider theme={theme}>
                    <AppStack.Navigator headerMode={"none"} initialRouteName={BOTTOM_NAVIGATOR}>
                        <AppStack.Screen name={BOTTOM_NAVIGATOR} component={BottomNavigator} />
                    </AppStack.Navigator>
                </ThemeProvider>
            ) : null}
        </>
    );
};
