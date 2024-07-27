import { StoreType } from './../types/storeTypes';
import { allGoods, filterStoreItems, isCartProductType, isFilterDetailsType } from "../api";
import { UserAction } from "../types/storeTypes";

const initialState : StoreType = {
    data: allGoods,
    filteredData: allGoods,
    cart : []
}

export const rootReducer = (state = initialState, action: UserAction) => {
    let newData;
    switch(action.type) {
        case 'store/filter':
            newData = [...state.data].filter(item => filterStoreItems(item, isFilterDetailsType(action.payload)));
            state.filteredData = newData;
            return {...state};
        case 'cart/add':
            const currAction = isCartProductType(action.payload);
            const matched = state.cart.findIndex(item => item.product.id === currAction.product.id)
            if(matched > -1) {
                if(currAction.num === -1) {
                    if(state.cart[matched].num > 1) {
                        state.cart[matched].num -= 1;
                    } else {
                        state.cart[matched].num = 1;
                    }
                } else {
                    state.cart[matched].num += 1; 
                }
            } else {
                state.cart.push(isCartProductType(action.payload));
            }
            return state;
        case 'cart/remove':
            newData = [...state.cart].filter((item) => {
                return item.product.id !== isCartProductType(action.payload).product.id;
            });
            state.cart = newData;
            return state;
        default:
            return state;
    }
}