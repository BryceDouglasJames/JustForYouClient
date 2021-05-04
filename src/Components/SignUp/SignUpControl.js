
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { AuthenticationContext } from '../User/AuthenticationProvider'
import SignUp from './SignUp'
import "bootstrap/dist/css/bootstrap.min.css"


export default function LoginPage(){
    const {backToLogin} = new useContext(AuthenticationContext);
    if(backToLogin){
        return <Redirect to="/"></Redirect>
    }else{
        return <SignUp></SignUp>
    }
}