import colorTheme from "../../../../../src/configurations/themes/theme";

import { Action, Mode } from "../../../../../src/store/actions/theme/themeAction";
import { ThemeActionTypes } from "../../../../../src/store/actions/types";
import { ThemeReducer, themeReducer } from "../../../../../src/store/reducers/theme/themeReducer";

describe("Test of ThemeReducer", () => {
    it("Test with theme light", () => {
        const mode: Mode = "light";
        const theme = colorTheme.light;

        const themeReducerInitialState: ThemeReducer = {
            mode: undefined,
            theme: undefined,
        };

        const action: Action = {
            type: ThemeActionTypes.MODE_THEME,
            mode: mode,
            theme: theme,
        };

        expect(themeReducer(themeReducerInitialState, action)).toEqual({
            mode: mode,
            theme: theme,
        });
    });

    it("Test with theme dark", () => {
        const mode: Mode = "dark";
        const theme = colorTheme.dark;

        const themeReducerInitialState: ThemeReducer = {
            mode: undefined,
            theme: undefined,
        };

        const action: Action = {
            type: ThemeActionTypes.MODE_THEME,
            mode: mode,
            theme: theme,
        };

        expect(themeReducer(themeReducerInitialState, action)).toEqual({
            mode: mode,
            theme: theme,
        });
    });
});
