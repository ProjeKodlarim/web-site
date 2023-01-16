import { ADD_TO_CART, REMOVE_FROM_CART,REDUCE_QUANTITY_FROM_CART,INCREASE_QUANTITY_FROM_CART } from '../actions/cartActions';
import { cartItems } from './../initialValues/cartItems';

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product:any = state.cartItems.find((c:any) => c.product.name === payload.name)
            if (product) {
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((c:any) => c.product.name !== payload.name)
            }
        case REDUCE_QUANTITY_FROM_CART:
            let reduceProduct:any=state.cartItems.find((c:any)=>c.product.name === payload.product.name)
            if (reduceProduct.quantity>1) {
                reduceProduct.quantity--;
                return{
                    ...state
                }
            }else{
                return {
                    ...state,
                    cartItems: state.cartItems.filter((c:any) => c.product.name !== payload.product.name)
                }
            }
        case INCREASE_QUANTITY_FROM_CART:
            let increaseProduct:any=state.cartItems.find((c:any)=>c.product.name === payload.product.name)
            if (increaseProduct.quantity>0) {
                increaseProduct.quantity++;
                return{
                    ...state
                }
            }else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }
        default:
            return state
    }
}