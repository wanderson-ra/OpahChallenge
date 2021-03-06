import { widthPercentageToDP as width } from "react-native-responsive-screen";
import SwitchSelector from "react-native-switch-selector";

import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    justify-content: center;
    align-items: center;
    flex: 1;
`;

export const Selector = styled(SwitchSelector)`
    width: ${width(30)}px;
`;
