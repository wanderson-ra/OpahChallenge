import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

export const Container = styled.View`
    justify-content: flex-start;
    align-items: center;
    height: ${isIphoneX() ? height(15) : height(18)}px;
    width: ${isIphoneX() ? width(30) : width(32)}px;
    padding-top: ${height(1)}px;
`;

export const Name = styled.Text.attrs({
    lineBreakMode: "tail",
    numberOfLines: 1,
})`
    margin-top: ${height(2)}px;
    text-align: center;
    width: ${width(28)}px;
    font-size: ${metrics.font.micro}px;
    font-weight: 700;
    color: ${(props): string => props.theme.font.primary};
`;
