import React from "react";
import { StatusBar } from "react-native";

import { useTheme } from "styled-components/native";

import { strings } from "src/utils/strings";

import { Conditional } from "src/components/conditional/Conditional";
import { ErrorMessage } from "src/components/errorMessage/ErrorMessage";

import { Container } from "./styles";

import { Loading } from "./components/loading/Loading";
import { Planets } from "./components/planets/Planets";
import { useFindByPageNumber } from "./hooks/useFindByPageNumber";

export const ListPlanets: React.FC = () => {
    const theme = useTheme();

    const { data, errorMessage, isLoading, setToDefaultValueErrorMessageAndLoading } = useFindByPageNumber([]);

    return (
        <>
            <StatusBar backgroundColor={theme.navigation.statusBar} barStyle={"light-content"} />
            <Container>
                <Conditional when={isLoading}>
                    <Loading />
                </Conditional>

                <Conditional when={!!data && !isLoading}>
                    <Planets planets={data ? data : []} />
                </Conditional>

                <Conditional when={!!errorMessage && !data && !isLoading}>
                    <ErrorMessage
                        onPress={(): void => setToDefaultValueErrorMessageAndLoading()}
                        messageProps={{
                            icon: "cloud-alert",
                            message: errorMessage ? errorMessage : "",
                            buttonTitle: strings.button.tryAgain,
                        }}
                    />
                </Conditional>
            </Container>
        </>
    );
};
