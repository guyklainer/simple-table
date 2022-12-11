import { atom } from "recoil";

export interface Entity {
    name: string,
    symbol: string,
    tvl: number,
    logo: string,
    category: string
}

export interface Structure {
    pageSize: number,
    currentPage: number,
    orderBy: keyof Entity,
    orderDirection: 'DESC' | 'ASC'
}

export const dataState = atom<Entity[]>({
    key: 'dataState',
    default: [],
});

export const searchState = atom<string>({
    key: 'searchState',
    default: "",
});

export const structureState = atom<Structure>({
    key: 'structureState',
    default: {
        pageSize: 10,
        currentPage: 0,
        orderBy: 'tvl',
        orderDirection: 'DESC'
    },
});