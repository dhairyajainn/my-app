import {Routes, Route} from 'react-router-dom';
import Home from '../screens/Home';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import { useState, useEffect } from 'react';
import Details from '../screens/Details';
import Shop from '../screens/Shop';
import Logout from '../screens/Logout';
import MensCollection from '../screens/MensCollection';
import Women from '../screens/Women';
import Kid from '../screens/Kid';
import AddToCart from '../screens/AddToCart';

function RouterNav() {
    const [userData, setUserData] = useState('')
    useEffect(()=>{
        setUserData(localStorage.getItem('user'));
    },[])
    console.log(userData);
    
    const [userSignUpData, setUserSignUpData] = useState('')
    useEffect(()=>{
        setUserSignUpData(localStorage.getItem('usersignup'));

    },[])
    console.log(userSignUpData);
    return (
        <Routes>
            {/* <Route path='/' Component={Home} /> */}
            {/* <Route path='/login' Component={Login} /> */}
            <Route path='/details' Component={Details} />
            <Route path='/shop' Component={Shop} />
            <Route path='/logout' Component={Logout} />
            <Route path='/mens' Component={MensCollection} />
            <Route path='/women' Component={Women} />
            <Route path='/kids' Component={Kid} />
            <Route path='/addtocart' Component={AddToCart} />
            { userData !== null ? <>
                <Route path="/" Component={Home} />
            </>
                :
                <>
                    <Route path="/" Component={Home} />
                    <Route path="/login" Component={Login} />
                    <Route path='/signup' Component={SignUp} />
                </>
            }
            
        </Routes>
    )
}

export default RouterNav;