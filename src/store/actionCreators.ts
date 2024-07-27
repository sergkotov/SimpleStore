import { CartProductType, UserAction } from "../types/storeTypes";

export function setFilter(from: number, to: number, newCheck = true, saleCheck = true) : UserAction {
    return {type: 'store/filter', payload: {priceFrom: from, priceTo: to, new: newCheck, sale: saleCheck}};
}

export function addNewProductToCart(item: CartProductType) {
    return {type: 'cart/add', payload: {...item}};
}

export function removeProductFromCart(item: CartProductType) {
    return {type: 'cart/remove', payload: {...item}};
}