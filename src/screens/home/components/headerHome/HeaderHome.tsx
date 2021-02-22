import React, { useState } from "react";

import { useTheme } from "styled-components/native";

import { strings } from "src/utils/strings";

import { SearchTextField } from "src/components/searchTextField/SearchTextField";

import { Container } from "./styles";

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
