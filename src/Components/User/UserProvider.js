/*
This class is CRUCIAL towards providing the user with all of their props in an easy manner. 
With context, you can create subscriptions all throughout the application and your API.

Every user feature should be added here.
*/

import React, {createContext, useContext, useState, useEffect} from "react";
import {APIContext} from "../APIContext"
import { AuthenticationContext } from "./AuthenticationProvider";

export const UserContext = new createContext();

export default function UserProvider({ children }) {
    const api = useContext(APIContext);
    let  {isAuthenticated, userUpdate, setAuthState, authState, loginPayload} = useContext(AuthenticationContext);

    //GETTER AND SETTER STATE
    const [userState, setUserState] = useState({
      id: null,
      username: "",
      password: "",
      userFetch: false,
      userRole: null,
      showQuestions: false,
      newUser: false,
      error: false
    });
  
    useEffect(() => {
      //Sends request to server to get updates about user, session data, cookies, etc.
      async function getCurrentUser({ username, password }) {
        if (!username || !password) return;
        try {
          await api.getUserAccount({ username, password }).then(resp =>{
            console.log(resp);
          });
          setUserState((userState) => ({
            ...userState,
            error: false,
          }));
        } catch (err) {
          console.log(err);
          setUserState((userState) => ({ ...userState, error: true }));
        }
      }
  
      //let {userFetch} = userState;
      if(isAuthenticated && sessionStorage.getItem("USERNAME") !== null && userUpdate){
        let username = sessionStorage.getItem("USERNAME")
        getCurrentUser({username, password:"password"});
        setAuthState((authState) => ({...authState, userUpdate: false}))
      }

    }, [api, isAuthenticated, userState]);
  
    return <UserContext.Provider value={{ 
        ...userState,
        setUserState 
      }}>{children}</UserContext.Provider>;
  }

