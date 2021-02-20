import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../src/configurations/themes/theme";

import { Button } from "../../../../src/components/button/Button";

describe("Test of Button", () => {
    it("Test snapshot", async () => {
        const title = "anyTitle";
        const onPress = jest.fn();
        const enable = false;

        const button: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Button title={title} enable={enable} onPress={onPress} />
            </ThemeProvider>
        );

        expect(button.toJSON()).toMatchSnapshot();
    });

    it("Test with not called", async () => {
        const title = "anyTitle";
        const onPress = jest.fn();
        const enable = false;

        const button: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Button title={title} enable={enable} onPress={onPress} />
            </ThemeProvider>
        );

        const rippleTouchable = button.root.findByProps({ testID: "button" });
        const titleText = button.root.findByProps({ testID: "title" });

        await renderer.act(async () => {
            rippleTouchable.props.onPress();
        });

        expect(titleText.props.children).toEqual(title);
    });

    it("Test with called", async () => {
        const title = "anyTitle";
        const onPress = jest.fn();
        const enable = true;

        const button: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Button title={title} enable={enable} onPress={onPress} />
            </ThemeProvider>
        );

        const rippleTouchable = button.root.findByProps({ testID: "button" });
        const titleText = button.root.findByProps({ testID: "title" });

        await renderer.act(async () => {
            rippleTouchable.props.onPress();
        });

        expect(titleText.props.children).toEqual(title);
    });
});
