export class Film {
    public readonly title!: string;
    public readonly episodeId!: number;
    public readonly openingCrawl!: string;
    public readonly director!: string;
    public readonly producer!: string;
    public readonly releaseDate!: Date;
    public readonly created!: Date;
    public readonly edited!: Date;
    public readonly url!: string;
    public readonly characters!: Array<string>;
    public readonly planets!: Array<string>;
    public readonly starships!: Array<string>;
    public readonly vehicles!: Array<string>;
    public readonly species!: Array<string>;
    public imageUrl?: string;

    constructor(film: Partial<Film> = {}) {
        Object.assign(this, film);
    }
}
