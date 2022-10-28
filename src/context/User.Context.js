import {createContext, useReducer, useEffect} from "react";

import {onAuthStateChangedListener, createUserDocFromAuth} from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null
})

const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER"
}


const userReducer = (state, action) => {
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


const INITIAL_VALUE = {
    user: null
}

const UserContextProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_VALUE)

    const setCurrentUserAction = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }

    const value = {currentUser}

    useEffect(() => {
        onAuthStateChangedListener(async (user) => {
            if(user) {
                await createUserDocFromAuth(user)
            }
            setCurrentUserAction(user)
        })
    }, [])


    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


export default UserContextProvider