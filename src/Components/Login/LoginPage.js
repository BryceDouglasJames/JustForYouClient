import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthenticationContext } from '../User/AuthenticationProvider'
import UserLoginForm from '../User/UserLoginForm'
import "bootstrap/dist/css/bootstrap.min.css"


export default function LoginPage(){
    const {isAuthenticated, newSignup, signupSuccess, setSignupPayload} = new useContext(AuthenticationContext);
    if(isAuthenticated){
        return <Redirect to="/home"></Redirect>
    }else if (newSignup){
        return <Redirect to="/signup"></Redirect>
    }else{
        return <UserLoginForm></UserLoginForm>
    }
}