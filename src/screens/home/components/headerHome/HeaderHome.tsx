import React, { useState } from "react";

import { useTheme } from "styled-components/native";

import { strings } from "src/utils/strings";

import { Container } from "./styles";

import { SearchTextField } from "./searchTextField/SearchTextField";

export const HeaderHome: React.FC = () => {
    const theme = useTheme();
    const [search, setSearch] = useState("");

    return (
        <Container>
            <SearchTextField
                selectionColor={theme.textInput.placeholder}
                placeholderTextColor={theme.textInput.placeholder}
                placeholder={strings.placeholder.search}
                onChangeText={setSearch}
                value={search}
            />
        </Container>
    );
};
