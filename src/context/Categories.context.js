import {createContext, useEffect, useReducer} from "react";
import {getCategoriesAndDocuments} from "../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
})


const CATEGORIES_ACTION_TYPES = {
    GET_CATEGORIES: "GET_CATEGORIES"
}

const categoriesReducer = (state, action) => {
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

const initialState = {
    categoriesMap: {}
}

const CategoriesContextProvider = ({children}) => {
    const [{categoriesMap}, dispatch] = useReducer(categoriesReducer, initialState)


    const setCategoriesMap = (categoriesMap) => {
        dispatch({type: CATEGORIES_ACTION_TYPES.GET_CATEGORIES, payload: categoriesMap})
    }

    useEffect(() => {
        const getCategories = async () => {
            const categoriesMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoriesMap)
        }

        getCategories()
    }, [])


    return <CategoriesContext.Provider value={categoriesMap}>{children}</CategoriesContext.Provider>
}


export default CategoriesContextProvider