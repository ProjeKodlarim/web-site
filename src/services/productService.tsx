import axios from 'axios'
import Product from '../entities/product';
// import React, { Component } from 'react'

// export default class productService {
//   getProducts(){
//     return axios.get("https://localhost:44377/api/Products/getall");
//   }
// }
const getProducts = () => {
  return axios.get("https://localhost:44377/api/Products/getall");
}

const getByProductId = (id) => {
  return axios.get("https://localhost:44377/api/Products/getbyproductid?id="+id);
}

const productAdd = (product:Product) => {
  return axios.post("https://localhost:44377/api/Products/add",product)
}

const productDelete = (product:Product) => {
  return axios.post("https://localhost:44377/api/Products/delete",product)
}

const productUpdate = (product:Product) => {
  return axios.post("https://localhost:44377/api/Products/update",product)
}

const productService = {
  getProducts,
  getByProductId,
  productAdd,
  productDelete,
  productUpdate
}
export default productService