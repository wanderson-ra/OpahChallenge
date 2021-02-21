import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import styled from "styled-components/native";

export const Container = styled(ShimmerPlaceHolder).attrs((props) => ({
    LinearGradient: LinearGradient,
    height: height(30),
    width: width(100),
    shimmerColors: [props.theme.shimmer.container, props.theme.shimmer.color, props.theme.shimmer.container],
}))`
    justify-content: center;
    align-items: center;
`;
