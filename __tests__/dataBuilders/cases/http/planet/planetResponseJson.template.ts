import * as factory from "factory.ts";
import faker from "faker";

import { PlanetResponseJson } from "../../../../../src/gateways/http/planet/json/planetResponseJson";

export const planetResponseJsonTemplateFull = factory.Sync.makeFactory<PlanetResponseJson>({
    created: faker.date.past(),
    edited: faker.date.past(),
    films: faker.random.arrayElements(),
    url: faker.internet.url(),
    name: faker.name.firstName(),
    climate: faker.name.title(),
    diameter: String(faker.random.number()),
    gravity: String(faker.random.number()),
    orbital_period: String(faker.random.number()),
    population: String(faker.random.number()),
    residents: faker.random.arrayElements(),
    rotation_period: String(faker.random.number()),
    surface_water: faker.name.title(),
    terrain: faker.address.direction(),
});
