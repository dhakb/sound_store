import {createContext, useEffect, useReducer} from "react";
import {CATEGORIES_ACTION_TYPES} from "./Categories.actionTypes";
import {categoriesReducer} from "./Categories.reducer";
import {getCategoriesAndDocuments} from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {}
})




const INITIAL_STATE = {
    categoriesMap: {}
}

const CategoriesContextProvider = ({children}) => {
    const [{categoriesMap}, dispatch] = useReducer(categoriesReducer, INITIAL_STATE)


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