import React from "react";

import { Container, LoadingItem, ContainerLoadingItems } from "./styles";

export const Loading: React.FC = () => {
    return (
        <Container>
            <ContainerLoadingItems showsVerticalScrollIndicator={false}>
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
