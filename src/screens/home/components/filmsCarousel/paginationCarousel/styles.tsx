import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height } from "react-native-responsive-screen";
import { Pagination } from "react-native-snap-carousel";

import styled from "styled-components/native";

export const PaginationContainer = styled(Pagination).attrs((props) => ({
    containerStyle: { position: "absolute", bottom: isIphoneX() ? height(-6) : height(-8) },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: props.theme.carousel.paginationDotColor,
    },
    inactiveDotStyle: {},
    inactiveDotOpacity: 0.4,
    inactiveDotScale: 0.6,
}))``;
