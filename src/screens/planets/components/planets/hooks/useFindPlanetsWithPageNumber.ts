import { useState } from "react";

import { PlanetNotFoundGatewayException } from "src/gateways/exceptions/planetNotFoundGatewayException";

import * as FindPlanetsByPageNumberUseCase from "src/useCases/findPlanetsByPageNumberUseCase";

import { Planet } from "src/domains/planet";

import { BaseException } from "src/globals/exceptions/baseException";

export interface UseFindByPlantsWithPageNumberProps {
    isLoading: boolean;
    planets: Array<Planet> | undefined;
    findByPlanetsWithPageNumber: (planetsAlreadyFinded: Array<Planet>, pageNumber: number) => void;
}

export function useFindByPlanetsWithPageNumber(): UseFindByPlantsWithPageNumberProps {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [planets, setPlanets] = useState<Array<Planet>>();
    const [isNotFoundError, setIsNotFoundError] = useState(false);

    const handlerError = (error: BaseException): void => {
        if (error instanceof PlanetNotFoundGatewayException) {
            setIsNotFoundError(true);
        }
    };

    const findByPlanetsWithPageNumber = async (
        planetsAlreadyFinded: Array<Planet>,
        pageNumber: number
    ): Promise<void> => {
        try {
            if (!isNotFoundError) {
                setIsLoading(true);
                const planetsResponse = await FindPlanetsByPageNumberUseCase.find(pageNumber);
                setPlanets([...planetsAlreadyFinded, ...planetsResponse]);
            }
        } catch (error) {
            handlerError(error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        findByPlanetsWithPageNumber,
        isLoading,
        planets,
    };
}
