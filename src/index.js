import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import UserContextProvider from "./context/user/User.Context";
import CategoriesContextProvider from "./context/Categories/Categories.context";
import CartContextProvider from "./context/cart/Cart.context";

import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <CategoriesContextProvider>
                    <CartContextProvider>
                        <App/>
                    </CartContextProvider>
                </CategoriesContextProvider>
            </UserContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);

