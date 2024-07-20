import { allGoods, filterStoreItems } from "../api";
import { UserAction } from "../types/storeTypes";

const initialState = {
    data: allGoods,
    filteredData: allGoods
}

export const  rootReducer = (state = initialState, action: UserAction) => {
    let newData;
    switch(action.type) {
        case 'store/filter':
            newData = [...state.data].filter(item => filterStoreItems(item, action.payload));
            state.filteredData = newData;
            return {...state};
        default:
            return state;
    }
}