import * as factory from "factory.ts";
import faker from "faker";

import { PeopleResponseJson } from "../../../../../src/gateways/http/people/json/peopleResponseJson";

export const peopleResponseJsonTemplateFull = factory.Sync.makeFactory<PeopleResponseJson>({
    created: faker.date.past(),
    birth_year: String(faker.date.past()),
    edited: faker.date.past(),
    eye_color: faker.random.word(),
    species: [faker.random.words(2)],
    starships: [faker.random.words(2)],
    films: faker.random.arrayElements(),
    url: faker.internet.url(),
    vehicles: faker.random.arrayElements(),
    gender: faker.name.gender(),
    hair_color: faker.name.title(),
    height: String(faker.random.number()),
    homeworld: faker.random.word(),
    mass: String(faker.random.number()),
    name: faker.name.firstName(),
    skin_color: faker.name.title(),
});
