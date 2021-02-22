import FastImage from "react-native-fast-image";

import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
`;

interface ImageProps {
    width: number;
    height: number;
    borderRadius: number;
}

export const Image = styled(FastImage)<ImageProps>`
    width: ${(props): number => props.width}px;
    height: ${(props): number => props.height}px;
    border-radius: ${(props): number => props.borderRadius}px;
    align-self: flex-start;
`;
