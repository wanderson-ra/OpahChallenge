import React from "react";
import SwitchSelector from "react-native-switch-selector";
import { Provider } from "react-redux";
import * as Redux from "react-redux";
import renderer from "react-test-renderer";

import { when } from "jest-when";
import { Store } from "redux";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../src/configurations/themes/theme";

import * as ThemeAction from "../../../../src/store/actions/theme/themeAction";
import { ThemeState, ThemeReducer } from "../../../../src/store/reducers/theme/themeReducer";

import { SwitchMode } from "../../../../src/components/switchMode/SwitchMode";

const mockStore = configureStore([]);

describe("Test of SwitchMode", () => {
    let store: Store;

    let switchMode: renderer.ReactTestRenderer;

    it("Test save mode light", async () => {
        const mode = "dark";
        const expectMode = "light";

        const mockThemeReducer: ThemeReducer = {
            mode: mode,
            theme: colorTheme.light,
        };

        const initialPropsWith: ThemeState = {
            themeReducer: mockThemeReducer,
        };

        store = mockStore({
            userReducer: initialPropsWith,
        });

        store.dispatch = jest.fn();

        const mockedUseSelector = jest.spyOn(Redux, "useSelector");
        when(mockedUseSelector).calledWith(expect.any).mockReturnValue(mockThemeReducer);

        const mockedThemeAction = jest.spyOn(ThemeAction, "saveMode");

        await renderer.act(async () => {
            switchMode = renderer.create(
                <Provider store={store}>
                    <ThemeProvider theme={colorTheme.dark}>
                        <SwitchMode />
                    </ThemeProvider>
                </Provider>
            );
        });

        const switchSelector = switchMode.root.findByType(SwitchSelector);

        await renderer.act(async () => {
            switchSelector.props.onPress(expectMode);
        });

        expect(mockedThemeAction).toBeCalledWith(expectMode);
    });

    it("Test snapshot", async () => {
        const mode = "light";

        const mockThemeReducer: ThemeReducer = {
            mode: mode,
            theme: colorTheme.light,
        };

        const initialPropsWith: ThemeState = {
            themeReducer: mockThemeReducer,
        };

        store = mockStore({
            userReducer: initialPropsWith,
        });

        store.dispatch = jest.fn();

        const mockedUseSelector = jest.spyOn(Redux, "useSelector");
        when(mockedUseSelector).calledWith(expect.any).mockReturnValue(mockThemeReducer);

        await renderer.act(async () => {
            switchMode = renderer.create(
                <Provider store={store}>
                    <ThemeProvider theme={colorTheme.dark}>
                        <SwitchMode />
                    </ThemeProvider>
                </Provider>
            );
        });

        expect(switchMode.toJSON()).toMatchSnapshot();
    });
});
