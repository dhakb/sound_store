import {Route, Routes} from "react-router-dom";

import Navigation from "./routes/navigationBar/NavigationBar.component"
import Home from "./routes/home/Home.component";
import Shop from "./routes/shop/Shop.component"

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="shop/*" element={<Shop />} />
            </Route>
        </Routes>
    );
}

export default App;
