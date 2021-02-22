import React, { useCallback } from "react";
import { useSelector } from "react-redux";

import StringToColor from "string-to-color";

import colorTheme from "src/configurations/themes/theme";

import { shadeColor } from "src/utils/colors";
import { findInitials } from "src/utils/name";

import { RootState } from "src/store/reducers";

import { Container, NameInitials } from "./styles";

interface InitialsProps {
    width: number;
    height: number;
    borderRadius: number;
    name: string;
}

export const Initials: React.FC<InitialsProps> = (initialsProps) => {
    const { borderRadius, height, name, width } = initialsProps;

    const { mode } = useSelector((state: RootState) => state.themeReducer.themeReducer);

    const getColorFontInitialsByColorMode = useCallback((): string => {
        return mode === "light" ? colorTheme.dark.font.primary : colorTheme.light.font.primary;
    }, [mode]);

    const generateColorByColorMode = useCallback(
        (name: string): string => {
            const originalColor = StringToColor(name);
            const colorBasedInMode = shadeColor(originalColor, mode === "light" ? -80 : 80);

            return colorBasedInMode;
        },
        [mode]
    );

    return (
        <Container
            testID={"Container"}
            height={height}
            width={width}
            borderRadius={borderRadius}
            color={generateColorByColorMode(name)}
        >
            <NameInitials testID={"NameInitials"} color={getColorFontInitialsByColorMode()}>
                {findInitials(name).toUpperCase()}
            </NameInitials>
        </Container>
    );
};
