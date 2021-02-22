import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../../../src/configurations/themes/theme";

import { Avatar } from "../../../../../../../../src/components/avatar/Avatar";

import { MainItem } from "../../../../../../../../src/screens/home/components/mainPeoples/mainPeopleItem/mainItem/MainItem";

describe("Tests of MainItem", () => {
    it("Text with asserts fields", async () => {
        const imageUrl = "anyImageUrl";
        const name = "anyName";

        const mainItem = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <MainItem imageUrl={imageUrl} name={name} />
            </ThemeProvider>
        );

        const mainImage = mainItem.root.findByType(Avatar);
        const mainName = mainItem.root.findByProps({ testID: "MainName" });

        expect(mainImage.props.avatarUrl).toEqual(imageUrl);
        expect(mainName.props.children).toEqual(name);
    });
});
