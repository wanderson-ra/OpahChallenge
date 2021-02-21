import React, { useCallback } from "react";
import { isIphoneX } from "react-native-iphone-x-helper";
import { heightPercentageToDP as height } from "react-native-responsive-screen";
import SwitchSelector from "react-native-switch-selector";
import { useDispatch, useSelector } from "react-redux";

import { useTheme } from "styled-components/native";

import { saveMode } from "src/store/actions/theme/themeAction";
import { Mode } from "src/store/actions/theme/themeAction";
import { RootState } from "src/store/reducers";

import { Container, Selector } from "./styles";

export const SwitchMode: React.FC = () => {
    const { mode } = useSelector((state: RootState) => state.themeReducer.themeReducer);

    const theme = useTheme();

    const dispatch = useDispatch();

    const save = useCallback(
        (mode: Mode): void => {
            dispatch(saveMode(mode));
        },
        [dispatch]
    );

    return (
        <Container>
            <Selector
                as={SwitchSelector}
                backgroundColor={theme.switch.backgroundColor}
                height={isIphoneX() ? height(3.5) : height(4)}
                initial={mode === "light" ? 0 : 1}
                onPress={(value: string): void => save(value === "light" ? "light" : "dark")}
                textColor={theme.font.primary}
                selectedColor={theme.font.inverse}
                buttonColor={theme.switch.color}
                borderColor={theme.card.background}
                hasPadding
                options={[
                    { label: "light", value: "light" },
                    { label: "dark", value: "dark" },
                ]}
            />
        </Container>
    );
};
