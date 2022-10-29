import {CART_ACTION_TYPES} from "./Cart.actionTypes";

export const cartContextReducer = (state, action) => {
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