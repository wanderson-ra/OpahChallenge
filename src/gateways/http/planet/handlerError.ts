import { AxiosError } from "axios";

import { DefaultRestGatewayException } from "src/gateways/exceptions/defaultGatewayException";

import { strings } from "src/utils/strings";

import { BaseException } from "src/globals/exceptions/baseException";

import { PlanetNotFoundGatewayException } from "../../exceptions/planetNotFoundGatewayException";

export const handlerError = (axiosError: AxiosError): BaseException => {
    if (axiosError?.response?.status === 404) {
        throw new PlanetNotFoundGatewayException(strings.error.peoplesNotFound);
    }
    throw new DefaultRestGatewayException();
};
