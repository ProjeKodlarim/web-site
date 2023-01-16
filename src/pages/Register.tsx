import React, { useState } from 'react'
import * as Yup from 'yup'
import { Formik ,Form} from 'formik'
import EcommerceTextInput from '../components/EcommerceTextInput'
import { Button } from 'semantic-ui-react'
import loginService from '../services/loginService'
import EcommercePasswordInput from '../components/EcommercePasswordInput'
import RegisterDTO from '../DTOs/RegisterDTO'

const Register = () =>{

  const initialValues:RegisterDTO = {email:"",password:"",name:"",lastName:""}
  const [user, setUser] = useState<RegisterDTO>()

  const schema = Yup.object({
    email: Yup.string().required("email zorunlu"),
    password: Yup.string().required("Parola zorunlu"),
    name: Yup.string().required("Name alanı zorunlu"),
    lastName: Yup.string().required("Soyisim alanı zorunlu")
})
  
  return (
    <div>
      <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    loginService.register(values)
                 }}
            >
                <Form className='ui form'>
                    <EcommerceTextInput name="name" placeholder="Adınız"/>
                    <EcommerceTextInput name="lastName" placeholder="Soyadınız"/>
                    <EcommerceTextInput name="email" placeholder="Email"/>
                    <EcommercePasswordInput name="password" placeholder="Parola"/>
                    <Button color="green" type='submit'>Giris </Button>

                </Form>
            </Formik>
    </div>
  )
}

export default Register