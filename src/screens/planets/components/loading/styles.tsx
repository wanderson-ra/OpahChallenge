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
    contentContainerStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
})`
    flex: 1;
`;

export const LoadingItem = styled(ShimmerPlaceHolder).attrs((props) => ({
    LinearGradient: LinearGradient,
    width: width(90),
    height: isIphoneX() ? height(9) : height(12),
    shimmerColors: [props.theme.shimmer.container, props.theme.shimmer.color, props.theme.shimmer.container],
}))`
    justify-content: center;
    align-items: center;
    border-radius: ${height(1)}px;
    margin-bottom: ${height(3)}px;
`;

export const ContainerLSearch = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: ${height(4)}px;
    padding-bottom: ${height(4)}px;
`;

export const LoadingSearch = styled(ShimmerPlaceHolder).attrs((props) => ({
    LinearGradient: LinearGradient,
    width: width(90),
    height: isIphoneX() ? height(5) : height(6),
    shimmerColors: [props.theme.shimmer.container, props.theme.shimmer.color, props.theme.shimmer.container],
}))`
    justify-content: center;
    align-items: center;
    border-radius: ${height(1)}px;
`;
