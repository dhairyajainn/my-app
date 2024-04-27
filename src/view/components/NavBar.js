import React from 'react'
import '../style/navbar.css'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from "react";

const NavBar = () => {
  const login = useNavigate()
  const shop = useNavigate()
  const logout = useNavigate()
  const addtocartbutton = useNavigate();

  const [user, setUser] = useState('');
  useEffect(()=>{
    setUser(localStorage.getItem('user'))
  },[]);

  
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={require('../Assets/logo.png')}  alt=''></img>
            {/* <span>Ligma</span> */}
            <span>EcoLuxe</span>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>shop('/')}>Home</li>
            <li onClick={()=>shop('/shop')}>Shop</li>
            <li onClick={()=>shop('/mens')}>Men</li>
            <li onClick={()=>shop('/women')}>Women</li>
            <li onClick={()=>shop('/kids')}>Kids</li>
        </ul>
        <div className='nav-login-cart'>
          {
            user ?
            <>
              <button type='button' onClick={()=>logout("/logout")}>Logout</button>
            </>
            :
            <>
              <button type='button' onClick={()=>login("/login")}>Login</button>
            </>

          }
            <img src={require('../Assets/cart_icon.png')} alt='' onClick={()=>addtocartbutton('/addtocart')}></img>
        </div>
    </div>
  )
}

export default NavBar