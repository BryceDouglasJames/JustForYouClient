import React, {useContext, useState} from "react"
import { Redirect , useHistory} from 'react-router-dom';
import {AuthenticationContext} from "../User/AuthenticationProvider"
import UserLoginForm from '../User/UserLoginForm'
import "bootstrap/dist/css/bootstrap.min.css"
import '../style.scss'
import '../../App.css'

export default function SignUpPage() {
    const { setSignupPayload, signupSuccess } = useContext(
      AuthenticationContext
    );

    const history = useHistory();

    //constrols state of function features
    const [state, setState] = new useState({
        username:'',
        email:'',
        password:'',
        isChecked: false
    });

    //GETTERS AND SETTERS
    const setUsername = (e) => {
        let user = e.target.value;
        setState((state) => ({ ...state, username: user}));
    };
  
    const setPassword = (e) => {
        let password = e.target.value;
        setState((state) => ({ ...state, password: password}));
    };

    const setEmail = (e) => {
        let mail = e.target.value;
        setState((state) => ({ ...state, email: mail}));
    };

    const setRemember = (e) =>{
        let check = e.target.value;
        setState((state)=>({...state, isChecked: check}));
    }

    //pushed request to go back to the provider
    const goToLogin = (e) =>{
        e.preventDefault();
        setSignupPayload({ newSignup: false, backToLogin : true }); 
    }
    
    //upon submission, send sign up data across for providers to ingest and handle.
    const onSubmit = (e) => {
        e.preventDefault();
        setSignupPayload({ username, email, password, newSignup: true });
        return <Redirect to="/build/"></Redirect>

    };

    const { username, password, email } = state;

    return(
        <form onSubmit = {onSubmit}>
            <div className="base-container">
                <div className="header">Sign Up</div>
                <div className="content" >
                    <div className="image">
                        <center> <img src="mh.png" height="60px" width="60px" /></center>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                name ="username" 
                                placeholder="Enter username" 
                                onChange={setUsername}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                name ="email" 
                                placeholder="Enter email" 
                                onChange={setEmail}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter password"
                                onChange={setPassword}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Confirm Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Re-enter password"
                                onChange={setPassword}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button 
                        type="button"
                        className="btn p-2 m-auto" 
                        value="Login"
                        style={{fontSize:"18px"}}
                        onClick={goToLogin}>
                        Back to login
                    </button>
                    &ensp;&ensp;&ensp;&ensp;
                    <button 
                        type="submit" 
                        className="btn p-2 m-auto" 
                        style={{fontSize:"18px"}}
                        value="Sign Up"
                        onClick={onSubmit}>
                        Create account
                    </button>
                </div>
            </div>
        </form>
    );
}