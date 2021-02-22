import { when, resetAllWhenMocks } from "jest-when";

import * as PlanetGateway from "../../../src/gateways/http/planet/planetGateway";

import * as FindPlanetsByPageNumberUseCase from "../../../src/useCases/findPlanetsByPageNumberUseCase";

import { planetTemplateFull } from "../../dataBuilders/domains/planet.template";

describe("Tests of FindPlanetsByPageNumberUseCase", () => {
    beforeAll(() => {
        resetAllWhenMocks();
    });

    it("Test success with page number", async () => {
        const pageNumber = 2;

        const planets = planetTemplateFull.buildList(1);

        const mockedPlanetGateway = jest.spyOn(PlanetGateway, "findByPageNumber");
        when(mockedPlanetGateway).calledWith(pageNumber).mockResolvedValue(planets);

        const planetsResponse = await FindPlanetsByPageNumberUseCase.find(pageNumber);

        expect(planetsResponse).toEqual(planets);
        expect(mockedPlanetGateway).toBeCalled();
    });
});
