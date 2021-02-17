/*
This class is CRUCIAL towards providing the user with all of their props in an easy manner. 
With context, you can create subscriptions all throughout the application and your API.

Every user feature should be added here.
*/

import React, {createContext, Component} from "react";

export const UserContext = new createContext({});

export default class UserProvider extends Component{
    constructor(){
        super();
    }

    state = {
        thisUser: null
    }

    render(){
        const UserAttributes = {
            userState: this.state
        }
        return(
            <UserContext.Provider value = {UserAttributes}>{this.props.children}</UserContext.Provider>
        )
    }
}
