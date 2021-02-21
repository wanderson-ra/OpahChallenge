import FastImage from "react-native-fast-image";
import { widthPercentageToDP as width, heightPercentageToDP as height } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props): string => props.theme.page.background};
`;

export const Image = styled(FastImage)`
    width: ${width(100)}px;
    height: ${height(30)}px;
    align-self: flex-start;
`;
