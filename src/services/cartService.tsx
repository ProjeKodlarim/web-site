import axios from "axios"
import CartItem from "../entities/cartItem"


const cartAdd = (cartItem:CartItem) =>{
    return axios.post("https://localhost:44377/api/cartItems/add",cartItem)
}

const cartUpdate = (cartItem:CartItem) =>{
    return axios.post("https://localhost:44377/api/cartItems/update",cartItem)
}

const getCartByProduct = (x,y) =>{
    return axios.get("https://localhost:44377/api/cartItems/getcart"+{x,y})
}

const cartService = {
    cartAdd,
    cartUpdate,
    getCartByProduct
  }
  export default cartService