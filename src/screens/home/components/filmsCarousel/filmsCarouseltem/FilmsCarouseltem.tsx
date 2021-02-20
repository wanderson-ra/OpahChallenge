import React from "react";
import FastImage from "react-native-fast-image";

import { useTheme } from "styled-components/native";

import { Film } from "src/domains/films";

import { Container, Image, Title } from "./styles";

interface FilmsCarouselItemProps {
    film: Film;
}
export const FilmsCarouselItem: React.FC<FilmsCarouselItemProps> = (filmsCarouselItemProps) => {
    const theme = useTheme();

    const { film } = filmsCarouselItemProps;

    return (
        <Container rippleColor={theme.ripple}>
            <Image
                source={{
                    uri: film.imageUrl,
                    priority: FastImage.priority.normal,
                }}
            />
            <Title>{film.title}</Title>
        </Container>
    );
};
