export class PlanetResponseJson {
    public readonly name!: string;
    public readonly rotation_period!: string;
    public readonly orbital_period!: string;
    public readonly diameter!: string;
    public readonly climate!: string;
    public readonly gravity!: string;
    public readonly terrain!: string;
    public readonly surface_water!: string;
    public readonly population!: string;
    public readonly residents!: Array<string>;
    public readonly films!: Array<string>;
    public readonly created!: Date;
    public readonly edited!: Date;
    public readonly url!: string;

    constructor(planetResponseJson: Partial<PlanetResponseJson> = {}) {
        Object.assign(this, planetResponseJson);
    }
}
