import { useState, useEffect } from "react";

import useSWR from "swr";

import * as findAllFilmsAndAddImageUrlUseCase from "src/useCases/findAllFilmsAndAddImageUrlUseCase";

import { Film } from "src/domains/films";

import { properties } from "src/configurations/properties";

import { strings } from "src/utils/strings";

import { BaseException } from "src/globals/exceptions/baseException";

export interface UseFindAllFilmsProps {
    setToDefaultValueErrorMessageAndLoading: () => void;
    isLoading: boolean;
    errorMessage: string | undefined;
    data: Array<Film> | undefined;
}

export function useFindAllFilms(): UseFindAllFilmsProps {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>();

    const { data, error } = useSWR(`${properties.startWars.baseUrl}/films/`, async () => {
        return await findAllFilmsAndAddImageUrlUseCase.findAll();
    });

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

    return { isLoading, errorMessage, setToDefaultValueErrorMessageAndLoading, data };
}
