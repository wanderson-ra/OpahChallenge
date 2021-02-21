import { heightPercentageToDP as height } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props): string => props.theme.page.background};
    height: ${height(30)}px;
`;

export const WrapperCarousel = styled.View`
    justify-content: center;
    align-items: center;
`;
