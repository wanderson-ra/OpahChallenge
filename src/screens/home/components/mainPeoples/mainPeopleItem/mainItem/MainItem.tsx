import React from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height } from "react-native-responsive-screen";
import { SharedElement } from "react-navigation-shared-element";

import { Avatar } from "src/components/avatar/Avatar";

import { Container, Name } from "./styles";

interface MainItemProps {
    imageUrl: string;
    name: string;
}
export const MainItem: React.FC<MainItemProps> = (mainItemProps) => {
    const { imageUrl, name } = mainItemProps;

    return (
        <Container>
            <SharedElement id={`patient.${name}.image`}>
                <Avatar
                    height={isIphoneX() ? height(8) : height(10)}
                    width={isIphoneX() ? height(8) : height(10)}
                    borderRadius={isIphoneX() ? height(4) : height(5)}
                    avatarUrl={imageUrl}
                />
            </SharedElement>
            <Name testID={"MainName"}>{name}</Name>
        </Container>
    );
};
