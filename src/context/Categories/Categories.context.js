import {createContext, useEffect, useReducer} from "react";
import {CATEGORIES_ACTION_TYPES} from "./Categories.actionTypes";
import {categoriesReducer} from "./Categories.reducer";
import {getCategoriesAndDocuments, getCategoryTypesAndDocuments} from "../../utils/firebase/firebase.utils";

export const CategoriesContext = createContext({
    categoriesMap: {},
    categoryTypes: []
})


const INITIAL_STATE = {
    categoriesMap: {},
    categoryTypes: []
}

const CategoriesContextProvider = ({children}) => {
    const [{categoriesMap, categoryTypes}, dispatch] = useReducer(categoriesReducer, INITIAL_STATE)


    const setCategoriesMap = (categoriesMap) => {
        dispatch({type: CATEGORIES_ACTION_TYPES.GET_CATEGORIES, payload: categoriesMap})
    }

    const setCategoryTypes = (categoryTypesArray) => {
        dispatch({type: CATEGORIES_ACTION_TYPES.GET_CATEGORY_TYPES, payload: categoryTypesArray})
    }

    useEffect(() => {
        const getCategories = async () => {
            const categoriesMap = await getCategoriesAndDocuments()
            setCategoriesMap(categoriesMap)
        }


        const getCategoryTypes = async () => {
            const categoryTypes = await getCategoryTypesAndDocuments()
            setCategoryTypes(categoryTypes)
        }

        getCategories()
        getCategoryTypes()
    }, [])


    const value = {
        categoriesMap,
        categoryTypes
    }


    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}


export default CategoriesContextProvider