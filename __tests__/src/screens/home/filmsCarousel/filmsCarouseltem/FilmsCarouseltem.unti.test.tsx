import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { FilmsCarouselItem } from "../../../../../../src/screens/home/components/filmsCarousel/filmsCarouseltem/FilmsCarouseltem";

import { filmTemplateFull } from "../../../../../dataBuilders/domains/filmTemplate";

describe("Test of FilmsCarouselItem", () => {
    it("Test with asserts fields", async () => {
        const film = filmTemplateFull.build();

        const filmsCarouselItem: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <FilmsCarouselItem film={film} />
            </ThemeProvider>
        );

        const imageFilm = filmsCarouselItem.root.findByProps({ testID: "imageFilm" });
        const title = filmsCarouselItem.root.findByProps({ testID: "title" });

        expect(imageFilm.props.source.uri).toEqual(film.imageUrl);
        expect(title.props.children).toEqual(film.title);
    });
});
