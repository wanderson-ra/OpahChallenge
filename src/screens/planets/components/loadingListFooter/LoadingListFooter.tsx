import React from "react";
import { ActivityIndicator } from "react-native";

import { useTheme } from "styled-components/native";

import { Conditional } from "src/components/conditional/Conditional";

interface LoadingListFooterProps {
    isLoading: boolean;
}

export const LoadingListFooter: React.FC<LoadingListFooterProps> = (loadingListFooterProps) => {
    const { isLoading } = loadingListFooterProps;

    const theme = useTheme();

    return (
        <Conditional when={isLoading}>
            <ActivityIndicator color={theme.primary} />
        </Conditional>
    );
};
