import * as factory from "factory.ts";
import faker from "faker";

import { FilmResponseJson } from "../../../../../src/gateways/http/film/json/filmResponseJson";

export const filmResponseJsonTemplateFull = factory.Sync.makeFactory<FilmResponseJson>({
    characters: [faker.random.words(2)],
    created: faker.date.past(),
    director: faker.name.findName(),
    edited: faker.date.past(),
    episode_id: faker.random.number(),
    opening_crawl: faker.lorem.sentences(),
    planets: [faker.random.words(2)],
    producer: faker.name.findName(),
    release_date: faker.date.past(),
    species: [faker.random.words(2)],
    starships: [faker.random.words(2)],
    title: faker.name.title(),
    url: faker.internet.url(),
    vehicles: faker.random.arrayElements(),
});
