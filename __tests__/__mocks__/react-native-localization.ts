import LocalizedStringsCore, { GlobalStrings } from "react-localization";

export function getInterfaceLanguage(): string {
    return "pt-BR";
}

interface Props {
    getInterfaceLanguage: () => string;
}

export default class LocalizedStrings extends LocalizedStringsCore<GlobalStrings<Props>> {
    constructor(props: GlobalStrings<GlobalStrings<Props>>) {
        super(props);
    }
}
