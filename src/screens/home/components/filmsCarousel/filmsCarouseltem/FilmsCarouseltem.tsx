import React, { memo } from "react";
import FastImage from "react-native-fast-image";

import { useTheme } from "styled-components/native";

import { Film } from "src/domains/films";

import { Container, Image, Title } from "./styles";

interface FilmsCarouselItemProps {
    film: Film;
}
const View: React.FC<FilmsCarouselItemProps> = (filmsCarouselItemProps) => {
    const theme = useTheme();

    const { film } = filmsCarouselItemProps;

    return (
        <Container rippleColor={theme.ripple}>
            <Image
                testID={"imageFilm"}
                source={{
                    uri: film.imageUrl,
                    priority: FastImage.priority.normal,
                }}
            />
            <Title testID={"title"}>{film.title}</Title>
        </Container>
    );
};

const FilmsCarouselItem = memo(View);

export { FilmsCarouselItem };
