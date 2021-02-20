import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { Loading } from "../../../../../../src/screens/home/components/filmsCarousel/loading/Loading";

describe("Test of Button", () => {
    it("Test snapshot", async () => {
        const loading: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Loading />
            </ThemeProvider>
        );

        expect(loading).toBeTruthy();
    });
});
