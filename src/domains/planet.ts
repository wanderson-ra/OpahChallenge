export class Planet {
    public readonly name!: string;
    public readonly rotationPeriod!: string;
    public readonly orbitalPeriod!: string;
    public readonly diameter!: string;
    public readonly climate!: string;
    public readonly gravity!: string;
    public readonly terrain!: string;
    public readonly surfaceWater!: string;
    public readonly population!: string;
    public readonly residents!: Array<string>;
    public readonly films!: Array<string>;
    public readonly created!: Date;
    public readonly edited!: Date;
    public readonly url!: string;

    constructor(planet: Partial<Planet> = {}) {
        Object.assign(this, planet);
    }
}
