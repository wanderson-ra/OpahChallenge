import * as factory from "factory.ts";
import faker from "faker";

import { Film } from "../../../src/domains/films";

export const filmTemplateFull = factory.Sync.makeFactory<Film>({
    characters: [faker.random.words(2)],
    created: faker.date.past(),
    director: faker.name.findName(),
    edited: faker.date.past(),
    episodeId: faker.random.number(),
    openingCrawl: faker.lorem.sentences(),
    planets: [faker.random.words(2)],
    producer: faker.name.findName(),
    releaseDate: faker.date.past(),
    species: [faker.random.words(2)],
    starships: [faker.random.words(2)],
    title: faker.name.title(),
    url: faker.internet.url(),
    vehicles: faker.random.arrayElements(),
});

export const filmTemplateFullWithFixedEpisodeId = factory.Sync.makeFactory<Film>({
    characters: [faker.random.words(2)],
    created: faker.date.past(),
    director: faker.name.findName(),
    edited: faker.date.past(),
    episodeId: 1,
    openingCrawl: faker.lorem.sentences(),
    planets: [faker.random.words(2)],
    producer: faker.name.findName(),
    releaseDate: faker.date.past(),
    species: [faker.random.words(2)],
    starships: [faker.random.words(2)],
    title: faker.name.title(),
    url: faker.internet.url(),
    vehicles: faker.random.arrayElements(),
});
