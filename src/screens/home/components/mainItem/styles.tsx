import FastImage from "react-native-fast-image";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

export const Container = styled.View`
    justify-content: flex-start;
    align-items: center;
    height: ${height(20)}px;
    width: ${width(40)}px;
`;

export const Image = styled(FastImage)`
    width: ${width(40)}px;
    height: ${height(12)}px;
    border-top-left-radius: ${height(1)}px;
    border-top-right-radius: ${height(1)}px;
    align-self: flex-start;
`;

export const Name = styled.Text.attrs({
    lineBreakMode: "tail",
    numberOfLines: 1,
})`
    margin-top: ${height(1)}px;
    margin-left: ${width(2)}px;
    text-align: left;
    width: ${width(40)}px;
    font-size: ${metrics.font.small}px;
    font-weight: 700;
    color: ${(props): string => props.theme.font.primary};
`;
