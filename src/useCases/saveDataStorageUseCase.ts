import { put } from "src/gateways/storage/storageGateway";

export const save = async (key: string, value: string): Promise<void> => {
    await put(key, value);
};
