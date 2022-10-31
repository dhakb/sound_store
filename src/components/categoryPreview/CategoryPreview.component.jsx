import {useNavigate} from "react-router-dom";

import ProductCard from "../productCard/ProductCard.component";

import "./CategoryPreview.styles.scss"


const CategoryPreview = ({products, title}) => {
    const navigate = useNavigate()
    return (
        <div className="category-preview-container">
            <h2 className="title-container">
                 <span className="title" onClick={() => navigate(title)}>
                    {title}
                 </span>
                <hr/>
            </h2>
            <div className="preview">
                {
                    products
                        .filter((_, i) => i < 4)
                        .map((product) => (
                            <ProductCard key={product.id} product={product}/>
                        ))
                }
            </div>
        </div>
    )
}


export default CategoryPreview