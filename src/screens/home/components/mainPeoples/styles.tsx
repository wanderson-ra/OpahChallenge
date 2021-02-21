import * as Animatable from "react-native-animatable";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

export const AnimatedView = styled(Animatable.View)`
    justify-content: center;
    align-items: center;
`;

export const Container = styled.View`
    margin-top: ${height(6)}px;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    background-color: ${(props): string => props.theme.page.background};
    padding-left: ${width(4)}px;
    padding-right: ${width(4)}px;
    height: ${height(25)}px;
`;

export const ListMainsPeople = styled.FlatList``;

export const Title = styled.Text.attrs({
    lineBreakMode: "tail",
    numberOfLines: 1,
})`
    margin-top: ${height(1)}px;
    margin-bottom: ${height(1)}px;
    text-align: left;
    width: ${width(50)}px;
    font-size: ${metrics.font.medium}px;
    font-weight: 700;
    color: ${(props): string => props.theme.font.primary};
`;
