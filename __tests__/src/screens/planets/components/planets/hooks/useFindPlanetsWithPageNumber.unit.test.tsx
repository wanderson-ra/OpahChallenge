import { renderHook, act } from "@testing-library/react-hooks";
import { when, resetAllWhenMocks } from "jest-when";

import { PlanetNotFoundGatewayException } from "../../../../../../../src/gateways/exceptions/planetNotFoundGatewayException";

import * as FindPlanetsByPageNumberUseCase from "../../../../../../../src/useCases/findPlanetsByPageNumberUseCase";

import { useFindByPlanetsWithPageNumber } from "../../../../../../../src/screens/planets/components/planets/hooks/useFindPlanetsWithPageNumber";

import { planetTemplateFull } from "../../../../../../dataBuilders/domains/planet.template";

describe("Tests of useFindByPlanetsWithPageNumber", () => {
    beforeEach(() => {
        resetAllWhenMocks();
        jest.useFakeTimers();
    });

    const planets = planetTemplateFull.buildList(1);

    it("Test with success/mock usecase", async () => {
        const pageNumber = 2;
        const planetsAlreadyFinded = planetTemplateFull.buildList(3);

        const mockedFindPlanetsByPageNumberUseCase = jest.spyOn(FindPlanetsByPageNumberUseCase, "find");
        when(mockedFindPlanetsByPageNumberUseCase).calledWith(pageNumber).mockResolvedValue(planets);

        const { result } = renderHook(() => useFindByPlanetsWithPageNumber());

        await act(async () => {
            result.current.findByPlanetsWithPageNumber(planetsAlreadyFinded, pageNumber);
        });

        expect(result.current.isLoading).toEqual(false);
        expect(result.current.planets).toEqual([...planetsAlreadyFinded, ...planets]);

        expect(mockedFindPlanetsByPageNumberUseCase).toBeCalledWith(pageNumber);
    });

    it("Test with error not found", async () => {
        const pageNumber = 2;
        const planetsAlreadyFinded = planetTemplateFull.buildList(3);

        const mockedFindPlanetsByPageNumberUseCase = jest.spyOn(FindPlanetsByPageNumberUseCase, "find");
        when(mockedFindPlanetsByPageNumberUseCase)
            .calledWith(pageNumber)
            .mockRejectedValue(new PlanetNotFoundGatewayException());

        const { result } = renderHook(() => useFindByPlanetsWithPageNumber());

        await act(async () => {
            result.current.findByPlanetsWithPageNumber(planetsAlreadyFinded, pageNumber);
        });

        expect(result.current.isLoading).toEqual(false);
        expect(result.current.planets).toEqual(undefined);

        expect(mockedFindPlanetsByPageNumberUseCase).toBeCalledWith(pageNumber);
    });
});
