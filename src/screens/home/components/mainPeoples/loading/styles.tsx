import { isIphoneX } from "react-native-iphone-x-helper";
import LinearGradient from "react-native-linear-gradient";
import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";
import ShimmerPlaceHolder from "react-native-shimmer-placeholder";

import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: flex-start;
`;

export const ContainerLoadingItems = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
})`
    flex: 1;
`;

export const LoadingItem = styled(ShimmerPlaceHolder).attrs((props) => ({
    LinearGradient: LinearGradient,
    height: isIphoneX() ? height(18) : height(23),
    width: isIphoneX() ? width(35) : width(40),
    shimmerColors: [props.theme.shimmer.container, props.theme.shimmer.color, props.theme.shimmer.container],
}))`
    justify-content: center;
    align-items: center;
    margin-right: ${width(4)}px;
    border-radius: ${height(1)}px;
`;

export const LoadingTitle = styled(ShimmerPlaceHolder).attrs((props) => ({
    LinearGradient: LinearGradient,
    height: height(2),
    width: width(50),
    shimmerColors: [props.theme.shimmer.container, props.theme.shimmer.color, props.theme.shimmer.container],
}))`
    margin-top: ${height(1)}px;
    margin-bottom: ${height(1)}px;
`;
