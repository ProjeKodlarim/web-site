import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button } from 'semantic-ui-react'
import EcommerceTextInput from '../components/EcommerceTextInput'
import Product from '../entities/product'
import productService from '../services/productService'

const ProductAdd = () => {
    const initialValues:Product = { name: "", price: 0,description:"",quantity:0,categoryId:0,discount:22 }

    const schema = Yup.object({
        Name: Yup.string().required("Ürün adı zorunlu"),
        Price: Yup.number().required("Ürün fiyatı zorunlu")
    })
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                    productService.productAdd(values)
                 }}
            >
                <Form className='ui form'>
                    <EcommerceTextInput name="Name" placeholder="ürün adı"/>
                    <EcommerceTextInput name="Price" placeholder="ürün fiyatı"/>
                    <EcommerceTextInput name="Description" placeholder="ürün açıklaması"/>
                    <EcommerceTextInput name="Quantity" placeholder="ürün miktarı"/>
                    <EcommerceTextInput name="CategoryId" placeholder="ürün category id si"/>
                    <EcommerceTextInput name="Discount" placeholder="ürün indirim oranı"/>
                    <Button color="green" type='submit'>ekle</Button>

                </Form>
            </Formik>
        </div>
    )
}
export default ProductAdd