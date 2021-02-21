import React from "react";
import renderer from "react-test-renderer";

import { when } from "jest-when";
import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../src/configurations/themes/theme";

import { ErrorMessage } from "../../../../../../src/components/errorMessage/ErrorMessage";

import { Loading } from "../../../../../../src/screens/home/components/mainPeoples/loading/Loading";
import { MainPeoples } from "../../../../../../src/screens/home/components/mainPeoples/MainPeoples";
import * as UseFindMainPeoples from "../../../../../../src/screens/home/hooks/useFindMainPeoples";

import { peopleTemplateFull } from "../../../../../dataBuilders/domains/peopleTemplate";

jest.mock("react-native/Libraries/Animated/src/NativeAnimatedHelper");

jest.mock("@react-navigation/native", () => {
    return {
        useNavigation: jest.fn().mockImplementation(() => {
            return {
                navigate: jest.fn(),
            };
        }),
    };
});

describe("Test of MainPeoples", () => {
    beforeEach(() => {
        jest.useFakeTimers();
        jest.runAllTimers();
    });

    it("Test with render loading", async () => {
        const useFindMainPeoplesProps: UseFindMainPeoples.UseFindMainPeoplesProps = {
            data: undefined,
            errorMessage: undefined,
            isLoading: true,
            setToDefaultValueErrorMessageAndLoading: jest.fn(),
        };

        const mockedUseFindMainPeoples = jest.spyOn(UseFindMainPeoples, "useFindMainPeoples");
        when(mockedUseFindMainPeoples).calledWith().mockReturnValue(useFindMainPeoplesProps);

        const mainPeoples: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <MainPeoples />
            </ThemeProvider>
        );

        const loading = mainPeoples.root.findByType(Loading);

        expect(loading).toBeTruthy();
    });

    it("Test with render error", async () => {
        const useFindMainPeoplesProps: UseFindMainPeoples.UseFindMainPeoplesProps = {
            data: undefined,
            errorMessage: "Any error message",
            isLoading: false,
            setToDefaultValueErrorMessageAndLoading: jest.fn(),
        };

        const mockedUseFindMainPeoples = jest.spyOn(UseFindMainPeoples, "useFindMainPeoples");
        when(mockedUseFindMainPeoples).calledWith().mockReturnValue(useFindMainPeoplesProps);

        const mainPeoples: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <MainPeoples />
            </ThemeProvider>
        );

        const errorMessage = mainPeoples.root.findByType(ErrorMessage);

        await renderer.act(async () => {
            await errorMessage.props.onPress();
        });

        expect(useFindMainPeoplesProps.setToDefaultValueErrorMessageAndLoading).toBeCalled();
        expect(errorMessage).toBeTruthy();
    });

    it("Test with render peoples itens", async () => {
        const useFindMainPeoplesProps: UseFindMainPeoples.UseFindMainPeoplesProps = {
            data: peopleTemplateFull.buildList(2),
            errorMessage: undefined,
            isLoading: false,
            setToDefaultValueErrorMessageAndLoading: jest.fn(),
        };

        const mockedUseFindMainPeoples = jest.spyOn(UseFindMainPeoples, "useFindMainPeoples");
        when(mockedUseFindMainPeoples).calledWith().mockReturnValue(useFindMainPeoplesProps);

        const mainPeoples: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <MainPeoples />
            </ThemeProvider>
        );

        const listMainsPeople = mainPeoples.root.findByProps({ testID: "ListMainPeoples" });

        expect(listMainsPeople.props.data).toEqual(useFindMainPeoplesProps.data);
    });
});
