import {useContext} from "react";
import {CategoriesContext} from "../../context/Categories/Categories.context";
import Directory from "../../components/directory/Directory.component";


import "./Home.styles.scss"

const Home = () => {
    const {categoryTypes} = useContext(CategoriesContext)


    return (
        <div className="container">
            <h1 className="title-header">Sound Store</h1>
            <Directory categories={categoryTypes}>Home Page</Directory>
        </div>
    )
}


export default Home