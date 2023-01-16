export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"
export const REDUCE_QUANTITY_FROM_CART="REDUCE_QUANTITY_FROM_CART"
export const INCREASE_QUANTITY_FROM_CART="INCREASE_QUANTITY_FROM_CART"


export function addToCart(product){
    return{
        type:ADD_TO_CART,
        payload:product
    }
}

export function removeFromCart(product){
    return{
        type:REMOVE_FROM_CART,
        payload:product
    }
}

export function reduceQuantiyFromCart(product){
    return{
        type:REDUCE_QUANTITY_FROM_CART,
        payload:product
    }
}

export function increaseQuantiyFromCart(product){
    return{
        type:INCREASE_QUANTITY_FROM_CART,
        payload:product
    }
}