import AsyncStorage from "@react-native-community/async-storage";
import { when, resetAllWhenMocks } from "jest-when";

import { StorageExceptionGateway } from "../../../../src/gateways/exceptions/storageExceptionGateway";
import * as StorageGateway from "../../../../src/gateways/storage/storageGateway";

describe("Tests of storageGateway", () => {
    beforeEach(() => {
        resetAllWhenMocks();
    });

    const key = "anyKey";
    const value = "anyValue";

    it("Test with put/success", async () => {
        const mockedAsyncStorage = jest.spyOn(AsyncStorage, "setItem");
        when(mockedAsyncStorage).calledWith(key, value).mockResolvedValue();

        await StorageGateway.put(key, value);

        expect(mockedAsyncStorage).toBeCalledWith(key, value);
    });

    it("Test with put/error", async () => {
        const mockedAsyncStorage = jest.spyOn(AsyncStorage, "setItem");
        when(mockedAsyncStorage).calledWith(key, value).mockRejectedValue(new Error());

        try {
            await StorageGateway.put(key, value);
        } catch (error) {
            expect(error).toBeInstanceOf(StorageExceptionGateway);
        }
    });

    it("Test with get/success", async () => {
        const mockedAsyncStorage = jest.spyOn(AsyncStorage, "getItem");
        when(mockedAsyncStorage).calledWith(key).mockResolvedValue(value);

        const valueResponse = await StorageGateway.get(key);

        expect(valueResponse).toEqual(value);
    });

    it("Test with get/error", async () => {
        const mockedAsyncStorage = jest.spyOn(AsyncStorage, "getItem");
        when(mockedAsyncStorage).calledWith(key).mockRejectedValue(new Error());
        try {
            await StorageGateway.get(key);
        } catch (error) {
            expect(error).toBeInstanceOf(StorageExceptionGateway);
        }
    });

    it("Test with remove/success", async () => {
        const mockedAsyncStorage = jest.spyOn(AsyncStorage, "removeItem");
        when(mockedAsyncStorage).calledWith(key).mockResolvedValue();

        await StorageGateway.remove(key);

        expect(mockedAsyncStorage).toHaveBeenCalledWith(key);
    });

    it("Test with remove/error", async () => {
        const mockedAsyncStorage = jest.spyOn(AsyncStorage, "removeItem");
        when(mockedAsyncStorage).calledWith(key).mockRejectedValue(new Error());
        try {
            await StorageGateway.remove(key);
        } catch (error) {
            expect(error).toBeInstanceOf(StorageExceptionGateway);
        }
    });
});
