import axios, { AxiosInstance, AxiosResponse } from "axios";

const getAxiosInstance = (baseURL: string): AxiosInstance => {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: baseURL,
        timeout: 30000,
        headers: {
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Accept: "application/json",
            },
        },
    });
    return axiosInstance;
};

export const get = async <GenericResponse>(baseUrl: string, url: string): Promise<AxiosResponse<GenericResponse>> => {
    const response: AxiosResponse<GenericResponse> = await getAxiosInstance(baseUrl).get(url);

    return response;
};
