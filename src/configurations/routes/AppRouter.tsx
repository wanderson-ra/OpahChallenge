import React, { useEffect } from "react";
import RNBootSplash from "react-native-bootsplash";
import { useSelector, useDispatch } from "react-redux";

import { CardStyleInterpolators, createStackNavigator, TransitionSpecs } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components/native";

import { getMode } from "src/store/actions/theme/themeAction";
import { RootState } from "src/store/reducers";

import { BOTTOM_NAVIGATOR, PEOPLE_DETAIL } from "src/globals/constants/screens";

import { PeopleDetail } from "../../screens/peopleDetail/PeopleDetail";
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
                    <AppStack.Navigator initialRouteName={BOTTOM_NAVIGATOR}>
                        <AppStack.Screen
                            options={{
                                gestureEnabled: false,
                                headerStyle: {
                                    backgroundColor: theme.navigation.bar,
                                    shadowOpacity: 0,
                                    shadowRadius: 0,
                                    elevation: 0,
                                },
                                headerTintColor: theme.navigation.title,
                                headerTransparent: false,
                                title: "Star Wars",
                            }}
                            name={BOTTOM_NAVIGATOR}
                            component={BottomNavigator}
                        />

                        <AppStack.Screen
                            options={{
                                gestureEnabled: false,
                                headerBackTitleVisible: false,
                                headerStyle: {
                                    backgroundColor: theme.navigation.bar,
                                    shadowOpacity: 0,
                                    shadowRadius: 0,
                                    elevation: 0,
                                },
                                headerTintColor: theme.navigation.title,
                                headerTransparent: false,
                                title: "",
                                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                                transitionSpec: {
                                    open: TransitionSpecs.TransitionIOSSpec,
                                    close: TransitionSpecs.TransitionIOSSpec,
                                },
                            }}
                            name={PEOPLE_DETAIL}
                            component={PeopleDetail}
                        />
                    </AppStack.Navigator>
                </ThemeProvider>
            ) : null}
        </>
    );
};
