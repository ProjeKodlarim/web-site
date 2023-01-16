import base from "./base";

interface CartItem extends base{
    userId?:string,
    productId:number,
    quantity:number
    
}

export default CartItem