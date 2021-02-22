import * as Animatable from "react-native-animatable";
import Animated from "react-native-reanimated";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

const extraPadding = height(5);

export const AnimatedView = styled(Animatable.View)`
    justify-content: center;
    align-items: center;
`;

export const AnimatedScrollView = styled(Animated.ScrollView).attrs({
    contentContainerStyle: {
        paddingTop: metrics.searchContainerHeight + extraPadding,
    },
})``;

export const NotSearchPatients = styled.Text`
    color: ${(props): string => props.theme.font.primary};
    font-size: ${metrics.font.medium}px;
    font-weight: 500;
    width: ${width(80)}px;
    text-align: center;
`;
