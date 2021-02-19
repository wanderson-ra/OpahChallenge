import nock, { cleanAll } from "nock";

import { DefaultRestGatewayException } from "../../../../../src/gateways/exceptions/defaultGatewayException";
import { FilmNotFoundGatewayException } from "../../../../../src/gateways/exceptions/filmNotFoundGatewayException";
import { findAll } from "../../../../../src/gateways/http/film/filmGateway";

import { Film } from "../../../../../src/domains/films";

import { properties } from "../../../../../src/configurations/properties";

import { resultJsonTemplate } from "../../../../dataBuilders/cases/http/film/resultJson.template";

describe("Tests of filmGateway/findAll", () => {
    beforeEach(() => {
        jest.clearAllMocks();
        cleanAll();
    });

    it("Test with success", async () => {
        const resultsJson = resultJsonTemplate.build();

        nock(properties.startWars.baseUrl).get("/films/").reply(200, resultsJson);

        const films: Array<Film> = await findAll();

        expect(films[0].characters).toEqual(resultsJson.results[0].characters);
        expect(new Date(films[0].created)).toEqual(resultsJson.results[0].created);
        expect(films[0].director).toEqual(resultsJson.results[0].director);
        expect(new Date(films[0].edited)).toEqual(resultsJson.results[0].edited);
        expect(films[0].episodeId).toEqual(resultsJson.results[0].episode_id);
        expect(films[0].openingCrawl).toEqual(resultsJson.results[0].opening_crawl);
        expect(films[0].planets).toEqual(resultsJson.results[0].planets);
        expect(films[0].producer).toEqual(resultsJson.results[0].producer);
        expect(new Date(films[0].releaseDate)).toEqual(resultsJson.results[0].release_date);
        expect(films[0].species).toEqual(resultsJson.results[0].species);
        expect(films[0].starships).toEqual(resultsJson.results[0].starships);
        expect(films[0].title).toEqual(resultsJson.results[0].title);
        expect(films[0].url).toEqual(resultsJson.results[0].url);
        expect(films[0].vehicles).toEqual(resultsJson.results[0].vehicles);
    });

    it("Test with error not found", async () => {
        try {
            nock(properties.startWars.baseUrl).get("/films/").reply(404);
            await findAll();
        } catch (error) {
            expect(error).toBeInstanceOf(FilmNotFoundGatewayException);
        }
    });

    it("Test with error default", async () => {
        nock(properties.startWars.baseUrl).get("/films/").reply(500);
        try {
            await findAll();
        } catch (error) {
            expect(error).toBeInstanceOf(DefaultRestGatewayException);
        }
    });
});
