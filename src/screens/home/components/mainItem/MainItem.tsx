import React from "react";
import FastImage from "react-native-fast-image";

import { Container, Image, Name } from "./styles";

interface MainItemProps {
    imageUrl: string;
    name: string;
}
export const MainItem: React.FC<MainItemProps> = (mainItemProps) => {
    const { imageUrl, name } = mainItemProps;

    return (
        <Container>
            <Image
                testID={"MainImage"}
                resizeMode={"cover"}
                source={{
                    uri: imageUrl,
                    priority: FastImage.priority.normal,
                }}
            />
            <Name testID={"MainName"}>{name}</Name>
        </Container>
    );
};
