import {useContext} from "react";

import {CategoriesContext} from "../../context/Categories.context";

import CategoryPreview from "../../components/categoryPreview/CategoryPreview.component";

const CategoriesPreview = () => {
    const categoriesMap = useContext(CategoriesContext)

    return (<div>
        {
            Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title]
                return <CategoryPreview products={products} key={title} title={title}/>
            })
        }
    </div>)
}

export default CategoriesPreview
