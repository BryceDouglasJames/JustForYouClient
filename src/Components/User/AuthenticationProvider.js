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
    newSignup: false
  });

  useEffect(() => {
    async function authenticate({ username, password}) {
      const {newSignup} = SignupPayload;
      if(!newSignup){
        if (!username || !password) return;
    
        setState((state) => ({ ...state, isFetching: true }));
        try {
          await api.authenticateUser({ username, password })
        }catch(err) {
          setState((state) => ({ ...state, error: true }));
        }

        setState((state) => ({
          ...state,
          isFetching: false,
          isAuthenticated: api.isAuthenticated,
          username: "",
          password: "",
        }));
      }else{
        console.log("YO");
      }
    }

    authenticate({ ...loginPayload});
  }, [SignupPayload, loginPayload, api]);

  return (
    <AuthenticationContext.Provider
      value={{
        ...state,
        setLoginPayload,
        setSignupPayload
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}