import { StoreType, GoodCard } from "../types/storeTypes";

export function selectList(state : StoreType) : GoodCard[] {
    return state.data;
}