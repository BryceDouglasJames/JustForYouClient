import { data } from "jquery";
import React, {
    createContext, 
    useContext, 
    useState,
    useEffect, 
} from "react";
import {APIContext} from "../APIContext"
import {UserContext} from "./UserProvider"

export const AuthenticationContext = createContext();

export default function AuthenticationProvider({ children }) {
  const api = useContext(APIContext);

  //GETTER AND SETTER STATES
  const [authState, setAuthState] = useState({
    isAuthenticated: api.isAuthenticated,
    isChecked: false,
    isFetching: false,
    userUpdate: false,
    sessionActive: true,
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

        if (!username || !password){
          if(sessionStorage.getItem("USERNAME") !== null){
            setAuthState((authState) => ({...authState, sessionActive: true, isAuthenticated: true}));
            return;
          }else{
            //setAuthState((authState) => ({...authState, sessionActive: false}));
            return;
          }
        }

        setAuthState((authState) => ({ ...authState, isFetching: true }));
        try {
          let result = false;
          
          await api.authenticateUser({ username, password }).then(resp =>{
            (resp === null) ? setAuthState((authState) => ({ ...authState, error: true })) : result = resp.data; 
          });
      
          console.log(result[0]);
          if(result[0] === true){
            if(sessionStorage.getItem("USERNAME") === null || sessionStorage.getItem("USERNAME").toString() !== username){
              sessionStorage.setItem("USERNAME", username);
            }
          }

          if(result[1] === true){
            sessionStorage.setItem("NEWUSER", true);
          }
                    
          setAuthState((authState) => ({
            ...authState,
            isFetching: false,
            isAuthenticated: result,
            userUpdate: result,
            username: "",
            password: "",
          }));

        }catch(err) {
          setAuthState((authState) => ({ ...authState, error: true }));
        }
              
    }

    //When user decides to signup, send payload and verify with server
    async function signup({username, password, email}){
      if (!username || !password) return;
      setAuthState((authState) => ({ ...authState, isFetching: true }));
        try {
          await api.addUser({ username, email, password })
          .then(resp => {
            console.log(resp);
            if(resp !== undefined || resp !== null){
              setSignupPayload((SignupPayload)=>({
                ...SignupPayload,
                signupSuccess: true,
                newSignup: false,
                username: "",
                password: "",
              }));
            }
          })
        }catch(err) {
          setAuthState((authState) => ({ ...authState, error: true }));
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
        ...authState,
        ...SignupPayload,
        setLoginPayload,
        setSignupPayload,
        setAuthState
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}