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
  const [authState, setAuthState] = useState({
    //isAuthenticated: api.isAuthenticated,
    isAuthenticated: false,
    isChecked: false,
    isFetching: false,
    userUpdate: false,
    sessionActive: true,
    error: false,
  });

  const [userState, setUserState] = useState({
    username: sessionStorage.getItem("USERNAME"),
    session_id: sessionStorage.getItem("session_id")
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
    async function authenticate(username, session_id) {
      if (!username || !session_id){
        return;
      }else{
        try {
          let result = false;
          await api.authenticateUser({ username, session_id }).then(resp =>{
            (resp === null) ? setAuthState((authState) => ({ ...authState, error: true })) : result = resp.data; 
          });
      
          if(result[1] === true){
            sessionStorage.setItem("NEWUSER", true);
            setAuthState((authState) => ({
              ...authState,
              isFetching: false,
              isAuthenticated: true,
              userUpdate: false,
              username: "",
              password: "",
            }));
          }else if(result[0] === true) {
            setAuthState((authState) => ({
              ...authState,
              isFetching: false,
              isAuthenticated: true,
              userUpdate: false,
              username: "",
              password: "",
            }));
          }
          else{
            setAuthState((authState) => ({
              ...authState,
              isFetching: false,
              isAuthenticated: false,
              userUpdate: false,
              username: "",
              password: "",
            }));
          }
        }catch(err) {
          setAuthState((authState) => ({ ...authState, error: true }));
        }          
      }
      setUserState({username: "", session_id: ""});
    }
    authenticate(userState.username, userState.session_id);
  }, [SignupPayload, api, userState, authState]);

  //Export provider
  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        ...SignupPayload,
        setUserState,
        setSignupPayload,
        setAuthState
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}