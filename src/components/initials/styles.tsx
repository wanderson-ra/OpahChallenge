import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

interface ContainerProps {
    color: string;
    width: number;
    height: number;
    borderRadius: number;
}

export const Container = styled.View<ContainerProps>`
    justify-content: center;
    align-items: center;
    width: ${(props): number => props.width}px;
    height: ${(props): number => props.height}px;
    border-radius: ${(props): number => props.borderRadius}px;
    background-color: ${(props): string => props.color};
`;

interface NameInitialsProps {
    color: string;
}
export const NameInitials = styled.Text<NameInitialsProps>`
    color: ${(props): string => props.color};
    font-size: ${metrics.font.medium}px;
    font-weight: 500;
`;
