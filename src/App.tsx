import "react-native-gesture-handler";
import React from "react";
import { Host } from "react-native-portalize";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";

import { AppRouter } from "src/configurations/routes/AppRouter";

import store from "./store/reducers/index";

const App = (): React.ReactElement => {
    return (
        <Provider store={store}>
            <Host>
                <NavigationContainer>
                    <AppRouter />
                </NavigationContainer>
            </Host>
        </Provider>
    );
};

export default App;
