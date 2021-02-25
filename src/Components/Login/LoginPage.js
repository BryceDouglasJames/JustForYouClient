import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthenticationContext } from '../User/AuthenticationProvider'
import UserLoginForm from '../User/UserLoginForm'

export default function LoginPage(){
    const {isAuthenticated} = new useContext(AuthenticationContext);
    if(isAuthenticated){
        return <Redirect to="/"></Redirect>
    }else{
        return <UserLoginForm></UserLoginForm>
    }
}