import React from "react";
import { StatusBar } from "react-native";
import { useSelector } from "react-redux";

import { useTheme } from "styled-components/native";

import { RootState } from "src/store/reducers";

import { SwitchMode } from "src/components/switchMode/SwitchMode";

import { Container, ScrollContainer, SwitchWrapper } from "./styles";

import { FilmsCarousel } from "./components/filmsCarousel/FilmsCarousel";

export const Home: React.FC = () => {
    const theme = useTheme();
    const { mode } = useSelector((state: RootState) => state.themeReducer.themeReducer);

    return (
        <Container>
            <StatusBar
                backgroundColor={theme.navigation.statusBar}
                barStyle={mode === "dark" ? "light-content" : "dark-content"}
            />

            <SwitchWrapper>
                <SwitchMode />
            </SwitchWrapper>

            <ScrollContainer>
                <FilmsCarousel />
            </ScrollContainer>
        </Container>
    );
};
