import { heightPercentageToDP as height } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ListPlanets = styled.FlatList.attrs({
    contentContainerStyle: {
        paddingTop: height(5),
        paddingBottom: height(5),
        showsVerticalScrollIndicator: false,
        scrollEventThrottle: 1,
        onEndReachedThreshold: 0.1,
    },
})``;
