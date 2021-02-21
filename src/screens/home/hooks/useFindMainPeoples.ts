import { useState, useEffect } from "react";

import useSWR from "swr";

import * as FindMainPeopleAnAddImageUrlUseCase from "src/useCases/findMainPeopleAnAddImageUrlUseCase";

import { People } from "src/domains/people";

import { properties } from "src/configurations/properties";

import { strings } from "src/utils/strings";

import { BaseException } from "src/globals/exceptions/baseException";

export interface UseFindMainPeoples {
    setToDefaultValueErrorMessageAndLoading: () => void;
    isLoading: boolean;
    errorMessage: string | undefined;
    data: Array<People> | undefined;
}

export function useFindMainPeoples(): UseFindMainPeoples {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>();

    const { data, error } = useSWR(`${properties.startWars.baseUrl}/peoples/`, async () => {
        return await FindMainPeopleAnAddImageUrlUseCase.find();
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
