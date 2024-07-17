import { allGoods } from "../api";
import { UserAction } from "../types/storeTypes";

const initialState = {
    data: allGoods
}

export const  rootReducer = (state = initialState, action : UserAction) => {
    switch(action.type) {
        default:
            return state
    }
}