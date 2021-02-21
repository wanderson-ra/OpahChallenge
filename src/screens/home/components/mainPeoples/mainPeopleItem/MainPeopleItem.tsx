import React, { memo } from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import { useNavigation } from "@react-navigation/native";

import { People } from "src/domains/people";

import { CardAction } from "src/components/cardAction/CardAction";

import { PEOPLE_DETAIL } from "src/globals/constants/screens";

import { Container } from "./styles";

import { MainItem } from "../../mainItem/MainItem";

interface MainPeopleItemProps {
    people: People;
    applyMarginRight: boolean;
}

export const View: React.FC<MainPeopleItemProps> = (mainPeopleItemProps) => {
    const { people, applyMarginRight } = mainPeopleItemProps;

    const { navigate } = useNavigation();

    return (
        <Container applyMarginRight={applyMarginRight} testID={"Container"}>
            <CardAction
                hasShadow={false}
                action={(): void => navigate(PEOPLE_DETAIL, { people: people })}
                height={isIphoneX() ? height(18) : height(23)}
                width={isIphoneX() ? width(35) : width(40)}
            >
                <MainItem imageUrl={people.imageUrl ? people.imageUrl : ""} name={people.name} />
            </CardAction>
        </Container>
    );
};

const MainPeopleItem = memo(View);
export { MainPeopleItem };
