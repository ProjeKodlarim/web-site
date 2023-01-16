import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { toast } from 'react-toastify';
import { Button, Card, Image } from 'semantic-ui-react'
import Product from '../entities/product';
import ProductService from '../services/productService';
import { addToCart, removeFromCart } from '../store/actions/cartActions';

const ProductDetail = () => {
  let { id } = useParams<{ id }>()//parametreleri object olarak verir
  const dispatch = useDispatch()

  const [product, setProduct] = useState<Product|undefined>()

  useEffect(() => {
    const getByProduct = async () => {
      //const response = await ProductService.getByProductId(id);
      //setProduct(response.data);
      ProductService.getByProductId(id).then(result => {setProduct(result.data)}).catch(error=>{console.log(product)})
      console.log(product?.name)
    }
    getByProduct()
  }, [])

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
    toast.success(`${product.name} sepetten çıkarıldı!`)
  }


  return (
    <div>

       {product==undefined?"deneme":product.name}
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='logo192.png'
            />
            <Card.Header>{product?.name}</Card.Header>
            <Card.Meta>{product?.price}</Card.Meta>
            <Card.Description>
              {product?.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green' onClick={()=>handleAddToCart(product)}>
                Sepete ekle
              </Button>
              <Button basic color='red' onClick={()=>handleRemoveFromCart(product)}>
                Sepetten çıkar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
export default ProductDetail