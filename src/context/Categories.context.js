import SHOP_DATA from "../dataSet";
import {createContext, useEffect, useReducer} from "react";


export const CategoriesContext = createContext({
    categoriesMap: {}
})

const categoriesReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case "GET_CATEGORIES" :
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
    const [state, dispatch] = useReducer(categoriesReducer, initialState)
    const {categoriesMap} = state

    console.log(categoriesMap)

    const setCategoriesMap = (categoriesArray) => {
        dispatch({type: "GET_CATEGORIES", payload: categoriesArray})
    }

    useEffect(() => {
        setCategoriesMap(SHOP_DATA.reduce((acc, curr) => {
            const title = curr.title.toLowerCase()
            return {
                ...acc,
                [title]: curr.items
            }
        }, {}))
    }, [])


    return <CategoriesContext.Provider value={categoriesMap}>{children}</CategoriesContext.Provider>
}


export default CategoriesContextProvider