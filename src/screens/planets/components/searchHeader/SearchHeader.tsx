import React, { useState } from "react";
import { widthPercentageToDP as width } from "react-native-responsive-screen";

import { useTheme } from "styled-components/native";

import { strings } from "src/utils/strings";

import { SearchTextField } from "src/components/searchTextField/SearchTextField";

import { Container } from "./styles";

export const SearchHeader: React.FC = () => {
    const theme = useTheme();

    const [search, setSearch] = useState("");

    return (
        <Container>
            <SearchTextField
                containerStyle={{ width: width(90) }}
                selectionColor={theme.textInput.placeholder}
                placeholderTextColor={theme.textInput.placeholder}
                placeholder={strings.placeholder.search}
                onChangeText={setSearch}
                value={search}
            />
        </Container>
    );
};
