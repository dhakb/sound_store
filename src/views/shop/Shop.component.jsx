import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categoriesPreview/CategoriesPreview.component";
import Category from "../category/Category.components";


const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
