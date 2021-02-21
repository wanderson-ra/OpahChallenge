import React, { memo, useCallback } from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import { People } from "src/domains/people";

import { CardAction } from "src/components/cardAction/CardAction";

import { Container } from "./styles";

import { MainItem } from "../../mainItem/MainItem";

interface MainPeopleItemProps {
    people: People;
    applyMarginRight: boolean;
}

export const MainPeopleItem: React.FC<MainPeopleItemProps> = (mainPeopleItemProps) => {
    const { people, applyMarginRight } = mainPeopleItemProps;

    return (
        <Container applyMarginRight={applyMarginRight} testID={"Container"}>
            <CardAction
                hasShadow={false}
                action={(): void => console.log("Press")}
                height={isIphoneX() ? height(18) : height(23)}
                width={isIphoneX() ? width(35) : width(40)}
            >
                <MainItem imageUrl={people.imageUrl ? people.imageUrl : ""} name={people.name} />
            </CardAction>
        </Container>
    );
};
