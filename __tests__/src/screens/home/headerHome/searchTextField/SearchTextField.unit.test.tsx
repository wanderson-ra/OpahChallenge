import React from "react";
import Ripple from "react-native-material-ripple";

import { render, cleanup, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { SearchTextField } from "../../../../../../src/screens/home/components/headerHome/searchTextField/SearchTextField";

describe("Tests of SearchTextField", () => {
    beforeEach(() => {
        cleanup();
    });

    it("Text snapshot", async () => {
        const value = "";
        const placeholder = "anyPlaceholder";
        const onChangeText = jest.fn();

        const searchTextField = render(
            <ThemeProvider theme={colorTheme.light}>
                <SearchTextField onChangeText={onChangeText} placeholder={placeholder} value={value} />
            </ThemeProvider>
        );

        expect(searchTextField.toJSON()).toMatchSnapshot();
    });

    it("Text with text changed and clear text", async () => {
        const value = "";
        const placeholder = "anyPlaceholder";
        const onChangeText = jest.fn();

        const newValue = "anyNewValue";

        const searchTextField = render(
            <ThemeProvider theme={colorTheme.light}>
                <SearchTextField onChangeText={onChangeText} placeholder={placeholder} value={value} />
            </ThemeProvider>
        );

        const input = searchTextField.getByTestId("input");
        fireEvent(input, "onChangeText", newValue);
        expect(onChangeText).toHaveBeenCalledWith(newValue);

        const clearButton = searchTextField.UNSAFE_getByType(Ripple);
        fireEvent(clearButton, "onPress");
        expect(onChangeText).toHaveBeenCalledWith("");
    });
});
