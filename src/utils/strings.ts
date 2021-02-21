import LocalizedStrings from "react-native-localization";

export const strings = new LocalizedStrings({
    "pt-BR": {
        locale: "pt-br",
        dialog: {
            attention: "Atenção",
        },

        title: {
            page: {},

            cardsListHome: {
                mainPeople: "Principais Personages",
            },
        },
        button: {
            tryAgain: "Tentar Novamente",
            touchToReload: "Toque para recarregar",
        },
        error: {
            dialog: "Ops, algo deu errado!",
            default: "Ocorreu um erro inesperado. Por favor tente novamente.",
            filmsNotFound: "Não foram encontrados títulos.",
            peoplesNotFound: "Não foram encontrados personagens.",
        },

        bottomTabs: {
            home: "Início",
            planets: "Planetas",
            account: "Conta",
        },

        placeholder: {
            search: "Pesquisar",
        },
    },

    en: {
        locale: "en",
        dialog: {
            attention: "Attention",
        },

        title: {
            page: {},

            cardsListHome: {
                mainPeople: "Main Characters",
            },
        },

        button: {
            tryAgain: "Try Again",
            touchToReload: "Touch to reload",
        },

        error: {
            dialog: "Ops, Something went wrong!",
            default: "An unexpected error has occurred. Please try again.",
            filmsNotFound: "No titles were found.",
            peoplesNotFound: "No characters where found.",
        },

        bottomTabs: {
            home: "Home",
            planets: "Planets",
            account: "Account",
        },

        placeholder: {
            search: "Search",
        },
    },
});
