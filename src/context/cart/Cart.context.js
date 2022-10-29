import {createContext, useReducer} from "react";
import {CART_ACTION_TYPES} from "./Cart.actionTypes";
import {cartContextReducer} from "./Cart.reducer";

export const CartContext = createContext({
    cartProducts: [],
    cartItemsQty: 0,
    isCartOpened: false,
    totalPrice: 0,
    toggleCartDropDown: () => {
    },
    addItemToCart: () => {
    },
    removeItemFromCart: () => {
    },
    destroyItemFromCart: () => {
    },
    getTotalPrice: () => {
    },
    getCartItemsQty: () => {
    }
})




const INITIAL_STATE = {
    cartProducts: [],
    cartItemsQty: 0,
    totalPrice: 0
}


const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartContextReducer, INITIAL_STATE)
    const {cartProducts, cartItemsQty, isCartOpened, totalPrice} = state


    const addItemToCart = (itemToAdd) => {
        dispatch({type: CART_ACTION_TYPES.ADD_TO_CART, payload: {itemToAdd}})
    }

    const removeItemFromCart = (itemToRemove) => {
        dispatch({type: CART_ACTION_TYPES.REMOVE_FROM_CART, payload: {itemToRemove}})
    }

    const destroyItemFromCart = (itemToDestroy) => {
        dispatch({type: CART_ACTION_TYPES.DESTROY_ITEM_FROM_CART, payload: {itemToDestroy}})
    }

    const getTotalPrice = () => {
        dispatch({type: CART_ACTION_TYPES.GET_TOTAL_PRICE})
    }

    const getCartItemsQty = () => {
        dispatch({type: CART_ACTION_TYPES.GET_CART_ITEMS_QTY})
    }

    const toggleCartDropDown = () => {
        dispatch({type: CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN})
    }


    const value = {
        cartProducts,
        cartItemsQty,
        isCartOpened,
        totalPrice,
        addItemToCart,
        removeItemFromCart,
        destroyItemFromCart,
        getTotalPrice,
        getCartItemsQty,
        toggleCartDropDown,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


export default CartContextProvider