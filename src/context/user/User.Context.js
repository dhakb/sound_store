import {createContext, useReducer, useEffect} from "react";
import {userReducer} from "./User.reducer";
import {onAuthStateChangedListener, createUserDocFromAuth} from "../../utils/firebase/firebase.utils";
import {USER_ACTION_TYPES} from "./User.ActionTypes";


export const UserContext = createContext({
    currentUser: null
})


const INITIAL_VALUE = {
    user: null
}

const UserContextProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_VALUE)

    const setCurrentUserAction = (user) => {
        dispatch({type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user})
    }


    useEffect(() => {
        onAuthStateChangedListener(async (user) => {
            if(user) {
                await createUserDocFromAuth(user)
            }
            setCurrentUserAction(user)
        })
    }, [])

    const value = {currentUser}

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


export default UserContextProvider