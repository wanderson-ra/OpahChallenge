import { renderHook, act } from "@testing-library/react-hooks";
import { when, resetAllWhenMocks } from "jest-when";
import * as SWR from "swr";

import * as FindPlanetsByPageNumberUseCase from "../../../../../src/useCases/findPlanetsByPageNumberUseCase";

import { properties } from "../../../../../src/configurations/properties";

import { strings } from "../../../../../src/utils/strings";

import { useFindPlanets } from "../../../../../src/screens/planets/hooks/useFindPlanets";

import { BaseException } from "../../../../../src/globals/exceptions/baseException";

import { planetTemplateFull } from "../../../../dataBuilders/domains/planet.template";

describe("Tests of useFindPlanets", () => {
    beforeEach(() => {
        resetAllWhenMocks();
        jest.useFakeTimers();
        SWR.cache.clear();
    });

    const planets = planetTemplateFull.buildList(1);

    it("Test with success/mock usecase", async () => {
        const mockedFindPlanetsByPageNumberUseCase = jest.spyOn(FindPlanetsByPageNumberUseCase, "find");
        when(mockedFindPlanetsByPageNumberUseCase).calledWith(undefined).mockResolvedValue(planets);

        const { result, waitForNextUpdate } = renderHook(() => useFindPlanets());

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(true);
        expect(result.current.errorMessage).toEqual(undefined);

        await waitForNextUpdate();

        expect(result.current.data).toEqual(planets);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(undefined);
    });

    it("Test with success/mock swr", async () => {
        const mockedSWR = jest.spyOn(SWR, "default");
        when(mockedSWR)
            .calledWith(`${properties.startWars.baseUrl}/planets/`, expect.anything())
            .mockReturnValue({ data: planets, isValidating: false, mutate: undefined, revalidate: undefined });

        const { result } = renderHook(() => useFindPlanets());

        expect(result.current.data).toEqual(planets);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(undefined);
    });

    it("Test with default error and turn default", async () => {
        const mockedSWR = jest.spyOn(SWR, "default");
        when(mockedSWR).calledWith(`${properties.startWars.baseUrl}/planets/`, expect.anything()).mockReturnValue({
            data: undefined,
            isValidating: false,
            mutate: undefined,
            revalidate: undefined,
            error: new Error(),
        });

        const { result } = renderHook(() => useFindPlanets());

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(strings.error.default);

        act(() => {
            result.current.setToDefaultValueErrorMessageAndLoading();
        });

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(true);
        expect(result.current.errorMessage).toEqual(undefined);
    });

    it("Test with error with message", async () => {
        const errorMessageExpected = "any";

        const mockedSWR = jest.spyOn(SWR, "default");
        when(mockedSWR)
            .calledWith(`${properties.startWars.baseUrl}/planets/`, expect.anything())
            .mockReturnValue({
                data: undefined,
                isValidating: false,
                mutate: undefined,
                revalidate: undefined,
                error: new BaseException(errorMessageExpected),
            });

        const { result } = renderHook(() => useFindPlanets());

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(errorMessageExpected);
    });
});
