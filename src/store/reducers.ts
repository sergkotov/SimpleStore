import { allGoods, filterStoreItems } from "../api";
import { StoreType, UserAction } from "../types/storeTypes";

const initialState = {
    data: allGoods
}

export const  rootReducer = (state = initialState, action : UserAction) => {
    let newData : StoreType = {data: []};
    switch(action.type) {
        case 'filter':
            newData.data = state.data.filter(item => filterStoreItems(item, action.payload));
            return newData;
        default:
            return state;
    }
}