import { Planet } from "src/domains/planet";

import { properties } from "src/configurations/properties";

import { get } from "../baseApi";
import { handlerError } from "./handlerError";
import { PlanetResponseJson } from "./json/planetResponseJson";
import { ResultJson } from "./json/resultJson";

const mapperPlanetFromPlanetResponseJson = (planetResponseJson: PlanetResponseJson): Planet => {
    return new Planet({
        climate: planetResponseJson.climate,
        created: planetResponseJson.created,
        diameter: planetResponseJson.diameter,
        edited: planetResponseJson.edited,
        films: planetResponseJson.films,
        gravity: planetResponseJson.gravity,
        name: planetResponseJson.name,
        orbitalPeriod: planetResponseJson.orbital_period,
        population: planetResponseJson.population,
        residents: planetResponseJson.residents,
        rotationPeriod: planetResponseJson.rotation_period,
        surfaceWater: planetResponseJson.surface_water,
        terrain: planetResponseJson.terrain,
        url: planetResponseJson.url,
    });
};

export const findByPageNumber = async (pageNumber?: number): Promise<Array<Planet>> => {
    try {
        const resultJson = await get<ResultJson>(
            properties.startWars.baseUrl,
            `/planets/${pageNumber ? `?page=${pageNumber}` : ""}`
        );

        const planets = resultJson.data.results.map((resultJson) => mapperPlanetFromPlanetResponseJson(resultJson));

        return planets;
    } catch (error) {
        throw handlerError(error);
    }
};
