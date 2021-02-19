import { AxiosError } from "axios";

import { DefaultRestGatewayException } from "src/gateways/exceptions/defaultGatewayException";
import { FilmNotFoundGatewayException } from "src/gateways/exceptions/filmNotFoundGatewayException";

import { BaseException } from "src/globals/exceptions/baseException";

export const handlerSpecialityError = (axiosError: AxiosError): BaseException => {
    if (axiosError?.response?.status === 404) {
        throw new FilmNotFoundGatewayException();
    }
    throw new DefaultRestGatewayException();
};
