import nock, { cleanAll } from "nock";

import { DefaultRestGatewayException } from "../../../../../src/gateways/exceptions/defaultGatewayException";
import { PlanetNotFoundGatewayException } from "../../../../../src/gateways/exceptions/planetNotFoundGatewayException";
import { findByPageNumber } from "../../../../../src/gateways/http/planet/planetGateway";

import { Planet } from "../../../../../src/domains/planet";

import { properties } from "../../../../../src/configurations/properties";

import { resultJsonTemplate } from "../../../../dataBuilders/cases/http/planet/resultJsom.template";

describe("Tests of planetGateway/findByPageNumber", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        cleanAll();
    });

    it("Test with not page number ", async () => {
        const resultsJson = resultJsonTemplate.build();

        nock(properties.startWars.baseUrl).get("/planets/").reply(200, resultsJson);

        const planets: Array<Planet> = await findByPageNumber();

        expect(planets[0].climate).toEqual(resultsJson.results[0].climate);
        expect(planets[0].diameter).toEqual(resultsJson.results[0].diameter);
        expect(planets[0].films).toEqual(resultsJson.results[0].films);
        expect(planets[0].gravity).toEqual(resultsJson.results[0].gravity);
        expect(planets[0].name).toEqual(resultsJson.results[0].name);
        expect(planets[0].orbitalPeriod).toEqual(resultsJson.results[0].orbital_period);
        expect(planets[0].population).toEqual(resultsJson.results[0].population);
        expect(planets[0].residents).toEqual(resultsJson.results[0].residents);
        expect(planets[0].rotationPeriod).toEqual(resultsJson.results[0].rotation_period);
        expect(planets[0].surfaceWater).toEqual(resultsJson.results[0].surface_water);
        expect(planets[0].terrain).toEqual(resultsJson.results[0].terrain);
        expect(planets[0].url).toEqual(resultsJson.results[0].url);
        expect(new Date(planets[0].created)).toEqual(resultsJson.results[0].created);
        expect(new Date(planets[0].edited)).toEqual(resultsJson.results[0].edited);
    });

    it("Test with page number ", async () => {
        const pageNumber = 2;

        const resultsJson = resultJsonTemplate.build();

        nock(properties.startWars.baseUrl).get(`/planets/?page=${pageNumber}`).reply(200, resultsJson);

        const planets: Array<Planet> = await findByPageNumber(pageNumber);

        expect(planets[0].climate).toEqual(resultsJson.results[0].climate);
        expect(planets[0].diameter).toEqual(resultsJson.results[0].diameter);
        expect(planets[0].films).toEqual(resultsJson.results[0].films);
        expect(planets[0].gravity).toEqual(resultsJson.results[0].gravity);
        expect(planets[0].name).toEqual(resultsJson.results[0].name);
        expect(planets[0].orbitalPeriod).toEqual(resultsJson.results[0].orbital_period);
        expect(planets[0].population).toEqual(resultsJson.results[0].population);
        expect(planets[0].residents).toEqual(resultsJson.results[0].residents);
        expect(planets[0].rotationPeriod).toEqual(resultsJson.results[0].rotation_period);
        expect(planets[0].surfaceWater).toEqual(resultsJson.results[0].surface_water);
        expect(planets[0].terrain).toEqual(resultsJson.results[0].terrain);
        expect(planets[0].url).toEqual(resultsJson.results[0].url);
        expect(new Date(planets[0].created)).toEqual(resultsJson.results[0].created);
        expect(new Date(planets[0].edited)).toEqual(resultsJson.results[0].edited);
    });

    it("Test with error not found", async () => {
        try {
            nock(properties.startWars.baseUrl).get("/planets/").reply(404);
            await findByPageNumber();
        } catch (error) {
            expect(error).toBeInstanceOf(PlanetNotFoundGatewayException);
        }
    });

    it("Test with error default", async () => {
        nock(properties.startWars.baseUrl).get("/planets/").reply(500);
        try {
            await findByPageNumber();
        } catch (error) {
            expect(error).toBeInstanceOf(DefaultRestGatewayException);
        }
    });
});
