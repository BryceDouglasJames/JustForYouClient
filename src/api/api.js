//import axios from 'axios'
export class API{
    userRoles = {
        0: "Admin",
        1: "User"
    };

    constructor({ callbackInstance }) {
        this.callbackInstance = callbackInstance;
        this.headers = {};
    }

    //universal post function. Returns response for user to synthesize.
    async API_POST({endpoint, payload}){
        //for the purpose of sending data neatly, we create a form so that a key can be assigned to each value
        let response;
        let formattedPayload = new FormData();
        for(var key in payload){
            formattedPayload.append(key, payload[key]);
        };

        console.log(formattedPayload);
        try{
            //wait for response from server, if there is an error do not move forward.
            await this.callbackInstance.post(endpoint, formattedPayload)            
            .then(resp =>{
                response = resp;
            });
        }catch(error){
            console.log(error);
            response = null;
        }
        console.log(response);
        return response;
    }

    async API_GET({endpoint}){
        let response;
        try{
            //wait for response from server, if there is an error do not move forward.
            await this.callbackInstance.get(endpoint)            
            .then(resp =>{
                response = resp;
            });
        }catch(error){
            console.log(error);
            response = null;
        }
        console.log(response);
        return response;
    }

    //handles authentication call
    async authenticateUser({username, session_id}){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/auth",
            payload: { username, session_id },
        })
    }

    async loginUser({username, password}){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/login",
            payload: { username, password },
        })
    }
    async submitUserInfo({username, Weight, DOB, Height, Activity, Disease}){
        let encodedKey = btoa(username);
        return await this.API_POST({
            endpoint: "http://137.140.141.39/justforyouapi/public/users/settings/basicinfo",
            payload: { username, Weight, DOB, Height, Activity, Disease, PROVID:encodedKey },
        })
    }

    //handles sneding post payload with new user signup
    async addUser({username, email, password}){
        console.log("YAY");
        return await this.API_POST({
            endpoint: "http://137.140.141.39/justforyouapi/public/users/create",
            payload: { username, password, email },
        })
    }

    async getUserAccount({username, password}){
        let user = await this.API_POST({
            endpoint: "http://137.140.141.39/justforyouapi/public/users/auth",
            payload: { username, password },
        })

        return user;
    }

    async getQuestion(){
        let question = await this.API_GET({
            endpoint:  "http://137.140.141.39/justforyouapi/public/grab/question"
        })
        return question;
    }

    async getQuote(){
        let quote = await this.API_GET({
            endpoint:  "https://quotes.rest/qod"
        })
        return quote;
    }

    //GETTERS AND SETTERS
    get isAuthenticated() {
        return false;
    }
}

