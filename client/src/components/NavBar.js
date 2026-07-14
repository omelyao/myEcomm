import React, { useContext } from 'react';
import { observer } from "mobx-react-lite"
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
const NavBar = observer(() => {
   const { user } = useContext(Context)
   return (
      <Navbar bg="dark" data-bs-theme="dark">
         <Container>
            <NavLink style={{ color: 'white', textDecoration: "none" }} to={SHOP_ROUTE}>OmelioShop</NavLink>
            {user.isAuth ?
               <Nav className="ml-auto">
                  <Button style={{ marginRight: '15px' }} variant={"outline-light"}>Админ панель</Button>
                  <Button variant={"outline-light"} onClick={() => user.setIsAuth(false)}>Выйти</Button>
               </Nav>
               :
               <Nav className="ml-auto">
                  <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
               </Nav>
            }
         </Container>
      </Navbar>
   );
}
)

export default NavBar;