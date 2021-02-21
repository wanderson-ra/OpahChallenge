import { renderHook, act } from "@testing-library/react-hooks";
import { when, resetAllWhenMocks } from "jest-when";
import * as SWR from "swr";

import * as FindMainPeopleAnAddImageUrlUseCase from "../../../../../src/useCases/findMainPeopleAnAddImageUrlUseCase";

import { properties } from "../../../../../src/configurations/properties";

import { strings } from "../../../../../src/utils/strings";

import { useFindMainPeoples } from "../../../../../src/screens/home/hooks/useFindMainPeoples";

import { BaseException } from "../../../../../src/globals/exceptions/baseException";

import { peopleTemplateFull } from "../../../../dataBuilders/domains/peopleTemplate";

describe("Tests of useFindMainPeoples", () => {
    beforeEach(() => {
        resetAllWhenMocks();
        jest.useFakeTimers();
        SWR.cache.clear();
    });

    const peoples = peopleTemplateFull.buildList(1);

    it("Test with success/mock usecase", async () => {
        const mockedFindMainPeopleAnAddImageUrlUseCase = jest.spyOn(FindMainPeopleAnAddImageUrlUseCase, "find");
        when(mockedFindMainPeopleAnAddImageUrlUseCase).calledWith().mockResolvedValue(peoples);

        const { result, waitForNextUpdate } = renderHook(() => useFindMainPeoples());

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(true);
        expect(result.current.errorMessage).toEqual(undefined);

        await waitForNextUpdate();

        expect(result.current.data).toEqual(peoples);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(undefined);
    });

    it("Test with success/mock swr", async () => {
        const mockedSWR = jest.spyOn(SWR, "default");
        when(mockedSWR)
            .calledWith(`${properties.startWars.baseUrl}/peoples/`, expect.anything())
            .mockReturnValue({ data: peoples, isValidating: false, mutate: undefined, revalidate: undefined });

        const { result } = renderHook(() => useFindMainPeoples());

        expect(result.current.data).toEqual(peoples);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(undefined);
    });

    it("Test with default error and turn default", async () => {
        const mockedSWR = jest.spyOn(SWR, "default");
        when(mockedSWR).calledWith(`${properties.startWars.baseUrl}/peoples/`, expect.anything()).mockReturnValue({
            data: undefined,
            isValidating: false,
            mutate: undefined,
            revalidate: undefined,
            error: new Error(),
        });

        const { result } = renderHook(() => useFindMainPeoples());

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
            .calledWith(`${properties.startWars.baseUrl}/peoples/`, expect.anything())
            .mockReturnValue({
                data: undefined,
                isValidating: false,
                mutate: undefined,
                revalidate: undefined,
                error: new BaseException(errorMessageExpected),
            });

        const { result } = renderHook(() => useFindMainPeoples());

        expect(result.current.data).toEqual(undefined);
        expect(result.current.isLoading).toEqual(false);
        expect(result.current.errorMessage).toEqual(errorMessageExpected);
    });
});
