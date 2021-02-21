import React, { useLayoutEffect } from "react";
import { StatusBar } from "react-native";
import FastImage from "react-native-fast-image";
import { SharedElement } from "react-navigation-shared-element";

import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { People } from "src/domains/people";

import { Container, Image } from "./styles";

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

            <SharedElement id={`patient.${people.name}.image`}>
                <Image
                    testID={"MainImage"}
                    resizeMode={"cover"}
                    source={{
                        uri: people.imageUrl,
                        priority: FastImage.priority.normal,
                    }}
                />
            </SharedElement>
        </Container>
    );
};
