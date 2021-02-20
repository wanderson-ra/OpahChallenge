import { DefaultTheme } from "styled-components/native";

export const dark: DefaultTheme = {
    primary: "#ff578f",
    dark: "#c71662",
    light: "#ff8cbf",
    ripple: "#FFFFFF",
    logo: "#ff578f",
    loading: "#FFFFFF",
    borderColor: "transparent",

    navigation: {
        bar: "#1d1d1d",
        title: "#FFFFFF",
        statusBar: "#0c0107",
    },

    page: {
        background: "#121212",
    },

    font: {
        primary: "#FFFFFF",
        secondary: "#FFFFFF",
        extra: "#FFFFFF",
        actions: "#ff578f",
        inverse: "#000000",
    },

    icon: {
        default: "#FFFFFF",
        extra: "#000000",
        inverse: "#000000",
    },

    button: {
        primary: "#ff578f",
        font: "#000000",
        ripple: "transparent",
        border: {
            primary: "#757575",
        },
    },

    dialog: {
        background: "#1d1d1d",
        text: "#FFFFFF",
    },

    bottomNavigator: {
        backgroundColor: "#1d1d1d",
        activeColor: "#ffffff",
        inactiveColor: "#FFFFFF40",
    },

    card: {
        background: "#1d1d1d",
        shadowColor: "#ffffff",
    },

    shimmer: {
        container: "#757575",
        color: "#a4a4a4",
    },

    switch: {
        backgroundColor: "#1d1d1d",
    },

    carousel: {
        paginationDotColor: "#FFFFFF",
    },

    textInput: {
        placeholder: "#FFFFFF",
        color: "#FFFFFF",
        backgroundColor: "#1d1d1d",
        borderColor: "transparent",
    },
};
