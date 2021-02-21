import { People } from "src/domains/people";

import { properties } from "src/configurations/properties";

import { get } from "../baseApi";
import { handlerError } from "./handlerError";
import { PeopleResponseJson } from "./json/peopleResponseJson";
import { ResultJson } from "./json/resultJson";

const mapperPeopleFromPeopleJson = (peopleJson: PeopleResponseJson): People => {
    return new People({
        birthYear: peopleJson.birth_year,
        created: peopleJson.created,
        edited: peopleJson.edited,
        eyeColor: peopleJson.eye_color,
        films: peopleJson.films,
        gender: peopleJson.gender,
        hairColor: peopleJson.hair_color,
        height: peopleJson.height,
        homeWorld: peopleJson.homeworld,
        mass: peopleJson.mass,
        name: peopleJson.name,
        skinColor: peopleJson.skin_color,
        species: peopleJson.species,
        starships: peopleJson.starships,
        url: peopleJson.url,
        vehicles: peopleJson.vehicles,
    });
};

export const findAll = async (): Promise<Array<People>> => {
    try {
        const resultJson = await get<ResultJson>(properties.startWars.baseUrl, "/people/");

        const peoples = resultJson.data.results.map((resultJson) => mapperPeopleFromPeopleJson(resultJson));

        return peoples;
    } catch (error) {
        throw handlerError(error);
    }
};
