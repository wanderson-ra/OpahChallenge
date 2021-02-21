import "styled-components/native";

interface PageTheme {
    background: string;
}

interface DialogTheme {
    background: string;
    text: string;
}

interface Navigation {
    bar: string;
    title: string;
    statusBar: string;
}

interface IconTheme {
    default: string;
    extra: string;
    inverse: string;
}

interface FontTheme {
    primary: string;
    secondary: string;
    extra: string;
    actions: string;
    inverse: string;
}

interface BorderButtonTheme {
    primary: string;
}

interface ButtonTheme {
    primary: string;
    font: string;
    ripple: string;
    border: BorderButtonTheme;
}

interface Container {
    default: string;
    ripple: string;
    success: string;
    error: string;
    shimmerContainer: string;
    shimmer: string;
    inverse: string;
}

interface ErrorTheme {
    container: string;
    text: string;
}

interface LoadingTheme {
    color: string;
}

interface DialogTheme {
    background: string;
    text: string;
}

interface BottomNavigatorTheme {
    backgroundColor: string;
    inactiveColor: string;
    activeColor: string;
}

interface CardTheme {
    background: string;
    shadowColor: string;
}

interface ShimmerTheme {
    container: string;
    color: string;
}

interface SwitchTheme {
    backgroundColor: string;
    color: string;
}

interface CarouselTheme {
    paginationDotColor: string;
}

interface TextInputTheme {
    placeholder: string;
    color: string;
    backgroundColor: string;
    borderColor: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        primary: string;
        light: string;
        dark: string;
        ripple: string;
        logo: string;
        loading: string;
        borderColor: string;

        navigation: Navigation;

        dialog: DialogTheme;

        page: PageTheme;

        font: FontTheme;

        icon: IconTheme;

        button: ButtonTheme;

        bottomNavigator: BottomNavigatorTheme;

        card: CardTheme;

        shimmer: ShimmerTheme;

        switch: SwitchTheme;

        carousel: CarouselTheme;

        textInput: TextInputTheme;
    }
}
