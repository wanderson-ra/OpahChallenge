import { DefaultTheme } from "styled-components/native";

export const light: DefaultTheme = {
    primary: "#880e4f",
    dark: "#560027",
    light: "#bc477b",
    ripple: "#757575",
    logo: "#880e4f",
    loading: "#FFFFFF",
    borderColor: "#000000",

    navigation: {
        bar: "#880e4f",
        title: "#FFFFFF",
        statusBar: "#560027",
    },

    page: {
        background: "#FFFFFF",
    },

    font: {
        primary: "#000000",
        secondary: "#757575",
        extra: "#FFFFFF",
        actions: "#880e4f",
        inverse: "#FFFFFF",
    },

    icon: {
        default: "#757575",
        extra: "#000000",
        inverse: "#EEEEEE",
    },

    button: {
        primary: "#880e4f",
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
        backgroundColor: "#880e4f",
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
