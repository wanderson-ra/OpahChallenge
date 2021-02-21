import { when, resetAllWhenMocks } from "jest-when";

import * as PeopleGateway from "../../../src/gateways/http/people/peopleGateway";

import * as FindMainPeopleAnAddImageUrlUseCase from "../../../src/useCases/findMainPeopleAnAddImageUrlUseCase";

import { imageUrlsByMainPeople } from "../../../src/globals/constants/people";

import { peopleTemplateFixedName } from "../../dataBuilders/domains/peopleTemplate";

describe("Tests of FindMainPeopleAnAddImageUrlUseCase", () => {
    beforeAll(() => {
        resetAllWhenMocks();
    });

    it("Test with success and add image url", async () => {
        const people = peopleTemplateFixedName.build();

        const expectedPeopleResponse = {
            ...people,
            imageUrl: imageUrlsByMainPeople.find((imageUrl) => imageUrl.name === people.name).url,
        };

        const expectedPeoplesAfterProcess = [expectedPeopleResponse];

        const mockedPeopleGateway = jest.spyOn(PeopleGateway, "findAll");
        when(mockedPeopleGateway).calledWith().mockResolvedValue([people]);

        const peoplesResponse = await FindMainPeopleAnAddImageUrlUseCase.find();

        expect(peoplesResponse).toEqual(expectedPeoplesAfterProcess);
        expect(mockedPeopleGateway).toBeCalled();
    });
});
