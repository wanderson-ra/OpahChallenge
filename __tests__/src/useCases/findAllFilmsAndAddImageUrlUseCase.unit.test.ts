import { when, resetAllWhenMocks } from "jest-when";

import * as FilmGateway from "../../../src/gateways/http/film/filmGateway";

import * as FindAllFilmsAndAddImageUrlUseCase from "../../../src/useCases/findAllFilmsAndAddImageUrlUseCase";

import { imageUrlsByFilm } from "../../../src/globals/constants/films";

import { filmTemplateFullWithFixedEpisodeId } from "../../dataBuilders/domains/filmTemplate";

describe("Tests of FindAllFilmsAndAddImageUrlUseCase", () => {
    beforeAll(() => {
        resetAllWhenMocks();
    });

    it("Test with success and add image url", async () => {
        const film = filmTemplateFullWithFixedEpisodeId.build();

        const expectedFilmResponse = {
            ...film,
            imageUrl: imageUrlsByFilm.find((imageUrl) => imageUrl.episodeId === film.episodeId).url,
        };

        const expectedFilmsAfterProcess = [expectedFilmResponse];

        const mockedFilmGateway = jest.spyOn(FilmGateway, "findAll");
        when(mockedFilmGateway).calledWith().mockResolvedValue([film]);

        const filmsResponse = await FindAllFilmsAndAddImageUrlUseCase.findAll();

        expect(filmsResponse).toEqual(expectedFilmsAfterProcess);
        expect(mockedFilmGateway).toBeCalled();
    });
});
