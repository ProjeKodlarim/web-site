import React, { useEffect, useState } from "react";
import CartSummary from "./CartSummary";
import { Button, Menu, Container } from 'semantic-ui-react'; 
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";


const Navigationbar = () => {

    const  {cartItems} = useSelector( (state:any) => state.cart)
    const [isAuthenticated, setIsAuthenticated] = useState<any|boolean>(false)
    const history = useHistory()
    const dispatch = useDispatch()


    function handleSignOut() {
        setIsAuthenticated(false)
        localStorage.clear()
        history.push("/")//çıkış yaptıysa gidilecek adres
    }
    function handleSignIn() {
        setIsAuthenticated(true)
        
    }
    return (
        <div >
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item name='home'><Link to={"/"}>Ana sayfa</Link></Menu.Item>
                <Menu.Item name='messages' > <Link to={"/product/add"}>Ürün ekle</Link> </Menu.Item>
                <Menu.Menu position='right'>
                  {cartItems.length>0 && <CartSummary/>}
                   {isAuthenticated==true?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}

export default Navigationbar;