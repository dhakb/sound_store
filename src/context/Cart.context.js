import {createContext, useReducer} from "react";

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

const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    TOGGLE_CART_DROPDOWN: "TOGGLE_CART_DROPDOWN",
    GET_TOTAL_PRICE: "GET_TOTAL_PRICE",
    GET_CART_ITEMS_QTY: "GET_CART_ITEMS_QTY",
    DESTROY_ITEM_FROM_CART: "DESTROY_ITEM_FROM_CART"
}


const cartContextReducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case CART_ACTION_TYPES.ADD_TO_CART:
            const existingCartItem = state.cartProducts.find((product) => product.id === payload.itemToAdd.id)


            if (existingCartItem) {
                return {
                    ...state,
                    cartProducts: state.cartProducts.map((product => product.id === payload.itemToAdd.id ? {
                        ...product,
                        qty: product.qty + 1
                    } : product))
                }
            }
            return {
                ...state,
                cartProducts: [
                    ...state.cartProducts,
                    {...payload.itemToAdd, qty: 1},
                ]
            }

        case CART_ACTION_TYPES.REMOVE_FROM_CART:
            if (payload.itemToRemove.qty > 1) {
                return {
                    ...state,
                    cartProducts: state.cartProducts.map(product => product.id === payload.itemToRemove.id ? {
                        ...product,
                        qty: product.qty - 1
                    } : product)
                }
            } else {
                return {
                    ...state,
                    cartProducts: state.cartProducts.filter(product => product.id !== payload.itemToRemove.id)
                }

            }

        case CART_ACTION_TYPES.DESTROY_ITEM_FROM_CART:
            return {
                ...state,
                cartProducts: state.cartProducts.filter(product => product.id !== payload.itemToDestroy.id)
            }

        case CART_ACTION_TYPES.GET_CART_ITEMS_QTY:
            return {
                ...state,
                cartItemsQty: state.cartProducts.reduce((total, currItem) => {
                    total += currItem.qty
                    return total
                }, 0)
            }

        case CART_ACTION_TYPES.GET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.cartProducts.reduce((total, currItem) => {
                    total += currItem.qty * currItem.price
                    return total
                }, 0)
            }


        case CART_ACTION_TYPES.TOGGLE_CART_DROPDOWN:
            return {
                ...state,
                isCartOpened: !state.isCartOpened
            }

        default:
            throw new Error(`Unhandled action type ${type} in cart reducer`)
    }
}

const initialState = {
    cartProducts: [],
    cartItemsQty: 0,
    totalPrice: 0
}


const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartContextReducer, initialState)
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