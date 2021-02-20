import React, { useCallback } from "react";
import { TextStyle, StyleProp, ViewStyle, TouchableOpacity, Text } from "react-native";

import { Container, Title } from "./styles";

export interface ButtonProps {
    testID?: string;
    enable: boolean;
    onPress: () => void;
    title: string;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

export const Button: React.FC<ButtonProps> = (buttonProps) => {
    const { enable, onPress, title, textStyle, containerStyle, testID } = buttonProps;

    const executeOnPress = useCallback(() => {
        if (enable) {
            onPress();
        }
    }, [enable, onPress]);

    return (
        <Container
            disabled={!enable}
            as={TouchableOpacity}
            style={containerStyle}
            testID={testID ? testID : "button"}
            onPress={executeOnPress}
        >
            <Title as={Text} testID={"title"} style={[textStyle, { opacity: enable ? 1 : 0.5 }]}>
                {title}
            </Title>
        </Container>
    );
};
