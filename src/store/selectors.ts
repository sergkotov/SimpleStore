import { StoreType, GoodCard } from "../types/storeTypes";

export function selectList(state: StoreType) : GoodCard[] {
    return state.data;
}

export function selectProduct(state: StoreType, id: string) : GoodCard | undefined {
    return  state.data.find(item => item.id === id);
}

export function selectFilteredList(state: StoreType) : GoodCard[] {
    return state.filteredData;
}