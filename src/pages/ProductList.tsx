import React, { useEffect, useState } from 'react'
import { Button, Card, Icon, Label, Menu, Table, Image, CardGroup } from 'semantic-ui-react';
import ProductService from '../services/productService';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast } from "react-toastify"
import Product from '../entities/product';
import cartService from '../services/cartService';
import CartItem from '../entities/cartItem';


const ProductList = () => {

  const dispatch = useDispatch()

  const [products, setProducts] = useState<any[]>([])

  const {cartItems} = useSelector((state:any)=>state.cart)

  //const pr:any={description:"aa",name:"bb",price:14,quantity:55,categoryId:1,discount:5}
  const [product,setProduct]=useState<any[]>([{id:1,description:"aa",name:"bb",price:14,quantity:55,categoryId:1,discount:5},{id:2,description:"aa",name:"bbaa",price:14,quantity:55,categoryId:1,discount:5}])

  useEffect(() => {
   // ProductService.getProducts().then(result => setProducts(result.data.data))
    //ProductService.getByProductId(2).then(result => setProducts(result.data.data))
    setProducts(product)
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    toast.success(`${product.name} sepete eklendi!`)
    
    const uId=localStorage.getItem("userid")
    const cart:CartItem={userId:uId==null?"0":uId,productId:product.id,name:"as",quantity:12}
    cartSaveDb(cart)
  }

  const cartSaveDb=(cart)=>{
    const x=cartService.getCartByProduct(1,2).then(res=>console.log(res))
    console.log(x)
    //cartService.cartAdd(cart).then(response=>console.log(response))
  }

  return (
    <div>
     <Card.Group itemsPerRow={3}>
      {
        products.map(product => (
          
            <Card>
              <Link to={`/products/${product.id}`}>
              <Image src="logo192.png" wrapped ui={false} />
              <Card.Content>
                <Card.Header>{product.name}</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description >
                  {product.price}TL
                </Card.Description>
              </Card.Content>
              </Link>
              <Card.Content extra>
                 <Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button>
              </Card.Content>
            </Card>
            
        ))
      }
      </Card.Group>
    </div>
  )
}
export default ProductList;