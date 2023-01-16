import base from "./base";

interface Product extends base{
    description:string,
    price:number,
    quantity:number,
    discount:number,
    categoryId:number
}

export default Product