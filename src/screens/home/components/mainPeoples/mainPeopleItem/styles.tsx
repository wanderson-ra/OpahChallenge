import * as Animatable from "react-native-animatable";
import { widthPercentageToDP as width } from "react-native-responsive-screen";

import styled from "styled-components/native";

interface ContainerProps {
    applyMarginRight: boolean;
}

export const Container = styled.SafeAreaView<ContainerProps>`
    margin-right: ${(props): number => (props.applyMarginRight ? width(4) : 0)}px;
    justify-content: center;
    align-items: center;
`;

export const AnimatedView = styled(Animatable.View)`
    justify-content: center;
    align-items: center;
`;
