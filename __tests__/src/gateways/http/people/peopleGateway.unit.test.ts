import nock, { cleanAll } from "nock";

import { DefaultRestGatewayException } from "../../../../../src/gateways/exceptions/defaultGatewayException";
import { PeopleNotFoundGatewayException } from "../../../../../src/gateways/exceptions/peopleNotFoundGatewayException";
import { findAll } from "../../../../../src/gateways/http/people/peopleGateway";

import { People } from "../../../../../src/domains/people";

import { properties } from "../../../../../src/configurations/properties";

import { resultJsonTemplate } from "../../../../dataBuilders/cases/http/people/resultJson.template";

describe("Tests of peopleGateway/findAll", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        cleanAll();
    });

    it("Test with success", async () => {
        const resultsJson = resultJsonTemplate.build();

        nock(properties.startWars.baseUrl).get("/people/").reply(200, resultsJson);

        const peoples: Array<People> = await findAll();

        expect(peoples[0].birthYear).toEqual(resultsJson.results[0].birth_year);
        expect(new Date(peoples[0].created)).toEqual(resultsJson.results[0].created);
        expect(new Date(peoples[0].edited)).toEqual(resultsJson.results[0].edited);
        expect(peoples[0].eyeColor).toEqual(resultsJson.results[0].eye_color);
        expect(peoples[0].films).toEqual(resultsJson.results[0].films);
        expect(peoples[0].gender).toEqual(resultsJson.results[0].gender);
        expect(peoples[0].hairColor).toEqual(resultsJson.results[0].hair_color);
        expect(peoples[0].height).toEqual(resultsJson.results[0].height);
        expect(peoples[0].homeWorld).toEqual(resultsJson.results[0].homeworld);
        expect(peoples[0].mass).toEqual(resultsJson.results[0].mass);
        expect(peoples[0].name).toEqual(resultsJson.results[0].name);
        expect(peoples[0].skinColor).toEqual(resultsJson.results[0].skin_color);
        expect(peoples[0].species).toEqual(resultsJson.results[0].species);
        expect(peoples[0].starships).toEqual(resultsJson.results[0].starships);
        expect(peoples[0].url).toEqual(resultsJson.results[0].url);
        expect(peoples[0].vehicles).toEqual(resultsJson.results[0].vehicles);
    });

    it("Test with error not found", async () => {
        try {
            nock(properties.startWars.baseUrl).get("/people/").reply(404);
            await findAll();
        } catch (error) {
            expect(error).toBeInstanceOf(PeopleNotFoundGatewayException);
        }
    });

    it("Test with error default", async () => {
        nock(properties.startWars.baseUrl).get("/people/").reply(500);
        try {
            await findAll();
        } catch (error) {
            expect(error).toBeInstanceOf(DefaultRestGatewayException);
        }
    });
});
