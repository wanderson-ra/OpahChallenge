import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../src/configurations/themes/theme";

import { Conditional } from "../../../../src/components/conditional/Conditional";

describe("Tests of Conditional", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("Test with render children", () => {
        const textToRender = "anyTextToRende";
        const condition = true;

        const conditional: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Conditional when={condition}>
                    <Text testID={"condition"}>{textToRender}</Text>
                </Conditional>
            </ThemeProvider>
        );

        const textToRenderResponse = conditional.root.findByProps({ testID: "condition" });
        expect(textToRender).toEqual(textToRenderResponse.props.children);
    });

    it("Test with not render children", () => {
        const textToRender = "anyTextToRende";
        const condition = false;

        const conditional: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Conditional when={condition}>
                    <Text testID={"condition"}>{textToRender}</Text>
                </Conditional>
            </ThemeProvider>
        );

        const textToRenderResponse = conditional.root.findAllByProps({ testID: "condition" });
        expect(0).toEqual(textToRenderResponse.length);
    });
});
