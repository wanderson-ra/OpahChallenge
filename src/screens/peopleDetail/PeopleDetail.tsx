import React, { useLayoutEffect } from "react";
import { StatusBar } from "react-native";

import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { People } from "src/domains/people";

import { Container } from "./styles";

type DetailsParams = {
    params: {
        people: People;
    };
};

type DetailsProps = RouteProp<DetailsParams, "params">;

export const PeopleDetail: React.FC = () => {
    const theme = useTheme();

    const { people } = useRoute<DetailsProps>().params;

    const { setOptions } = useNavigation();

    useLayoutEffect(() => {
        setOptions({
            title: people.name,
        });
    }, [people.name, setOptions]);

    return (
        <Container>
            <StatusBar backgroundColor={theme.navigation.statusBar} barStyle={"light-content"} />
        </Container>
    );
};
