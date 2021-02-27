import React from "react";
import * as Redux from "react-redux";
import renderer from "react-test-renderer";

import { when } from "jest-when";
import { Store } from "redux";
import configureStore from "redux-mock-store";
import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { strings } from "../../../../../../src/utils/strings";

import { ThemeReducer, ThemeState } from "../../../../../../src/store/reducers/theme/themeReducer";

import { Initials } from "../../../../../../src/components/initials/Initials";

import { PlanetItem } from "../../../../../../src/screens/planets/components/planetItem/PlanetItem";

import { planetTemplateFull } from "../../../../../dataBuilders/domains/planet.template";

const mockStore = configureStore([]);

describe("Test of PlanetItem", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    let store: Store;

    it("Test asserts fields", async () => {
        const mode = "dark";

        const mockThemeReducer: ThemeReducer = {
            mode: mode,
            theme: colorTheme.light,
        };

        const initialPropsWith: ThemeState = {
            themeReducer: mockThemeReducer,
        };

        store = mockStore({
            userReducer: initialPropsWith,
        });

        store.dispatch = jest.fn();

        const mockedUseSelector = jest.spyOn(Redux, "useSelector");
        when(mockedUseSelector).calledWith(expect.any).mockReturnValue(mockThemeReducer);

        const planet = planetTemplateFull.build();
        const index = 0;

        const planetItem: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <PlanetItem planet={planet} index={index} />
            </ThemeProvider>
        );

        const initials = planetItem.root.findByType(Initials);
        const name = planetItem.root.findByProps({ testID: "Name" });
        const climate = planetItem.root.findByProps({ testID: "Climate" });

        expect(initials.props.name).toEqual(planet.name);
        expect(name.props.children).toEqual(planet.name);
        expect(climate.props.children).toEqual(`${strings.text.climate}: ${planet.climate}`);
    });
});
