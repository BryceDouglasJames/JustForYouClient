import React, {
    createContext, 
    useContext, 
    useState,
    useEffect, 
} from "react";
import { Redirect } from 'react-router-dom';


import {APIContext} from "../APIContext"

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const api = useContext(APIContext);

  const [state, setState] = useState({
    isAuthenticated: api.isAuthenticated,
    isChecked: false,
    isFetching: false,
    error: false,
  });

  const [loginPayload, setLoginPayload] = useState({
    username: "",
    password: "",
  });

  const [SignupPayload, setSignupPayload] = useState({
    username:"",
    email:"",
    password:"",
    newSignup: false,
    signupSuccess: false
  });

  useEffect(() => {
    console.log(SignupPayload);
    async function authenticate({ username, password }) {
        if (!username || !password) return;
        setState((state) => ({ ...state, isFetching: true }));
        try {
          await api.authenticateUser({ username, password })
          .then(resp => {
            console.log(resp);
            if(resp !== undefined){
              setState((state) => ({
                ...state,
                isFetching: false,
                isAuthenticated: resp.data,
                username: "",
                password: "",
              }));
            }
          })
        }catch(err) {
          setState((state) => ({ ...state, error: true }));
        }
              
    }

    async function signup({username, password, email}){
      if (!username || !password) return;
      setState((state) => ({ ...state, isFetching: true }));
        try {
          await api.addUser({ username, email, password })
          .then(resp => {
            console.log(resp);
            if(resp !== undefined){
              setSignupPayload((SignupPayload)=>({
                ...SignupPayload,
                signupSuccess: resp.data,
                newSignup: false,
                username: "",
                password: "",
              }));
            }
          })
        }catch(err) {
          setState((state) => ({ ...state, error: true }));
        }
    }

    const {newSignup} = SignupPayload;
    if(!newSignup){
      authenticate({ ...loginPayload});
    }else{
      signup({...SignupPayload});
    }

  }, [SignupPayload, loginPayload, api]);

  return (
    <AuthenticationContext.Provider
      value={{
        ...state,
        ...SignupPayload,
        setLoginPayload,
        setSignupPayload
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}