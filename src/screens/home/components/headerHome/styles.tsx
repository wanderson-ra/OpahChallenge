import { heightPercentageToDP as height, widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.View`
    height: ${height(12)}px;
    width: ${width(100)}px;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;
