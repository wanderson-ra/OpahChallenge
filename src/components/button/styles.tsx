import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "../../configurations/metrics";

export const Container = styled.TouchableOpacity`
    width: ${width(50)}px;
    height: ${height(5)}px;
    margin-top: ${height(5)}px;
    border-radius: ${height(1)}px;
    justify-content: center;
    background-color: ${(props): string => props.theme.button.primary};
    align-items: center;
`;

export const Title = styled.Text`
    color: ${(props): string => props.theme.button.font};
    font-size: ${metrics.font.small}px;
    font-weight: 700;
`;
