import { AxiosError } from "axios";

import { DefaultRestGatewayException } from "src/gateways/exceptions/defaultGatewayException";

import { strings } from "src/utils/strings";

import { BaseException } from "src/globals/exceptions/baseException";

import { PeopleNotFoundGatewayException } from "../../exceptions/peopleNotFoundGatewayException";

export const handlerSpecialityError = (axiosError: AxiosError): BaseException => {
    if (axiosError?.response?.status === 404) {
        throw new PeopleNotFoundGatewayException(strings.error.filmsNotFound);
    }
    throw new DefaultRestGatewayException();
};
