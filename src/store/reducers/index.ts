import { createStore, applyMiddleware, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";

import themeReducer, { ThemeState } from "./themeReducer";

export interface RootState {
    themeReducer: ThemeState;
}

export default createStore(
    combineReducers<RootState>({
        themeReducer,
    }),
    {},
    applyMiddleware(ReduxThunk)
);
