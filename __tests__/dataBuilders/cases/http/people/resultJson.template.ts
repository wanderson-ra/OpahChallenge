import * as factory from "factory.ts";

import { ResultJson } from "../../../../../src/gateways/http/people/json/resultJson";

import { peopleResponseJsonTemplateFull } from "./peopleResponseJson.template";

export const resultJsonTemplate = factory.Sync.makeFactory<ResultJson>({
    results: peopleResponseJsonTemplateFull.buildList(2),
});
