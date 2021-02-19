import AsyncStorage from "@react-native-community/async-storage";

import { StorageExceptionGateway } from "../exceptions/storageExceptionGateway";

export const put = async (key: string, value: string): Promise<void> => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch {
        throw new StorageExceptionGateway();
    }
};

export const get = async (key: string): Promise<string | null> => {
    try {
        const data = await AsyncStorage.getItem(key);
        return data;
    } catch {
        throw new StorageExceptionGateway();
    }
};

export const remove = async (key: string): Promise<void> => {
    try {
        await AsyncStorage.removeItem(key);
    } catch {
        throw new StorageExceptionGateway();
    }
};
