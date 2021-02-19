import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { DefaultTheme } from "styled-components/native";

import * as GetStorageUseCase from "src/useCases/getDataStorageUseCase";
import * as SaveStorageUseCase from "src/useCases/saveDataStorageUseCase";

import colorTheme from "src/configurations/themes/theme";

import { MODE_THEME_KEY } from "src/globals/constants/storage";

export type Mode = "light" | "dark";

import { ThemeActionTypes } from "../types";

export interface ThemeAction {
    type: ThemeActionTypes.MODE_THEME;
    mode: Mode;
    theme: DefaultTheme;
}

export type Action = ThemeAction;

export const dispatchThemeAction = (mode: Mode, theme: DefaultTheme): ThemeAction => {
    return {
        type: ThemeActionTypes.MODE_THEME,
        mode: mode,
        theme: theme,
    };
};

export const saveMode = (mode: Mode) => {
    return async (dispatch: ThunkDispatch<void, void, AnyAction>): Promise<void> => {
        await SaveStorageUseCase.save(MODE_THEME_KEY, mode);

        const theme = mode === "dark" ? colorTheme.dark : colorTheme.light;

        dispatch(dispatchThemeAction(mode, theme));
    };
};

export const getMode = () => {
    return async (dispatch: ThunkDispatch<void, void, AnyAction>): Promise<void> => {
        const mode = await GetStorageUseCase.get(MODE_THEME_KEY);

        if (mode) {
            const theme = mode === "dark" ? colorTheme.dark : colorTheme.light;
            dispatch(dispatchThemeAction(mode === "light" ? "light" : "dark", theme));
        } else {
            dispatch(dispatchThemeAction("light", colorTheme.light));
        }
    };
};
