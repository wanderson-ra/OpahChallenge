import { Film } from "src/domains/films";

import { properties } from "src/configurations/properties";

import { get } from "../baseApi";
import { handlerError } from "./handlerError";
import { FilmResponseJson } from "./json/filmResponseJson";
import { ResultJson } from "./json/resultJson";

const mapperFilmFromFilmResponseJson = (filmResponseJson: FilmResponseJson): Film => {
    return new Film({
        characters: filmResponseJson.characters,
        created: filmResponseJson.created,
        director: filmResponseJson.director,
        edited: filmResponseJson.edited,
        episodeId: filmResponseJson.episode_id,
        openingCrawl: filmResponseJson.opening_crawl,
        planets: filmResponseJson.planets,
        producer: filmResponseJson.producer,
        releaseDate: filmResponseJson.release_date,
        species: filmResponseJson.species,
        starships: filmResponseJson.starships,
        title: filmResponseJson.title,
        url: filmResponseJson.url,
        vehicles: filmResponseJson.vehicles,
    });
};

export const findAll = async (): Promise<Array<Film>> => {
    try {
        const resultJson = await get<ResultJson>(properties.startWars.baseUrl, "/films/");

        const films = resultJson.data.results.map((resultJson) => mapperFilmFromFilmResponseJson(resultJson));

        return films;
    } catch (error) {
        throw handlerError(error);
    }
};
