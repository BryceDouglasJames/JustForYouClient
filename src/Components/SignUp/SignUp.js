import React, {useContext, useState} from "react"
import {AuthenticationContext} from "../User/AuthenticationProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.scss";

export default function SignUpPage() {
    const { setLoginPayload, isChecked, setSignupPayload } = useContext(
      AuthenticationContext
    );

    const [state, setState] = new useState({
        username:'',
        email:'',
        password:'',
        isChecked: false
    });

    const setUsername = (e) => {
        let user = e.target.value;
        setState((state) => ({ ...state, username: user}));
    };
  
    const setPassword = (e) => {
        let pass = e.target.value;
        setState((state) => ({ ...state, password: pass}));
    };

    const setEmail = (e) => {
        let mail = e.target.value;
        setState((state) => ({ ...state, email: mail}));
    };

    const setRemember = (e) =>{
        let check = e.target.value;
        setState((state)=>({...state, isChecked: check}));
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        setSignupPayload({ username, email, password, newSignup: true});
    };

    const { username, password, email } = state;

    return(
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
                            placerholder="enter username" 
                            onChange={setUsername}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name ="email" 
                            placerholder="enter email" 
                            onChange={setEmail}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="enter password"
                            onChange={setPassword}/>
                    </div>
                </div>
            </div>
            <div className="fotter">
                <button 
                    type="button" 
                    className="btn" 
                    value="Sign Up"
                    onSubmit={onSubmit}>
                    Sign Up
                </button>
            </div>
            <div name="form-group">
                <div name="custom-control custom-checkbox">
                    <input 
                        type="checkbox" 
                        name="custom-control-input" 
                        id="customCheck" 
                        onChange={setRemember}/>
                    <label name="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
        </div>
    );
}