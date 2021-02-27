import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { Loading } from "../../../../../../src/screens/planets/components/loading/Loading";

describe("Test of Loading", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    it("Test with render", async () => {
        const loading: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Loading />
            </ThemeProvider>
        );

        expect(loading).toBeTruthy();
    });
});
