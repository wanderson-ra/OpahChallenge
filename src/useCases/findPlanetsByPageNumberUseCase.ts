import { findByPageNumber } from "src/gateways/http/planet/planetGateway";

import { Planet } from "src/domains/planet";

export const find = async (pageNumber?: number): Promise<Array<Planet>> => {
    return await findByPageNumber(pageNumber);
};
