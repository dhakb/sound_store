import {CATEGORIES_ACTION_TYPES} from "./Categories.actionTypes";

export const categoriesReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case CATEGORIES_ACTION_TYPES.GET_CATEGORIES :
            return {
                ...state,
                categoriesMap: payload
            }
        default:
            throw new Error(`Unhandled type ${type} caught in categories reduce`)
    }
}