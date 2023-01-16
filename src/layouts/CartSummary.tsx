import React from 'react'
import { Button, Dropdown, Icon, Label } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseQuantiyFromCart, reduceQuantiyFromCart, removeFromCart } from '../store/actions/cartActions'
import { toast } from 'react-toastify'

const CartSummary = () => {

  const dispatch = useDispatch()
  const  {cartItems} = useSelector( (state:any) => state.cart)

  const handleIncreaseQuantityToCart = (product) => {
    dispatch(increaseQuantiyFromCart(product))
  }
  const handleRemoveOrReduceFromCart = (product) => {
    dispatch(reduceQuantiyFromCart(product))
  }
  return (
    <div>
      <Dropdown item text='Sepetiniz'>
        <Dropdown.Menu>
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
          
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to='/cart'>Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}
export default CartSummary