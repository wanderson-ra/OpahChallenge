import React from "react";
import { ActivityIndicator } from "react-native";
import * as Redux from "react-redux";
import renderer from "react-test-renderer";

import { when } from "jest-when";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { ThemeReducer, ThemeState } from "../../../../../../src/store/reducers/theme/themeReducer";

import * as UseFindByPlanetsWithPageNumber from "../../../../../../src/screens/planets/components/planets/hooks/useFindPlanetsWithPageNumber";
import { Planets } from "../../../../../../src/screens/planets/components/planets/Planets";

import { planetTemplateFull } from "../../../../../dataBuilders/domains/planet.template";

const mockStore = configureStore([]);

describe("Test of Planets", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    const mode = "dark";

    const mockThemeReducer: ThemeReducer = {
        mode: mode,
        theme: colorTheme.light,
    };

    const initialPropsWith: ThemeState = {
        themeReducer: mockThemeReducer,
    };

    const store = mockStore({
        userReducer: initialPropsWith,
    });

    store.dispatch = jest.fn();

    const mockedUseSelector = jest.spyOn(Redux, "useSelector");
    when(mockedUseSelector).calledWith(expect.any).mockReturnValue(mockThemeReducer);

    it("Test with render initial planets", async () => {
        const initialPlanets = planetTemplateFull.buildList(1);

        const planets: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Planets initialPlanets={initialPlanets} />
            </ThemeProvider>
        );

        const listPlanets = planets.root.findByProps({ testID: "Planets" });

        expect(listPlanets.props.data).toEqual(initialPlanets);
    });

    it("Test with render load more itens", async () => {
        const useFindByPlanetsWithPageNumberProps: UseFindByPlanetsWithPageNumber.UseFindByPlantsWithPageNumberProps = {
            findByPlanetsWithPageNumber: jest.fn(),
            isLoading: false,
            planets: planetTemplateFull.buildList(3),
        };

        const mockedUseFindByPlanetsWithPageNumber = jest.spyOn(
            UseFindByPlanetsWithPageNumber,
            "useFindByPlanetsWithPageNumber"
        );

        when(mockedUseFindByPlanetsWithPageNumber).calledWith().mockReturnValue(useFindByPlanetsWithPageNumberProps);

        const initialPlanets = planetTemplateFull.buildList(1);

        const planets: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Planets initialPlanets={initialPlanets} />
            </ThemeProvider>
        );

        const listPlanets = planets.root.findByProps({ testID: "Planets" });

        expect(listPlanets.props.data).toEqual(useFindByPlanetsWithPageNumberProps.planets);
    });

    it("Test with action load more itens and loading", async () => {
        const useFindByPlanetsWithPageNumberProps: UseFindByPlanetsWithPageNumber.UseFindByPlantsWithPageNumberProps = {
            findByPlanetsWithPageNumber: jest.fn(),
            isLoading: true,
            planets: planetTemplateFull.buildList(3),
        };

        const mockedUseFindByPlanetsWithPageNumber = jest.spyOn(
            UseFindByPlanetsWithPageNumber,
            "useFindByPlanetsWithPageNumber"
        );

        when(mockedUseFindByPlanetsWithPageNumber).calledWith().mockReturnValue(useFindByPlanetsWithPageNumberProps);

        const initialPlanets = planetTemplateFull.buildList(1);

        const planets: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <Planets initialPlanets={initialPlanets} />
            </ThemeProvider>
        );

        const listPlanets = planets.root.findByProps({ testID: "Planets" });
        const activityIndicator = planets.root.findByType(ActivityIndicator);

        renderer.act(() => {
            listPlanets.props.onEndReached();
        });

        expect(listPlanets.props.data).toEqual(useFindByPlanetsWithPageNumberProps.planets);
        expect(activityIndicator).toBeTruthy();
        expect(useFindByPlanetsWithPageNumberProps.findByPlanetsWithPageNumber).toBeCalledWith(initialPlanets, 2);
    });
});
