import {Fragment, useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {CategoriesContext} from "../../context/Categories.context";

import "./Category.styles.scss"
import ProductCard from "../../components/productCard/ProductCard.component";

const Category = () => {
    const [products, setProducts] = useState([])
    const categoriesMap = useContext(CategoriesContext)
    const {category} = useParams()

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2>{category.toUpperCase()}</h2>
            <div className="category-container">
                {
                    products?.map((product) => (
                        <ProductCard product={product} key={product.id}/>
                    ))
                }
            </div>
        </Fragment>
    )
}


export default Category
