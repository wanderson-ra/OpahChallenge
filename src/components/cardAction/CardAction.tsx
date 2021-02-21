import React from "react";
import { heightPercentageToDP } from "react-native-responsive-screen";

import { useTheme } from "styled-components/native";

import { Container } from "./styles";

interface CardCardActionProps {
    children: React.ReactNode;
    borderRadius?: number;
    action: () => void;
    hasShadow?: boolean;
}

export const CardAction: React.FC<CardCardActionProps> = (cardCardActionProps) => {
    const { children, action, borderRadius = heightPercentageToDP(1), hasShadow = true } = cardCardActionProps;

    const theme = useTheme();

    return (
        <Container
            hasShadow={hasShadow}
            borderRadius={borderRadius}
            testID={"rippleTouchable"}
            rippleColor={theme.ripple}
            style={{ elevation: hasShadow ? 4 : 0 }}
            onPress={action}
        >
            {children}
        </Container>
    );
};
