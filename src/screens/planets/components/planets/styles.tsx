import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const WrapperSearchText = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: ${height(4)}px;
    padding-bottom: ${height(4)}px;
`;

export const ListPlanets = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    scrollEventThrottle: 1,
    onEndReachedThreshold: 0.1,
    contentContainerStyle: {
        paddingBottom: height(5),
    },
})``;
