import axios from "axios";
import config from "../config";
import { useCallback } from "react";

const { cookoffApiUrl } = config;

interface UseDataServiceOutput {
    destroy: (request: DestroyRequest) => Promise<unknown>;
    insert: (request: InsertRequest) => Promise<unknown>;
    update: (request: UpdateRequest) => Promise<unknown>;
    query: <T = unknown>(request: QueryRequest) => Promise<T[]>;
    sproc: <T = unknown>(request: SprocRequest) => Promise<T[]>;
}

const _axios = axios.create({
    baseURL: cookoffApiUrl
});

const useDataService = (): UseDataServiceOutput => {
    const destroy = useCallback(async (request: DestroyRequest): Promise<unknown> => {
        const { data } = await _axios.post("/destroy", request);
        return data;
    }, []);

    const insert = useCallback(async (request: InsertRequest): Promise<unknown> => {
        const { data } = await _axios.post("/insert", request);
        return data;
    }, []);

    const query = useCallback(async <T = unknown>(request: QueryRequest): Promise<T[]> => {
        const { data } = await _axios.post<T[]>("/query", request);
        return data;
    }, []);

    const update = useCallback(async (request: UpdateRequest): Promise<unknown> => {
        const { data } = await _axios.post("/update", request);
        return data;
    }, []);

    const sproc = useCallback(async <T = unknown>(request: SprocRequest): Promise<T[]> => {
        const { data } = await _axios.post("/sproc", request);
        return data;
    }, []);

    return {
        destroy,
        insert,
        query,
        update,
        sproc
    };
};

export default useDataService;

export interface DestroyRequest {
    table: string;
    where: number[] | { [key: string]: unknown };
}

export interface InsertRequest {
    table: string;
    values: { [key: string]: unknown } | { [key: string]: unknown }[];
}

export interface QueryRequest {
    table: string;
    where?: { [key: string]: unknown };
    skip?: number;
    take?: number;
    select?: string[];
    relations?: string[];
    order?: {
        [key: string]: "ASC" | "DESC";
    };
}

export interface UpdateRequest {
    table: string;
    where: { [key: string]: unknown };
    values: { [key: string]: unknown };
}

export interface SprocRequest {
    objectName: string;
    parameters?: {
        [key: string]: number | string | null;
    };
}
