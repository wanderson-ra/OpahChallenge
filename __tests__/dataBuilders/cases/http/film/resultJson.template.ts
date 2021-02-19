import * as factory from "factory.ts";

import { ResultJson } from "../../../../../src/gateways/http/film/json/resultJson";

import { filmResponseJsonTemplateFull } from "./filmResponseJson.template";

export const resultJsonTemplate = factory.Sync.makeFactory<ResultJson>({
    results: filmResponseJsonTemplateFull.buildList(2),
});
