import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import {useNavigate} from 'react-router-dom';
import '../style/signup.css'
const SignUp = () => {
    const login = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isName = (e) => {
        setName(e.target.value)
    }
    const isEmail = (e) => {
        setEmail(e.target.value)
    }
    const isPassword = (e) => {
        setPassword(e.target.value)
    }

    const onPressSignUp = () => {
        console.log("clicked signup");
        // console.log(name);
        // console.log(email);
        // console.log(password);
        const dataPush = {
            name: name,
            email: email,
            password: password
        }
        console.log(dataPush);

        // localStorage.setItem('usersignup', dataPush)

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

        if(name!=='' && email!=='' && password!=='') {
            window.location = '/login'
        } else {
            alert("Please enter correct information")
        }
        setName('')
        setEmail('')
        setPassword('')
    }
   return (
    <>
        <NavBar />
        <div className='main'>
            <div className='container'>
                <h1>Sign Up</h1>
                <input type="text" placeholder='Your Name' value={name} onChange={isName}/>
                <input type="email" placeholder='Email Address' value={email} onChange={isEmail}/>
                <input type="password" placeholder='Password' value={password} onChange={isPassword}/>
                <button type='button' onClick={onPressSignUp}>Continue</button>

                <p>Already have an account? <span onClick={()=>login("/login")}>Login</span> </p>
                <div className='checkbox'>
                    <input type="checkbox" id="scales" name="scales" required />
                    <label id='label-text' for="scales">By Continuing, i agree to the terms of use & privacy policy.</label>
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp