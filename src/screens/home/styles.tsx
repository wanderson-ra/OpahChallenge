import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props): string => props.theme.page.background};
`;

export const SwitchWrapper = styled.View`
    height: ${height(10)}px;
    width: ${width(100)}px;
    justify-content: center;
    align-items: flex-end;
    margin-right: ${width(5)}px;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;
