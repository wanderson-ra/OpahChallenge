import Animated from "react-native-reanimated";
import { heightPercentageToDP as height } from "react-native-responsive-screen";

import styled from "styled-components/native";

import { metrics } from "src/configurations/metrics";

export const AnimatedContainer = styled(Animated.View)`
    position: absolute;
    height: ${metrics.searchContainerHeight}px;
    margin-top: ${height(4)}px;
    padding-left: ${height(5)}px;
    padding-right: ${height(5)}px;
    justify-content: center;
    align-items: center;
    background-color: ${(props): string => props.theme.page.background};
`;
