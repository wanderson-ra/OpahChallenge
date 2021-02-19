import { when, resetAllWhenMocks } from "jest-when";

import * as StorageGateway from "../../../src/gateways/storage/storageGateway";

import * as SaveDataStorageUseCase from "../../../src/useCases/saveDataStorageUseCase";

describe("Tests of saveDataStorageUseCase", () => {
    beforeAll(() => {
        resetAllWhenMocks();
    });

    it("Test with success string data", async () => {
        const valueString = "anyValueString";
        const key = "anyKey";

        const mockedStorageGateway = jest.spyOn(StorageGateway, "put");
        when(mockedStorageGateway).calledWith(key, valueString).mockResolvedValue();

        await SaveDataStorageUseCase.save(key, valueString);

        expect(mockedStorageGateway).toBeCalledWith(key, valueString);
    });
});
