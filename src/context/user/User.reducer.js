import {USER_ACTION_TYPES} from "./User.ActionTypes";

export const userReducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type of ${type} in userReducer`)
    }
}
