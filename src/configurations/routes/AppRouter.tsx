import React, { useEffect, useCallback } from "react";
import RNBootSplash from "react-native-bootsplash";
import { createSharedElementStackNavigator, SharedElementsConfig } from "react-navigation-shared-element";
import { useSelector, useDispatch } from "react-redux";

import { CardStyleInterpolators, TransitionSpecs } from "@react-navigation/stack";
import { ThemeProvider } from "styled-components/native";

import { getMode } from "src/store/actions/theme/themeAction";
import { RootState } from "src/store/reducers";

import { BOTTOM_NAVIGATOR, PEOPLE_DETAIL } from "src/globals/constants/screens";

import { WrapperSwitchMode } from "./styles";

import { SwitchMode } from "../../components/switchMode/SwitchMode";
import { PeopleDetail } from "../../screens/peopleDetail/PeopleDetail";
import { BottomNavigator } from "./bottomNavigator/BottomNavigator";

const AppStack = createSharedElementStackNavigator();

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

    const renderSwitchMode = useCallback(() => {
        return (
            <WrapperSwitchMode>
                <SwitchMode />
            </WrapperSwitchMode>
        );
    }, []);

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
                                headerRight: renderSwitchMode,
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
                            sharedElementsConfig={(route): SharedElementsConfig => {
                                const { people } = route.params;
                                return [
                                    {
                                        id: `patient.${people.name}.image`,
                                        animation: "fade",
                                    },
                                ];
                            }}
                        />
                    </AppStack.Navigator>
                </ThemeProvider>
            ) : null}
        </>
    );
};
