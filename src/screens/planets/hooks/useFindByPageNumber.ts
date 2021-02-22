import { useState, useEffect } from "react";

import useSWR from "swr";

import * as FindPlanetsByPageNumberUseCase from "src/useCases/findPlanetsByPageNumberUseCase";

import { Planet } from "src/domains/planet";

import { properties } from "src/configurations/properties";

import { strings } from "src/utils/strings";

import { BaseException } from "src/globals/exceptions/baseException";

export interface UseFindByPageNumberProps {
    setToDefaultValueErrorMessageAndLoading: () => void;
    isLoading: boolean;
    errorMessage: string | undefined;
    data: Array<Planet>;
}

export function useFindByPageNumber(
    planetsAlreadyFinded: Array<Planet>,
    pageNumber?: number
): UseFindByPageNumberProps {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>();

    const { data, error } = useSWR(
        `${properties.startWars.baseUrl}/planets/${pageNumber ? pageNumber : ""}`,
        async () => {
            return await FindPlanetsByPageNumberUseCase.find(pageNumber);
        }
    );

    const setToDefaultValueErrorMessageAndLoading = (): void => {
        setErrorMessage(undefined);
        setIsLoading(true);
    };

    const handlerError = (error: BaseException): void => {
        if (error.message) {
            setErrorMessage(error.message);
        } else {
            setErrorMessage(strings.error.default);
        }
    };

    useEffect(() => {
        if (error) {
            handlerError(error);
            setIsLoading(false);
        }
    }, [error]);

    useEffect(() => {
        if (data) {
            setIsLoading(false);
        }
    }, [data]);

    return {
        isLoading,
        errorMessage,
        setToDefaultValueErrorMessageAndLoading,
        data: data ? [...planetsAlreadyFinded, ...data] : planetsAlreadyFinded,
    };
}
