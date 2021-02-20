import React from "react";
import Carousel from "react-native-snap-carousel";
import renderer from "react-test-renderer";

import { when } from "jest-when";
import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../src/configurations/themes/theme";

import { ErrorMessage } from "../../../../../src/components/errorMessage/ErrorMessage";

import { FilmsCarousel } from "../../../../../src/screens/home/components/filmsCarousel/FilmsCarousel";
import { Loading } from "../../../../../src/screens/home/components/filmsCarousel/loading/Loading";
import { PaginationCarousel } from "../../../../../src/screens/home/components/filmsCarousel/paginationCarousel/PaginationCarousel";
import * as UseFindAllFilms from "../../../../../src/screens/home/hooks/useFindAllFilms";

import { filmTemplateFull } from "../../../../dataBuilders/domains/filmTemplate";

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

describe("Test of FilmsCarousel", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    it("Test with render loading", async () => {
        const useFindAllFilmsProps: UseFindAllFilms.UseFindAllFilmsProps = {
            data: undefined,
            errorMessage: undefined,
            isLoading: true,
            setToDefaultValueErrorMessageAndLoading: jest.fn(),
        };

        const mockedUseFindAllFilms = jest.spyOn(UseFindAllFilms, "useFindAllFilms");
        when(mockedUseFindAllFilms).calledWith().mockReturnValue(useFindAllFilmsProps);

        const filmsCarousel: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <FilmsCarousel />
            </ThemeProvider>
        );

        const loading = filmsCarousel.root.findByType(Loading);

        expect(loading).toBeTruthy();
    });

    it("Test with render error", async () => {
        const useFindAllFilmsProps: UseFindAllFilms.UseFindAllFilmsProps = {
            data: undefined,
            errorMessage: "Any error message",
            isLoading: false,
            setToDefaultValueErrorMessageAndLoading: jest.fn(),
        };

        const mockedUseFindAllFilms = jest.spyOn(UseFindAllFilms, "useFindAllFilms");
        when(mockedUseFindAllFilms).calledWith().mockReturnValue(useFindAllFilmsProps);

        const filmsCarousel: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <FilmsCarousel />
            </ThemeProvider>
        );

        const errorMessage = filmsCarousel.root.findByType(ErrorMessage);

        await renderer.act(async () => {
            await errorMessage.props.onPress();
        });

        expect(useFindAllFilmsProps.setToDefaultValueErrorMessageAndLoading).toBeCalled();
        expect(errorMessage).toBeTruthy();
    });

    it("Test with render carousel and pagination", async () => {
        const activeDotIndexExpect = 3;

        const useFindAllFilmsProps: UseFindAllFilms.UseFindAllFilmsProps = {
            data: filmTemplateFull.buildList(1),
            errorMessage: undefined,
            isLoading: false,
            setToDefaultValueErrorMessageAndLoading: jest.fn(),
        };

        const mockedUseFindAllFilms = jest.spyOn(UseFindAllFilms, "useFindAllFilms");
        when(mockedUseFindAllFilms).calledWith().mockReturnValue(useFindAllFilmsProps);

        const filmsCarousel: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <FilmsCarousel />
            </ThemeProvider>
        );

        const carousel = filmsCarousel.root.findByType(Carousel);
        const paginationCarousel = filmsCarousel.root.findByType(PaginationCarousel);

        await renderer.act(async () => {
            await carousel.props.onSnapToItem(activeDotIndexExpect);
        });

        expect(paginationCarousel.props.activeDotIndex).toEqual(activeDotIndexExpect);
        expect(paginationCarousel.props.dotsLength).toEqual(useFindAllFilmsProps.data.length);
        expect(carousel.props.data).toEqual(useFindAllFilmsProps.data);

        expect(carousel).toBeTruthy();
        expect(paginationCarousel).toBeTruthy();
    });
});
