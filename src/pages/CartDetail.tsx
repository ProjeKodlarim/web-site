import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Dropdown, Label } from 'semantic-ui-react'
import { increaseQuantiyFromCart, reduceQuantiyFromCart } from '../store/actions/cartActions'

const CartDetail = () =>{
  const dispatch = useDispatch()
  const  {cartItems} = useSelector( (state:any) => state.cart)
  
  const handleIncreaseQuantityToCart = (product) => {
    dispatch(increaseQuantiyFromCart(product))
  }
  const handleRemoveOrReduceFromCart = (product) => {
    dispatch(reduceQuantiyFromCart(product))
  }
  const deneme=(cartItem)=>{
    console.log(cartItem)
  }

  return (
    <div>

{
            cartItems.map((cartItem)=>(
              
              <Dropdown.Item>
                  
                {cartItem.product.name}
                <Button icon onClick={()=>handleRemoveOrReduceFromCart(cartItem)}>-</Button>
                <Label size='small'>
                  {cartItem.quantity}
                </Label>
                <Button icon onClick={()=>handleIncreaseQuantityToCart(cartItem)}>+</Button>
              </Dropdown.Item>
              
            ))
          }
          
    </div>
  )
}

export default CartDetail

function dispatch(arg0: { type: string; payload: any }) {
  throw new Error('Function not implemented.')
}
