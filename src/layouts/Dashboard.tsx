import React, { useEffect } from 'react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route } from 'react-router'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import {ToastContainer} from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'
import Login from '../pages/Login'
import Register from '../pages/Register'
import userService from '../services/userService'
import { loginUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Dashboard = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    const userDetail = async () =>{
      const response = await userService.getUserDetails(localStorage.getItem("usermail")) 
      dispatch(loginUser(response.data))
    }
    userDetail()
  }, [])
  
  return (
    <div>
      <ToastContainer position="bottom-right"/>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
              <Categories />
          </Grid.Column>
          <Grid.Column width={12}> 
            <Route exact path={"/"} component={ProductList}/>
            <Route exact path={"/products"} component={ProductList}/>
            <Route path={"/products/:id"} component={ProductDetail}/>
            <Route path={"/cart"} component={CartDetail}/>
            <Route path={"/product/add"} component={ProductAdd}/>
            <Route path={"/login"} component={Login}/>
            <Route path={"/register"} component={Register}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
export default Dashboard