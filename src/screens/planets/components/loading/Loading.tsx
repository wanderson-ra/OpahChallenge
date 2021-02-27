import React from "react";

import { Container, LoadingItem, ContainerLoadingItems, LoadingSearch, ContainerLSearch } from "./styles";

export const Loading: React.FC = () => {
    return (
        <Container>
            <ContainerLoadingItems showsVerticalScrollIndicator={false}>
                <ContainerLSearch>
                    <LoadingSearch />
                </ContainerLSearch>
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
            </ContainerLoadingItems>
        </Container>
    );
};
