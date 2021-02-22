import { PlanetResponseJson } from "./planetResponseJson";

export class ResultJson {
    public readonly results!: Array<PlanetResponseJson>;

    constructor(resultJson: Partial<ResultJson> = {}) {
        Object.assign(this, resultJson);
    }
}
