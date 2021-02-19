import { FilmResponseJson } from "./filmResponseJson";

export class ResultJson {
    public readonly results!: Array<FilmResponseJson>;

    constructor(resultJson: Partial<ResultJson> = {}) {
        Object.assign(this, resultJson);
    }
}
