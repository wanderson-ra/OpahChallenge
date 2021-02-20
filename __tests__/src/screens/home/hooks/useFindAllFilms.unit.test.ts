import { renderHook, act } from "@testing-library/react-hooks";
import { when, resetAllWhenMocks } from "jest-when";
import * as SWR from "swr";

import { FilmNotFoundGatewayException } from "../../../../../src/gateways/exceptions/filmNotFoundGatewayException";

import * as FindAllFilmsAndAddImageUrlUseCase from "../../../../../src/useCases/findAllFilmsAndAddImageUrlUseCase";

import { properties } from "../../../../../src/configurations/properties";

import { strings } from "../../../../../src/utils/strings";

import { useFindAllFilms } from "../../../../../src/screens/home/hooks/useFindAllFilms";

import { BaseException } from "../../../../../src/globals/exceptions/baseException";

import { filmTemplateFull } from "../../../../dataBuilders/domains/filmTemplate";

describe("Tests of useFindAllFilms", () => {
    beforeEach(() => {
        resetAllWhenMocks();
        jest.useFakeTimers();
        SWR.cache.clear();
    });

    const films = filmTemplateFull.buildList(1);

    it("Test with success/mock usecase", async () => {
        const mockedFindAllFilmsAndAddImageUrlUseCase = jest.spyOn(FindAllFilmsAndAddImageUrlUseCase, "findAll");
        when(mockedFindAllFilmsAndAddImageUrlUseCase).calledWith().mockResolvedValue(films);

        const { result, waitForNextUpdate } = renderHook(() => useFindAllFilms());

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(true);
        expect(result.current.errorMessage).toEqual(undefined);

        await waitForNextUpdate();

        expect(result.current.data).toEqual(films);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(undefined);
    });

    it("Test with success/mock swr", async () => {
        const mockedSWR = jest.spyOn(SWR, "default");
        when(mockedSWR)
            .calledWith(`${properties.startWars.baseUrl}/films/`, expect.anything())
            .mockReturnValue({ data: films, isValidating: false, mutate: undefined, revalidate: undefined });

        const { result } = renderHook(() => useFindAllFilms());

        expect(result.current.data).toEqual(films);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(undefined);
    });

    it("Test with default error and turn default", async () => {
        const mockedSWR = jest.spyOn(SWR, "default");
        when(mockedSWR).calledWith(`${properties.startWars.baseUrl}/films/`, expect.anything()).mockReturnValue({
            data: undefined,
            isValidating: false,
            mutate: undefined,
            revalidate: undefined,
            error: new Error(),
        });

        const { result } = renderHook(() => useFindAllFilms());

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
            .calledWith(`${properties.startWars.baseUrl}/films/`, expect.anything())
            .mockReturnValue({
                data: undefined,
                isValidating: false,
                mutate: undefined,
                revalidate: undefined,
                error: new BaseException(errorMessageExpected),
            });

        const { result } = renderHook(() => useFindAllFilms());

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(errorMessageExpected);
    });
});
