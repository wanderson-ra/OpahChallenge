import React from "react";
import FastImage from "react-native-fast-image";

import { useTheme } from "styled-components/native";

import { Container, Image } from "./styles";

interface FilmsCarouselItemProps {
    imageUrl?: string;
}
export const FilmsCarouselItem: React.FC<FilmsCarouselItemProps> = (filmsCarouselItemProps) => {
    const theme = useTheme();

    const { imageUrl } = filmsCarouselItemProps;

    return (
        <Container rippleColor={theme.ripple}>
            <Image
                source={{
                    uri: imageUrl,
                    priority: FastImage.priority.normal,
                }}
            />
        </Container>
    );
};
