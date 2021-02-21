import * as factory from "factory.ts";
import faker from "faker";

import { People } from "../../../src/domains/people";

export const peopleTemplateFull = factory.Sync.makeFactory<People>({
    created: faker.date.past(),
    birthYear: String(faker.date.past()),
    edited: faker.date.past(),
    eyeColor: faker.random.word(),
    species: [faker.random.words(2)],
    starships: [faker.random.words(2)],
    films: faker.random.arrayElements(),
    url: faker.internet.url(),
    vehicles: faker.random.arrayElements(),
    gender: faker.name.gender(),
    hairColor: faker.name.title(),
    height: String(faker.random.number()),
    homeWorld: faker.random.word(),
    mass: String(faker.random.number()),
    name: faker.name.firstName(),
    skinColor: faker.name.title(),
    imageUrl: faker.internet.avatar(),
});

export const peopleTemplateFixedName = factory.Sync.makeFactory<People>({
    created: faker.date.past(),
    birthYear: String(faker.date.past()),
    edited: faker.date.past(),
    eyeColor: faker.random.word(),
    species: [faker.random.words(2)],
    starships: [faker.random.words(2)],
    films: faker.random.arrayElements(),
    url: faker.internet.url(),
    vehicles: faker.random.arrayElements(),
    gender: faker.name.gender(),
    hairColor: faker.name.title(),
    height: String(faker.random.number()),
    homeWorld: faker.random.word(),
    mass: String(faker.random.number()),
    name: "Luke Skywalker",
    skinColor: faker.name.title(),
});
