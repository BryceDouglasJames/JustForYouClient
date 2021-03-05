/*
This class is CRUCIAL towards providing the user with all of their props in an easy manner. 
With context, you can create subscriptions all throughout the application and your API.

Every user feature should be added here.
*/

import React, {createContext, useContext, useState, useEffect} from "react";
import {APIContext} from "../APIContext"

/*export const UserContext = new createContext();

export default function UserProvider ({children}){

    const api = useContext(APIContext);

    const [state, setState] = useState({
        id: null,
        user: "",
        isFetching: false,
        userRole: null,
        error: false,
    });

    useEffect(() =>{

        //async function purposed towards updating user status every time a new page is fetched along with error handling
        //needs an await keyword in order to initiate.
        async function getCurrentUser() {
            setState((state) => ({ ...state, isFetching: true }));
            try {
              const { id, user: user, userRole } = await api.getCurrentUser();
              setState((state) => ({
                ...state,
                id,
                user,
                userRole,
                error: false,
              }));
            } catch (err) {
              console.log(err);
              setState((state) => ({ ...state, error: true }));
            }
            setState((state) => ({ ...state, isFetching: false }));
            console.log(state);
        }
      
        //grab the current user
        getCurrentUser();
    },[api]);

    return(
        <UserContext.Provider value = {{...state}}>{children}</UserContext.Provider>
    )
}*/

export const UserContext = new createContext();
export default function UserProvider({ provider, children }) {
    const api = useContext(APIContext);

    //GETTER AND SETTER STATE
    const [state, setState] = useState({
      id: null,
      userName: "",
      isFetching: false,
      userRole: null,
      error: false,
    });
  
    useEffect(() => {
      //Sends request to server to get updates about user, session data, cookies, etc.
      async function getCurrentUser() {
        setState((state) => ({ ...state, isFetching: true }));
        try {
          //const { id, username: userName, userRole } = await api.getCurrentUser();
          const { id, username: userName, userRole } = {id:"999", username:"Bryce"}
          setState((state) => ({
            ...state,
            id,
            userName,
            userRole,
            error: false,
          }));
        } catch (err) {
          console.log(err);
          setState((state) => ({ ...state, error: true }));
        }
        setState((state) => ({ ...state, isFetching: false }));
      }
  
      getCurrentUser();
    }, [api]);
  
    return (
      <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
    );
  }

