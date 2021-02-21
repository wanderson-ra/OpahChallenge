import { View, TextInput, Platform } from "react-native";
import { isIphoneX } from "react-native-iphone-x-helper";
import Ripple from "react-native-material-ripple";
import { widthPercentageToDP as width, heightPercentageToDP as height } from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

export const Container = styled.View`
    height: ${isIphoneX() ? height(5) : height(6)}px;
`;

export const TextInputContainer = styled(View)`
    width: ${width(95)}px;
    height: ${isIphoneX() ? height(5) : height(6)}px;
    background-color: ${(props): string => props.theme.textInput.backgroundColor};
    border-color: ${(props): string => props.theme.textInput.borderColor};
    border-width: 0.5px;
    border-radius: ${metrics.textInput.borderRadius}px;
    padding-left: ${width(3)}px;
    padding-right: ${width(3)}px;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
`;

export const IconTextInput = styled(Icon)`
    opacity: 0.6;
`;

export const SearchTextInput = styled(TextInput)`
    margin-left: ${width(2)}px;
    color: ${(props): string => props.theme.textInput.color};
    font-size: ${metrics.font.medium}px;
    width: ${width(60)}px;
    height: ${isIphoneX() ? height(5) : height(6)}px;
    padding-top: ${Platform.select({
        android: height(2),
        ios: 0,
    })}px;
`;

export const ClearButton = styled(Ripple)`
    height: ${metrics.icon.large + 15}px;
    width: ${metrics.icon.large + 15}px;
    border-radius: ${(metrics.icon.large + 15) / 2}px;
    opacity: 0.6;
    justify-content: center;
    align-items: center;
`;

export const ClearIcon = styled(Icon)``;
