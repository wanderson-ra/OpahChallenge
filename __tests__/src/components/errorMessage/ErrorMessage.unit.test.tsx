import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../src/configurations/themes/theme";

import { ErrorMessage, MessageProps } from "../../../../src/components/errorMessage/ErrorMessage";

describe("Test of ErrorMessage", () => {
    it("Render with success", () => {
        const message = "anyMessage";
        const icon = "lan-disconnect";
        const buttonTitle = "anyButtonTitle";
        const onPress = jest.fn();

        const messageProps: MessageProps = {
            message: message,
            icon: icon,
            buttonTitle: buttonTitle,
        };

        const errorMessage: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <ErrorMessage messageProps={messageProps} onPress={onPress} />
            </ThemeProvider>
        );

        const messageText = errorMessage.root.findByProps({ testID: "message" });
        const iconText = errorMessage.root.findByProps({ testID: "icon" });

        expect(messageText.props.children).toEqual(message);
        expect(iconText.props.name).toEqual(icon);

        const button = errorMessage.root.findByProps({ testID: "buttonPageMessage" });

        renderer.act(() => {
            button.props.onPress();
            expect(onPress).toHaveBeenCalledTimes(1);
        });
    });

    it("Render with error button title", () => {
        const message = "anyMessage";
        const icon = "lan-disconnect";
        const buttonTitle = "anyButtonTitle";
        const onPress = jest.fn();

        const messageProps: MessageProps = {
            message: message,
            icon: icon,
            buttonTitle: buttonTitle,
        };

        const errorMessage: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <ErrorMessage messageProps={messageProps} onPress={onPress} />
            </ThemeProvider>
        );

        const messageText = errorMessage.root.findByProps({ testID: "message" });
        const iconText = errorMessage.root.findByProps({ testID: "icon" });

        expect(messageText.props.children).toEqual(message);

        expect(iconText.props.name).toEqual(icon);

        const button = errorMessage.root.findByProps({ testID: "buttonPageMessage" });

        renderer.act(() => {
            button.props.onPress();
            expect(onPress).toHaveBeenCalledTimes(1);
        });
    });
});
