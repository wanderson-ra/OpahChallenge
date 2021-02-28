import { heightPercentageToDP as height } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ListPlanets = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    scrollEventThrottle: 1,
    onEndReachedThreshold: 0.1,
    contentContainerStyle: {
        paddingBottom: height(5),
    },
})``;
