import { StoreType, GoodCard, CartProductType } from "../types/storeTypes";

export function selectList(state: StoreType) : GoodCard[] {
    return state.data;
}

export function selectProduct(state: StoreType, id: string) : GoodCard | undefined {
    return  state.data.find(item => item.id === id);
}

export function selectFilteredList(state: StoreType) : GoodCard[] {
    return state.filteredData;
}

export function getCartList(state: StoreType) : CartProductType[] {
    return state.cart;
}