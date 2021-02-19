import * as FilmGateway from "src/gateways/http/film/filmGateway";

import { Film } from "src/domains/films";

import { imageUrlsByFilm } from "src/globals/constants/films";

const findUrlImageByFilm = (filmsWithoutImageUrl: Array<Film>): Array<Film> => {
    return filmsWithoutImageUrl.map((film) => {
        const imageUrlByFilmFinded = imageUrlsByFilm.find(
            (imageUrlByFilm) => imageUrlByFilm.episodeId === film.episodeId
        );

        return new Film({ ...film, imageUrl: imageUrlByFilmFinded?.url });
    });
};

export const findAll = async (): Promise<Array<Film>> => {
    const filmsWithoutImageUrl = await FilmGateway.findAll();

    const filmsWithImageUrl = findUrlImageByFilm(filmsWithoutImageUrl);

    return filmsWithImageUrl;
};
