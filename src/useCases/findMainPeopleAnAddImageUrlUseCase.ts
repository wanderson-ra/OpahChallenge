import * as PeopleGateway from "src/gateways/http/people/peopleGateway";

import { imageUrlsByMainPeople } from "src/globals/constants/people";

import { People } from "../domains/people";

const findMainPeopleAndAddImageUlr = (peoplesWithoutImageUrl: Array<People>): Array<People> => {
    const mainPeoplesWithImageUrl: Array<People> = [];

    peoplesWithoutImageUrl.forEach((people) => {
        const imageUrlFinded = imageUrlsByMainPeople.find(
            (imageUrlByMainPeople) => imageUrlByMainPeople.name === people.name
        );
        if (imageUrlFinded) {
            mainPeoplesWithImageUrl.push({ ...people, imageUrl: imageUrlFinded.url });
        }
    });

    return mainPeoplesWithImageUrl;
};

export const find = async (): Promise<Array<People>> => {
    const peoplesWithoutImageUrl = await PeopleGateway.findAll();

    const mainPeoplesWithImageUrl = findMainPeopleAndAddImageUlr(peoplesWithoutImageUrl);

    return mainPeoplesWithImageUrl;
};
