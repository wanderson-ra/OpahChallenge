import Ripple from "react-native-material-ripple";

import styled from "styled-components/native";

interface ContainerProps {
    borderRadius: number;
    hasShadow: boolean;
}

export const Container = styled(Ripple)<ContainerProps>`
    background-color: ${(props): string => props.theme.card.background};
    border-radius: ${(props): number => props.borderRadius}px;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 2px ${(props): string => (props.hasShadow ? props.theme.card.shadowColor : "transparent")};
`;
