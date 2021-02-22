import React from "react";
import Animated from "react-native-reanimated";
import { widthPercentageToDP as width } from "react-native-responsive-screen";

import { useTheme } from "styled-components/native";

import { metrics } from "src/configurations/metrics";

import { strings } from "src/utils/strings";

import { SearchTextField } from "src/components/searchTextField/SearchTextField";

import { AnimatedContainer } from "./styles";

interface SearchProps {
    scrollY: Animated.Node<number>;
    setSearch: (text: string) => void;
    search: string;
}

const SEARCH_HEIGHT = metrics.searchContainerHeight;

const { interpolate, Extrapolate } = Animated;

export const Search: React.FC<SearchProps> = (searchProps) => {
    const theme = useTheme();

    const { scrollY, setSearch, search } = searchProps;

    const height = interpolate(scrollY, {
        inputRange: [-10, -5, 0],
        outputRange: [SEARCH_HEIGHT + 10, SEARCH_HEIGHT + 5, SEARCH_HEIGHT],
        extrapolateRight: Extrapolate.CLAMP,
    });

    const top = interpolate(scrollY, {
        inputRange: [0, 5, 10],
        outputRange: [0, -5, -10],
        extrapolateLeft: Extrapolate.CLAMP,
    });

    const opacity = interpolate(scrollY, {
        inputRange: [0, SEARCH_HEIGHT / 4, SEARCH_HEIGHT / 2, SEARCH_HEIGHT],
        outputRange: [1, 0.8, 0.6, 0],
        extrapolateLeft: Extrapolate.CLAMP,
    });

    return (
        <AnimatedContainer style={{ opacity: opacity, top, height }}>
            <SearchTextField
                selectionColor={theme.textInput.placeholder}
                placeholderTextColor={theme.textInput.placeholder}
                containerStyle={{ width: width(90) }}
                placeholder={strings.placeholder.search}
                value={search}
                onChangeText={setSearch}
            />
        </AnimatedContainer>
    );
};
