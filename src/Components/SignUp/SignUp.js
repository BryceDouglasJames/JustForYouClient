import React, {useContext, useState} from "react"
import {AuthenticationContext} from "../User/AuthenticationProvider"
import {APIContext} from "../APIContext"
import "bootstrap/dist/css/bootstrap.min.css"
import '../style.scss'
import '../../App.css'

export default function SignUpPage() {
    const api = useContext(APIContext);

    const { setSignupPayload } = useContext(
      AuthenticationContext
    );

    //constrols state of function features
    const [state, setState] = new useState({
        username:'',
        email:'',
        password:'',
        passwordCheck:'',
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

    const setPasswordCheck = (e) => {
        let passwordCheck = e.target.value;
        setState((state) => ({ ...state, passwordCheck: passwordCheck}));
    };

    const setEmail = (e) => {
        let mail = e.target.value;
        setState((state) => ({ ...state, email: mail}));
    };

    //pushed request to go back to the provider
    const goToLogin = (e) =>{
        e.preventDefault();
        setSignupPayload({ newSignup: false, backToLogin : true }); 
    }
    
    //upon submission, send sign up data across for providers to ingest and handle.
    const onSubmit = (e) => {
            signup(state);
            e.preventDefault();
    };

    async function signup({username, password, email, passwordCheck}){
        if (!username || !password || !email) return;
        
        if(password !== passwordCheck){
            alert("Passwords do not match. Please try again.");
            return;
        }else{
            try {
                await api.addUser({ username, email, password })
                .then(resp => {
                    console.log(resp);
                    if(resp !== undefined || resp !== null){
                        setSignupPayload((SignupPayload)=>({
                        ...SignupPayload,
                        signupSuccess: true,
                        newSignup: false,
                        username: username,
                        password: password,
                        email: email
                        }));
                    }
                });
                alert("Signup success! Head back to login to sign in.");
            }catch(err) {
                alert(err);
            }
        }
    }

    return(
        <form onSubmit = {onSubmit}>
            <div className="base-container">
                <div className="header">Sign Up</div>
                <div className="content" >
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
                                onChange={setPasswordCheck}/>
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