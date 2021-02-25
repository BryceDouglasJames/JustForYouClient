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
        let formattedPayload = new FormData();
        for(var key in payload){
            formattedPayload.append(key, payload[key]);
        };

        //wait for response from server, if there is an error do not move forward.
        const resp = await this.callbackInstance.post(endpoint, formattedPayload);
        if(resp.headers = 501){
            throw new Error("Post failed. ")
            
        }else{
            window.sessionStorage.setItem("pass", "HELLO");
            console.log(resp);
        }
        return resp.data;
    }

    async authenticateUser({username, password}){
        const response = await this.API_POST({
            endpoint: "http://192.168.64.2/JustForYouAPI/public/auth",
            payload: { username, password },
        });

        window.sessionStorage.setItem("pass", "HOEEEE");
        console.log(response);
    }

    get isAuthenticated() {
        return false;
    }

    get getCurrentUser(){
        return
    }
}

