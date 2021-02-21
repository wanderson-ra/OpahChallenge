export class PeopleResponseJson {
    public readonly name!: string;
    public readonly height!: string;
    public readonly mass!: string;
    public readonly hair_color!: string;
    public readonly skin_color!: string;
    public readonly eye_color!: string;
    public readonly birth_year!: string;
    public readonly gender!: string;
    public readonly homeworld!: string;
    public readonly films!: string[];
    public readonly species!: string[];
    public readonly vehicles!: string[];
    public readonly starships!: string[];
    public readonly created!: Date;
    public readonly edited!: Date;
    public readonly url!: string;

    constructor(peopleJson: Partial<PeopleResponseJson> = {}) {
        Object.assign(this, peopleJson);
    }
}
