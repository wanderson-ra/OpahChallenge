import * as factory from "factory.ts";

import { ResultJson } from "../../../../../src/gateways/http/planet/json/resultJson";

import { planetResponseJsonTemplateFull } from "./planetResponseJson.template";

export const resultJsonTemplate = factory.Sync.makeFactory<ResultJson>({
    results: planetResponseJsonTemplateFull.buildList(2),
});
