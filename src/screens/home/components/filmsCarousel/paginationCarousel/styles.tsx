import { heightPercentageToDP as height } from "react-native-responsive-screen";
import { Pagination } from "react-native-snap-carousel";

import styled from "styled-components/native";

export const PaginationContainer = styled(Pagination).attrs((props) => ({
    containerStyle: { position: "absolute", bottom: height(-6) },
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
