import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    margin-top: ${height(2)}px;
    text-align: center;
    font-size: ${metrics.font.small}px;
    color: ${(props): string => props.theme.font.secondary};
    width: ${width(63)}px;
`;
