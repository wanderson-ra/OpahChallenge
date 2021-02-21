export class People {
    public readonly name!: string;
    public readonly height!: string;
    public readonly mass!: string;
    public readonly hairColor!: string;
    public readonly skinColor!: string;
    public readonly eyeColor!: string;
    public readonly birthYear!: string;
    public readonly gender!: string;
    public readonly homeWorld!: string;
    public readonly films!: Array<string>;
    public readonly species!: Array<string>;
    public readonly vehicles!: Array<string>;
    public readonly starships!: Array<string>;
    public readonly created!: Date;
    public readonly edited!: Date;
    public readonly url!: string;
    public imageUrl?: string;

    constructor(people: Partial<People> = {}) {
        Object.assign(this, people);
    }
}
