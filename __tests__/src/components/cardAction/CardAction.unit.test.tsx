import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../src/configurations/themes/theme";

import { CardAction } from "../../../../src/components/cardAction/CardAction";

describe("Test of Button", () => {
    it("Test with called card", async () => {
        const action = jest.fn();
        const title = "anyTitle";

        const cardAction: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <CardAction action={action}>
                    <Text testID={"title"}>{title}</Text>
                </CardAction>
            </ThemeProvider>
        );

        const rippleTouchable = cardAction.root.findByProps({ testID: "rippleTouchable" });
        const titleText = cardAction.root.findByProps({ testID: "title" });

        await renderer.act(async () => {
            rippleTouchable.props.onPress();
        });

        expect(titleText.props.children).toEqual(title);
        expect(action).toHaveBeenCalled();
    });
});
