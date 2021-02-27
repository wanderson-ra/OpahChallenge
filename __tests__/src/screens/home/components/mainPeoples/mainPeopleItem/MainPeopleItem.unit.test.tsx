import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "styled-components/native";

import colorTheme from "../../../../../../../src/configurations/themes/theme";

import { CardAction } from "../../../../../../../src/components/cardAction/CardAction";

import { MainItem } from "../../../../../../../src/screens/home/components/mainPeoples/mainPeopleItem/mainItem/MainItem";
import { MainPeopleItem } from "../../../../../../../src/screens/home/components/mainPeoples/mainPeopleItem/MainPeopleItem";

import { PEOPLE_DETAIL } from "../../../../../../../src/globals/constants/screens";

import { peopleTemplateFull } from "../../../../../../dataBuilders/domains/peopleTemplate";

const mockNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
    return {
        useNavigation: jest.fn().mockImplementation(() => {
            return {
                navigate: mockNavigate,
            };
        }),
    };
});

describe("Test of MainPeopleItem", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    it("Test with action card and applyMarginRight to false", async () => {
        const people = peopleTemplateFull.build();
        const applyMarginRight = false;
        const index = 0;

        const mainPeopleItem: renderer.ReactTestRenderer = renderer.create(
            <ThemeProvider theme={colorTheme.light}>
                <MainPeopleItem index={index} applyMarginRight={applyMarginRight} people={people} />
            </ThemeProvider>
        );

        const cardAction = mainPeopleItem.root.findByType(CardAction);
        const mainItem = mainPeopleItem.root.findByType(MainItem);

        await renderer.act(async () => {
            await cardAction.props.action();
        });

        expect(mockNavigate).toBeCalledWith(PEOPLE_DETAIL, { people: people });
        expect(mainItem.props.imageUrl).toEqual(people.imageUrl);
        expect(mainItem.props.name).toEqual(people.name);
    });
});
