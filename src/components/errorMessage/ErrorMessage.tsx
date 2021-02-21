import React from "react";
import { heightPercentageToDP as height } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { useTheme } from "styled-components/native";

import { Container, Message } from "./styles";

import { strings } from "../../utils/strings";

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
        <Container testID={"buttonPageMessage"} onPress={onPress}>
            <Icon testID={"icon"} name={messageProps.icon} size={height(5)} color={theme.icon.default} />

            <Message testID={"message"}>{`${messageProps.message}. ${strings.button.touchToReload}`}</Message>
        </Container>
    );
};
