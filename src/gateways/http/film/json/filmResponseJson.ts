export class FilmResponseJson {
    public readonly title!: string;
    public readonly episode_id!: number;
    public readonly opening_crawl!: string;
    public readonly director!: string;
    public readonly producer!: string;
    public readonly release_date!: Date;
    public readonly characters!: string[];
    public readonly planets!: Array<string>;
    public readonly starships!: Array<string>;
    public readonly vehicles!: Array<string>;
    public readonly species!: Array<string>;
    public readonly created!: Date;
    public readonly edited!: Date;
    public readonly url!: string;

    constructor(filmResponseJson: Partial<FilmResponseJson> = {}) {
        Object.assign(this, filmResponseJson);
    }
}
