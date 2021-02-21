import React from "react";
import FastImage from "react-native-fast-image";
import { SharedElement } from "react-navigation-shared-element";

import { Container, Image, Name } from "./styles";

interface MainItemProps {
    imageUrl: string;
    name: string;
}
export const MainItem: React.FC<MainItemProps> = (mainItemProps) => {
    const { imageUrl, name } = mainItemProps;

    return (
        <Container>
            <SharedElement id={`patient.${name}.image`}>
                <Image
                    testID={"MainImage"}
                    resizeMode={"cover"}
                    source={{
                        uri: imageUrl,
                        priority: FastImage.priority.normal,
                    }}
                />
            </SharedElement>
            <Name testID={"MainName"}>{name}</Name>
        </Container>
    );
};
