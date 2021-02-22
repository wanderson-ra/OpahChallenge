import * as factory from "factory.ts";
import faker from "faker";

import { Planet } from "../../../src/domains/planet";

export const planetTemplateFull = factory.Sync.makeFactory<Planet>({
    created: faker.date.past(),
    edited: faker.date.past(),
    films: faker.random.arrayElements(),
    url: faker.internet.url(),
    name: faker.name.firstName(),
    climate: faker.name.title(),
    diameter: String(faker.random.number()),
    gravity: String(faker.random.number()),
    orbitalPeriod: String(faker.random.number()),
    population: String(faker.random.number()),
    residents: faker.random.arrayElements(),
    rotationPeriod: String(faker.random.number()),
    surfaceWater: faker.name.title(),
    terrain: faker.address.direction(),
});
