import { when } from "jest-when";
import { AnyAction } from "redux";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";

import * as GetStorageUseCase from "../../../../../src/useCases/getDataStorageUseCase";
import * as SaveStorageUseCase from "../../../../../src/useCases/saveDataStorageUseCase";

import colorTheme from "../../../../../src/configurations/themes/theme";

import { ThemeAction, getMode, saveMode, Mode } from "../../../../../src/store/actions/theme/themeAction";
import { ThemeActionTypes } from "../../../../../src/store/actions/types";

import { MODE_THEME_KEY } from "../../../../../src/globals/constants/storage";

const initialState = {};
type State = typeof initialState;
const middleware = [thunk];
const mockStore = configureMockStore<State, ThunkDispatch<State, void, AnyAction>>(middleware);

describe("Tests of ThemeAction", () => {
    it("Test with save mode light", async () => {
        const mode: Mode = "light";
        const theme = colorTheme.light;

        const mockedSaveStorageUseCase = jest.spyOn(SaveStorageUseCase, "save");

        const themeActionExpected: ThemeAction = {
            type: ThemeActionTypes.MODE_THEME,
            mode: mode,
            theme: theme,
        };

        const expectedActions = [themeActionExpected];

        const store = mockStore();

        return store.dispatch(saveMode(mode)).then(() => {
            expect(store.getActions()[0]).toEqual(expectedActions[0]);
            expect(mockedSaveStorageUseCase).toBeCalledWith(MODE_THEME_KEY, mode);
        });
    });

    it("Test with save mode dark", async () => {
        const mode: Mode = "dark";
        const theme = colorTheme.dark;

        const mockedSaveStorageUseCase = jest.spyOn(SaveStorageUseCase, "save");

        const themeActionExpected: ThemeAction = {
            type: ThemeActionTypes.MODE_THEME,
            mode: mode,
            theme: theme,
        };

        const expectedActions = [themeActionExpected];

        const store = mockStore();

        return store.dispatch(saveMode(mode)).then(() => {
            expect(store.getActions()[0]).toEqual(expectedActions[0]);
            expect(mockedSaveStorageUseCase).toBeCalledWith(MODE_THEME_KEY, mode);
        });
    });

    it("Test with success getMode light", async () => {
        const mode: Mode = "light";
        const theme = colorTheme.light;

        const mockedGetStorageUseCase = jest.spyOn(GetStorageUseCase, "get");
        when(mockedGetStorageUseCase).calledWith(MODE_THEME_KEY).mockResolvedValue(mode);

        const themeActionExpected: ThemeAction = {
            type: ThemeActionTypes.MODE_THEME,
            mode: mode,
            theme: theme,
        };

        const expectedActions = [themeActionExpected];

        const store = mockStore();

        return store.dispatch(getMode()).then(() => {
            expect(store.getActions()[0]).toEqual(expectedActions[0]);
            expect(mockedGetStorageUseCase).toBeCalledWith(MODE_THEME_KEY);
        });
    });

    it("Test with success getMode dark", async () => {
        const mode: Mode = "dark";
        const theme = colorTheme.dark;

        const mockedGetStorageUseCase = jest.spyOn(GetStorageUseCase, "get");
        when(mockedGetStorageUseCase).calledWith(MODE_THEME_KEY).mockResolvedValue(mode);

        const themeActionExpected: ThemeAction = {
            type: ThemeActionTypes.MODE_THEME,
            mode: mode,
            theme: theme,
        };

        const expectedActions = [themeActionExpected];

        const store = mockStore();

        return store.dispatch(getMode()).then(() => {
            expect(store.getActions()[0]).toEqual(expectedActions[0]);
            expect(mockedGetStorageUseCase).toBeCalledWith(MODE_THEME_KEY);
        });
    });

    it("Test with success getMode light null mode storage", async () => {
        const mode: Mode = "light";
        const theme = colorTheme.light;

        const mockedGetStorageUseCase = jest.spyOn(GetStorageUseCase, "get");
        when(mockedGetStorageUseCase).calledWith(MODE_THEME_KEY).mockResolvedValue(null);

        const themeActionExpected: ThemeAction = {
            type: ThemeActionTypes.MODE_THEME,
            mode: mode,
            theme: theme,
        };

        const expectedActions = [themeActionExpected];

        const store = mockStore();

        return store.dispatch(getMode()).then(() => {
            expect(store.getActions()[0]).toEqual(expectedActions[0]);
            expect(mockedGetStorageUseCase).toBeCalledWith(MODE_THEME_KEY);
        });
    });
});
