import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const SignedOut = (props:any) => {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={props.signIn}><Link to={"/login"}> Giriş yap</Link></Button>
                <Button primary style={{marginLeft:"0.5em"}}><Link to={"/register"}> Kayıt ol</Link></Button>
            </Menu.Item>
        </div>
    )
}
export default SignedOut