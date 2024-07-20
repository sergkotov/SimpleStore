import { UserAction } from "../types/storeTypes";

export function setFilter(from: number, to: number, newCheck = true, saleCheck = true) : UserAction {
    return {type: 'store/filter', payload: {priceFrom: from, priceTo: to, new: newCheck, sale: saleCheck}};
}