import { data } from "jquery";
import React, {
    createContext, 
    useContext, 
    useState,
    useEffect, 
} from "react";
import {APIContext} from "../APIContext"

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const api = useContext(APIContext);


  //GETTER AND SETTER STATES
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
    signupSuccess: false,
    backToLogin: false
  });

  useEffect(() => {
    //This function handles every authentication state passed from provider children
    async function authenticate({ username, password }) {
        if (!username || !password) return;
        setState((state) => ({ ...state, isFetching: true }));
        try {
          let result = false;
          console.log(username);
          await api.authenticateUser({ username, password }).then(resp =>{
            (resp === null) ? setState((state) => ({ ...state, error: true })) : result = resp.data; 
          });
      
          setState((state) => ({
            ...state,
            isFetching: false,
            isAuthenticated: true,
            username: "",
            password: "",
          }));

        }catch(err) {
          setState((state) => ({ ...state, error: true }));
        }
              
    }

    //When user decides to signup, send payload and verify with server
    async function signup({username, password, email}){
      if (!username || !password) return;
      setState((state) => ({ ...state, isFetching: true }));
        try {
          await api.addUser({ username, email, password })
          .then(resp => {
            console.log(resp);
            if(resp !== undefined || resp !== null){
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

    //CONDITIONAL STATE CONTROL
    const {newSignup} = SignupPayload;
    if(!newSignup){
      authenticate({ ...loginPayload});
    }else{
      signup({...SignupPayload});
    }

  }, [SignupPayload, loginPayload, api]);

  //Export provider
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