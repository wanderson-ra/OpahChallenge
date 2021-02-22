import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";
import { widthPercentageToDP as width, heightPercentageToDP as height } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

export const AnimatedView = styled(Animatable.View)`
    justify-content: center;
    align-items: center;
    margin-bottom: ${height(3)}px;
`;

export const WrapperInformation = styled.View`
    padding: ${isIphoneX() ? height(1) : height(2)}px;
    width: ${width(90)}px;
    height: ${isIphoneX() ? height(9) : height(12)}px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const WrapperNameAndEmail = styled.View`
    margin-left: ${width(4)}px;
    height: ${isIphoneX() ? height(5) : height(7)}px;
    justify-content: space-around;
    align-items: flex-start;
`;

export const Name = styled.Text`
    color: ${(props): string => props.theme.font.primary};
    font-size: ${metrics.font.small}px;
    font-weight: 500;
    width: ${width(60)}px;
`;

export const Email = styled.Text`
    color: ${(props): string => props.theme.font.primary};
    font-size: ${metrics.font.micro}px;
    font-weight: 300;
    width: ${width(60)}px;
`;
