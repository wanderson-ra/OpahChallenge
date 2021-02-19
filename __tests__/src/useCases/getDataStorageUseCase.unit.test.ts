import { when, resetAllWhenMocks } from "jest-when";

import * as StorageGateway from "../../../src/gateways/storage/storageGateway";

import * as GetDataStorageUseCase from "../../../src/useCases/getDataStorageUseCase";

describe("Tests of GetDataStorageUseCase", () => {
    beforeAll(() => {
        resetAllWhenMocks();
    });

    it("Test with success string data", async () => {
        const valueString = "anyValueString";
        const key = "anyKey";

        const mockedStorageGateway = jest.spyOn(StorageGateway, "get");
        when(mockedStorageGateway).calledWith(key).mockResolvedValue(valueString);

        const dataResponse = await GetDataStorageUseCase.get(key);

        expect(dataResponse).toEqual(valueString);
        expect(mockedStorageGateway).toBeCalledWith(key);
    });
});
