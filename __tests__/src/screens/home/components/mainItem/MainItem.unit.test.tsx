import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { MainItem } from "../../../../../../src/screens/home/components/mainItem/MainItem";

describe("Tests of MainItem", () => {
    it("Text with asserts fields", async () => {
        const imageUrl = "anyImageUrl";
        const name = "anyName";

        const mainItem = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <MainItem imageUrl={imageUrl} name={name} />
            </ThemeProvider>
        );

        const mainImage = mainItem.root.findByProps({ testID: "MainImage" });
        const mainName = mainItem.root.findByProps({ testID: "MainName" });

        expect(mainImage.props.source.uri).toEqual(imageUrl);
        expect(mainName.props.children).toEqual(name);
    });
});
