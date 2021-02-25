import React, {useContext, useState} from "react"
import {AuthenticationContext} from "../User/AuthenticationProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.scss";

export default function LoginPage() {
    const { setLoginPayload } = useContext(
      AuthenticationContext
    );
  
    const [state, setState] = useState({
      username: "",
      password: "",
    });
  
    const setUsername = (e) => {
        let user = e.target.value;
        setState((state) => ({ ...state, username: user}));
    };
  
    const setPassword = (e) => {
        let pass = e.target.value;
        setState((state) => ({ ...state, password: pass}));
        console.log(state);
    };
  
    const onSubmit = (e) => {
        e.preventDefault();
        setLoginPayload({ username, password });
    };
  
    const { username, password } = state;

    return(
        <form onSubmit={onSubmit}>
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content" >
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
                        className="btn" 
                        value="Login"
                        onClick={onSubmit}>
                        Login
                    </button>
                </div>
                <br></br>
                <div name="form-group">
                    <div name="custom-control custom-checkbox">
                        <input 
                            type="checkbox" name="custom-control-input" id="customCheck" />
                        <label name="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            </div>
        </form>
    );



/*<form onSubmit={onSubmit}>
            <label for="name">Name</label><br></br>
            <input 
                type="text"
                onChange={setUsername}
            />
            <br></br><br></br>
            <label for ="pass">Password</label><br></br>
            <input 
                type="password"
                onChange={setPassword}
            />
            <br></br><br></br>
            <button 
                type="submit" 
                value="Add user" 
            >
                Log In 
            </button>
        </form> */
}