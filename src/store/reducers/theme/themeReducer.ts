import { combineReducers } from "redux";
import { DefaultTheme } from "styled-components/native";

import { Action, Mode } from "../../actions/theme/themeAction";
import { ThemeActionTypes } from "../../actions/types";

export interface ThemeReducer {
    mode: Mode | undefined;
    theme: DefaultTheme | undefined;
}

export interface ThemeState {
    themeReducer: ThemeReducer;
}

export const themeReducer = (
    state: ThemeReducer = {
        mode: undefined,
        theme: undefined,
    },
    action: Action
): ThemeReducer => {
    switch (action.type) {
        case ThemeActionTypes.MODE_THEME:
            return {
                ...state,
                mode: action.mode,
                theme: action.theme,
            };

        default:
            return state;
    }
};

export default combineReducers<ThemeState>({
    themeReducer,
});
