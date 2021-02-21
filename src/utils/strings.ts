import LocalizedStrings from "react-native-localization";

export const strings = new LocalizedStrings({
    "pt-BR": {
        locale: "pt-br",
        dialog: {
            attention: "Atenção",
        },

        title: {
            page: {},

            cardsListHome: {},
        },
        button: {
            tryAgain: "Tentar Novamente",
        },
        error: {
            dialog: "Ops, algo deu errado!",
            default: "Ocorreu um erro inesperado. Por favor tente novamente.",
            filmsNotFound: "Não foram encontrados títulos.",
        },

        bottomTabs: {
            home: "Início",
            planets: "Planetas",
            account: "Conta",
        },
    },

    en: {
        locale: "en",
        dialog: {
            attention: "Attention",
        },

        title: {
            page: {},

            cardsListHome: {},
        },

        button: {
            tryAgain: "Try Again",
        },

        error: {
            dialog: "Ops, Something went wrong!",
            default: "An unexpected error has occurred. Please try again.",
            filmsNotFound: "No titles were found.",
        },

        bottomTabs: {
            home: "Home",
            planets: "Planets",
            account: "Account",
        },
    },
});
