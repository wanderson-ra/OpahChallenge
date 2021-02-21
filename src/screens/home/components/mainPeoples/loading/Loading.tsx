import React from "react";

import { Container, LoadingItem, ContainerLoadingItems, LoadingTitle } from "./styles";

export const Loading: React.FC = () => {
    return (
        <Container>
            <LoadingTitle />
            <ContainerLoadingItems>
                <LoadingItem />
                <LoadingItem />
                <LoadingItem />
            </ContainerLoadingItems>
        </Container>
    );
};
