import React, { useState } from 'react'
import LoginDTO from '../DTOs/LoginDTO'
import * as Yup from 'yup'
import { Formik ,Form} from 'formik'
import EcommerceTextInput from '../components/EcommerceTextInput'
import { Button } from 'semantic-ui-react'
import loginService from '../services/loginService'
import EcommercePasswordInput from '../components/EcommercePasswordInput'
import userService from '../services/userService'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import {  loginUser } from '../store/actions/userActions'

export default function Login() {

  const initialValues:LoginDTO = {email:"",password:""}
  const [user, setUser] = useState<LoginDTO>()
  const history = useHistory()
  const dispatch = useDispatch()

  const schema = Yup.object({
    email: Yup.string().required("email zorunlu"),
    password: Yup.string().required("Parola zorunlu")
})
const login = async (values) =>{
  const response = await loginService.login(values)
  const user = await userService.getUserDetails(values.email)
  if(response.data.success){
    localStorage.setItem("token",response.data.data.token)
    localStorage.setItem("isAuthenticated","true")
    localStorage.setItem("username",user.data.name)
    localStorage.setItem("userlastname",user.data.lastName)
    localStorage.setItem("usermail",user.data.email)
    localStorage.setItem("userid",user.data.id)
    dispatch(loginUser(user.data))
    history.push("/")
    
  }
  else{
    console.log("hatalı")
  }

}
  
  return (
    <div>
      <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    login(values)
                 }}
            >
                <Form className='ui form'>
                    <EcommerceTextInput name="email" placeholder="Email"/>
                    <EcommercePasswordInput name="password" placeholder="Parola"/>
                    <Button color="green" type='submit'>Giris </Button>

                </Form>
            </Formik>
    </div>
  )
}
