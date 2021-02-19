import * as StorageGateway from "src/gateways/storage/storageGateway";

export const get = async (key: string): Promise<string | null> => {
    return await StorageGateway.get(key);
};
