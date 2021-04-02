import React, {useContext, useState} from "react"
import { Redirect } from 'react-router-dom';
import {AuthenticationContext} from "../User/AuthenticationProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.scss";

export default function LoginPage() {
    const { setLoginPayload, setSignupPayload } = useContext(
      AuthenticationContext
    );
  
    const [error, setError] = new useState({
        error: false
    });

    const [state, setState] = useState({
      username: "",
      password: "",
    });
  
    const setUsername = (e) => {
        let user = e.target.value;
        setState((state) => ({ ...state, username: user}));
    };
  
    const setPassword = (e) => {
        let password = e.target.value;
        setState((state) => ({ ...state, password: password}));
        console.log(state);
    };
  
    const onSubmit = (e) => {
        //e.preventDefault();
        setLoginPayload({ username, password });        
    };

    const goToSignUp = (e) =>{
        setSignupPayload({ newSignup: true, backToLogin : false });
    }

  
    const { username, password } = state;


    return(
        <form onSubmit={onSubmit}>
            <div className="base-container">
                <div className="header">Welcome to Just For You</div>
                <div className="content" style = {{animation: "fadeIn ease 10s", WebkitAnimation: "fadeIn ease 10s"}}>
                    <br></br><br></br>
                    <div className="image">
                        <center> <img src="mh.png" height="60px" width="60px" /></center>
                    </div>
                    <div className="form" >
                        <div className="form-group">
                            <label htmlFor="username">Username</label >
                            <input 
                                type="username" 
                                name ="username"    
                                placeholder="Enter your username"
                                onChange={setUsername}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password"
                                onChange={setPassword}/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button 
                        type="submit" 
                        value="Login"
                        className="btn px-2 m-auto" 
                        style={{fontSize:"18px"}}
                        onClick={onSubmit}>
                        Login
                    </button>
                    &ensp;&ensp;&ensp;&ensp;
                    <button 
                        type="button"
                        value="Login"
                        className="btn px-2 m-auto" 
                        style={{fontSize:"18px"}}
                        onClick={goToSignUp}>
                        Sign Up
                    </button>
                </div>
                <br></br><br></br>
                <div name="form-group">
                    <div name="custom-control custom-checkbox" className = "p-auto m-auto">
                        <input 
                            type="checkbox" 
                            name="custom-control-input" 
                            id="customCheck" 
                        />
                        &ensp;&ensp;
                        <label name="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            </div>
        </form>
    );
}