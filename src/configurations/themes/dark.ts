import { DefaultTheme } from "styled-components/native";

export const dark: DefaultTheme = {
    primary: "#9ef0bc",
    dark: "#6dbd8c",
    light: "#d1ffef",
    ripple: "#FFFFFF",
    logo: "#9ef0bc",
    loading: "#FFFFFF",
    borderColor: "transparent",

    navigation: {
        bar: "#1d1d1d",
        title: "#9ef0bc",
        statusBar: "#0c0107",
    },

    page: {
        background: "#121212",
    },

    font: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        extra: "#FFFFFF",
        actions: "#9ef0bc",
        inverse: "#000000",
    },

    icon: {
        default: "#FFFFFF",
        extra: "#000000",
        inverse: "#000000",
    },

    button: {
        primary: "#9ef0bc",
        font: "#000000",
        ripple: "transparent",
        border: {
            primary: "#757575",
        },
    },

    dialog: {
        background: "#252525",
        text: "#FFFFFF",
    },

    bottomNavigator: {
        backgroundColor: "#1d1d1d",
        activeColor: "#9ef0bc",
        inactiveColor: "#FFFFFF50",
    },

    card: {
        background: "#252525",
        shadowColor: "#ffffff",
    },

    shimmer: {
        container: "#252525",
        color: "#4d4d4d",
    },

    switch: {
        backgroundColor: "#252525",
    },

    carousel: {
        paginationDotColor: "#FFFFFF",
    },

    textInput: {
        placeholder: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#252525",
        borderColor: "#9ef0bc",
    },
};
