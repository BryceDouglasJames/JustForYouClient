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

    async authenticateUser({username, password}){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/auth",
            payload: { username, password },
        })
    }

    get isAuthenticated() {
        return false;
    }

    async addUser({username, email, password}){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/create",
            payload: { username, password, email },
        })
    }
}

