import { DefaultTheme } from "styled-components/native";

export const light: DefaultTheme = {
    primary: "#107050",
    dark: "#004428",
    light: "#4a9f7c",
    ripple: "#757575",
    logo: "#107050",
    loading: "#FFFFFF",
    borderColor: "#000000",

    navigation: {
        bar: "#107050",
        title: "#FFFFFF",
        statusBar: "#004428",
    },

    page: {
        background: "#FFFFFF",
    },

    font: {
        primary: "#000000",
        secondary: "#757575",
        extra: "#FFFFFF",
        actions: "#107050",
        inverse: "#FFFFFF",
    },

    icon: {
        default: "#757575",
        extra: "#000000",
        inverse: "#EEEEEE",
    },

    button: {
        primary: "#107050",
        font: "#FFFFFF",
        ripple: "#757575",
        border: {
            primary: "#757575",
        },
    },

    dialog: {
        background: "#FFFFFF",
        text: "#000000",
    },

    bottomNavigator: {
        backgroundColor: "#107050",
        activeColor: "#ffffff",
        inactiveColor: "#aaaaaa",
    },

    card: {
        background: "#EEEEEE",
        shadowColor: "#757575",
    },

    shimmer: {
        container: "#EEEEEE",
        color: "#CCC",
    },

    switch: {
        backgroundColor: "#EEEEEE",
    },

    carousel: {
        paginationDotColor: "#000000",
    },

    textInput: {
        placeholder: "#757575",
        color: "#757575",
        backgroundColor: "#FFFFFF40",
        borderColor: "#757575",
    },
};
