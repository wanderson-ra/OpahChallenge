import { PeopleResponseJson } from "./peopleResponseJson";

export class ResultJson {
    public readonly results!: Array<PeopleResponseJson>;

    constructor(resultJson: Partial<ResultJson> = {}) {
        Object.assign(this, resultJson);
    }
}
