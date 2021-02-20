import React from "react";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "styled-components/native";

import { Container, Message } from "./styles";

import { Button } from "../button/Button";

export interface MessageProps {
    message: string;
    icon: string;
    buttonTitle: string;
}

interface ErrorMessageProps {
    onPress: () => void;
    messageProps: MessageProps;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = (errorMessageProps) => {
    const theme = useTheme();
    const { messageProps, onPress } = errorMessageProps;

    return (
        <Container>
            <Icon testID={"icon"} name={messageProps.icon} size={height(5)} color={theme.icon.default} />

            <Message testID={"message"}>{messageProps.message}</Message>

            <Button
                containerStyle={{ width: width(50), height: height(4) }}
                enable={true}
                testID={"buttonPageMessage"}
                onPress={(): void => onPress()}
                title={messageProps.buttonTitle}
            />
        </Container>
    );
};
