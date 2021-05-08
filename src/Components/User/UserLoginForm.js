import React, {useContext, useState} from "react"
import {AuthenticationContext} from "../User/AuthenticationProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import "../style.scss";
import "../../background.css"
import {APIContext} from "../APIContext"



export default function LoginPage() {
    const api = useContext(APIContext);
    const { setSignupPayload, setUserState } = useContext(
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
        let password = e.target.value;
        setState((state) => ({ ...state, password: password}));
        console.log(state);
    };
  
    const onSubmit = (e) => {
        e.preventDefault();
        loginUser(state);
    };

    const goToSignUp = (e) =>{
        setSignupPayload({ newSignup: true, backToLogin : false });
    }

    async function loginUser({ username, password }) {
        if (!username || !password) return;
        try {
          await api.loginUser({ username, password }).then(resp =>{
            if(resp && resp.data !== false){
                sessionStorage.setItem("USERNAME", username);
                sessionStorage.setItem("session_id", resp.data);
                setUserState({username: username, session_id: resp.data});
            }
          });
        } catch (err) {
          console.log(err);
        }
    }


    return(
        <form onSubmit={onSubmit}>
        <div className = "m-auto p-2 forum" style ={{width:"100vw", height:"100vh"}}>
            <div className = "row p-5"></div>
            <div className = "row p-3"></div>

            <div className="base-container m-auto p-3" style = {{backgroundColor:"gainsboro", width:"40%"}}>
                <div className="header"><p className = "m-auto" style = {{fontSize:"200%"}}>Just For You</p></div>
                <div className="content">
                    <br></br><br></br>
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
                        className="btn btn-dark m-auto" 
                        style={{fontSize:"18px"}}
                        onClick={onSubmit}>
                        Login
                    </button>
                    &ensp;&ensp;&ensp;&ensp;
                    <button 
                        type="button"
                        value="Login"
                        className="btn btn-dark m-auto" 
                        style={{fontSize:"18px"}}
                        onClick={goToSignUp}>
                        Sign Up
                    </button>
                </div>
                <br></br><br></br>
            </div>
        
        </div>
        </form>
    );
}