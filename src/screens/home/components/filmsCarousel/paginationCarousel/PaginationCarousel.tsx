import React from "react";

import { PaginationContainer } from "./styles";

interface PaginationProps {
    activeDotIndex: number;
    dotsLength: number;
}

export const PaginationCarousel: React.FC<PaginationProps> = (paginationProps) => {
    const { activeDotIndex, dotsLength } = paginationProps;

    return <PaginationContainer dotsLength={dotsLength} activeDotIndex={activeDotIndex} />;
};
