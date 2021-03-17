import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthenticationContext } from '../User/AuthenticationProvider'
import UserLoginForm from '../User/UserLoginForm'
import "bootstrap/dist/css/bootstrap.min.css"


export default function LoginPage(){
    const {isAuthenticated, newSignup, sessionActive} = new useContext(AuthenticationContext);
    if(isAuthenticated && sessionActive){
        return <Redirect to="/build/home"></Redirect>
    }else if (newSignup){
        return <Redirect to="/build/signup"></Redirect>
    }else{
        return <UserLoginForm></UserLoginForm>
    }
}