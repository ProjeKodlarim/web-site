import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const SignedIn = (props:any) => {
    return (
        <div>
            <Menu.Item>
                <Dropdown pointing="top left" text='Omer'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item text="Çıkış yap" icon="sign-out" onClick={props.signOut}/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
export default SignedIn