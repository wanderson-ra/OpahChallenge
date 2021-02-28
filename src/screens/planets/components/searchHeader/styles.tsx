import { heightPercentageToDP as height } from "react-native-responsive-screen";

import styled from "styled-components/native";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: ${height(4)}px;
    padding-bottom: ${height(4)}px;
`;
