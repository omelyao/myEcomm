import React from 'react';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
   const location = useLocation()
   const isLogin = location.pathname === LOGIN_ROUTE
   return (
      <Container
         className="d-flex justify-content-center align-items-center"
         style={{ height: window.innerHeight - 54 }}
      >
         <Card style={{ width: 600 }} className='p-5'>
            <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <Form className='d-flex flex-column'>
               <Form.Control
                  placeholder="Введите email"
                  className='mt-3'
               />
               <Form.Control
                  placeholder="Введите пароль"
                  className='mt-3'
               />
               <div className='d-flex justify-content-between align-items-center mt-3' style={{ flexWrap: 'nowrap' }}>
                  {isLogin ?
                     <div>Нет аккаунта ?
                        <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                     </div>
                     : <div>Есть аккаунт?
                        <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                     </div>}
                  <Button variant="outline-success">{isLogin ? 'Войти' : ' Зарегистрироваться'}</Button>
               </div>
            </Form>
         </Card>
      </Container>
   );
};

export default Auth;