import { Routes, Route } from "react-router-dom";

import CategoryPreview from "../../components/categoryPreview/CategoryPreview.component";
import Category from "../category/Category.components";

// import "./Shop.styles.scss";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoryPreview />} />
            <Route path=":category" element={<Category />} />
        </Routes>
    );
};

export default Shop;
