import React from "react";
import { StatusBar } from "react-native";

import { useTheme } from "styled-components/native";

import { Container, ScrollContainer } from "./styles";

import { FilmsCarousel } from "./components/filmsCarousel/FilmsCarousel";
import { HeaderHome } from "./components/headerHome/HeaderHome";

export const Home: React.FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <StatusBar backgroundColor={theme.navigation.statusBar} barStyle={"light-content"} />

            <HeaderHome />

            <ScrollContainer>
                <FilmsCarousel />
            </ScrollContainer>
        </Container>
    );
};
