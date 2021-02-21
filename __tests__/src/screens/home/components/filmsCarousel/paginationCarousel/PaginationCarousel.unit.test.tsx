import React from "react";
import { Pagination } from "react-native-snap-carousel";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../../src/configurations/themes/theme";

import { PaginationCarousel } from "../../../../../../../src/screens/home/components/filmsCarousel/paginationCarousel/PaginationCarousel";

describe("Test of PaginationCarousel", () => {
    it("Test with assets fields", async () => {
        const dotsLength = 1;
        const activeDotIndex = 2;

        const paginationCarousel: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <PaginationCarousel dotsLength={dotsLength} activeDotIndex={activeDotIndex} />
            </ThemeProvider>
        );

        const pagination = paginationCarousel.root.findByType(Pagination);

        expect(pagination.props.dotsLength).toEqual(dotsLength);
        expect(pagination.props.activeDotIndex).toEqual(activeDotIndex);
    });
});
