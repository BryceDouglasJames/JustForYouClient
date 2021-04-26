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
            endpoint: "http://192.168.64.3/justforyouapi/public/users/settings/basicinfo",
            payload: { username, Weight, DOB, Height, Activity, Disease, PROVID:encodedKey },
        })
    }

    //handles sneding post payload with new user signup
    async addUser({username, email, password}){
        console.log("YAY");
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/create",
            payload: { username, password, email },
        })
    }

    async getUserAccount({username, password}){
        let user = await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/auth",
            payload: { username, password },
        })

        return user;
    }

    async setUserPFP({file}){
        let username = sessionStorage.getItem("USERNAME");
        let session_id = sessionStorage.getItem("session_id");
        let filecontext = await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/set/pfp",
            payload: { username, session_id, file },
        })
        return filecontext;
    }

    async getQuestion(){
        let question = await this.API_GET({
            endpoint:  "http://192.168.64.3/justforyouapi/public/grab/question"
        })
        return question;
    }

    async getQuote(){
        let quote = await this.API_GET({
            endpoint:  "https://quotes.rest/qod"
        })
        return quote;
    }

    async getAllPosts(){
        let posts = await this.API_GET({
            endpoint:  "http://192.168.64.3/justforyouapi/public/forum/post/getall"
        })
        return posts;
    }

    async deletePost({POSTID}){
        let del = await this.API_POST({
            endpoint:  "http://192.168.64.3/justforyouapi/public/forum/post/delete",
            payload:{username:sessionStorage.getItem("USERNAME"), post_id:POSTID}
        })
        return del;
    }

    async uploadPost(username, title, category, body){
        let submit = await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/forum/post/create",
            payload: {username: username, category: category, title: title, body: body}
        })
        return submit;
    }

    async likePost({POSTID}){
        let like = await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/forum/post/like",
            payload: {post_id: POSTID}
        })
        return like;
    }

    //GETTERS AND SETTERS
    get isAuthenticated() {
        return false;
    }
}

