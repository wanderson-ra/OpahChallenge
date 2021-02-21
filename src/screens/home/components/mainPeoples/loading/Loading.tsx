import React from "react";

import { Container, LoadingItem, ContainerLoadingItems, LoadingTitle } from "./styles";

export const Loading: React.FC = () => {
    return (
        <Container>
            <LoadingTitle />
            <ContainerLoadingItems showsHorizontalScrollIndicator={false}>
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
            </ContainerLoadingItems>
        </Container>
    );
};
