//import axios from 'axios'
export class API{

    constructor({ callbackInstance }) {
        this.callbackInstance = callbackInstance;
        this.headers = {};
    }

/**********************UNIVERSAL GET/POST METHODS************************/
    async API_POST({endpoint, payload}){
        let response;

        /**
         * Every post request needs to be formatted into form data for the 
         * sake of easy digestion.
         */
        let formattedPayload = new FormData();
        for(var key in payload){
            formattedPayload.append(key, payload[key]);
        };

        try{
            /*
            *use API context instance to make call using axios
            */
            await this.callbackInstance.post(endpoint, formattedPayload)            
            .then(resp =>{
                response = resp;
            });
        }catch(error){
            response = null;
        }
        return response;
    }

    async API_GET({endpoint}){
        let response;
        try{
            /*
            *use API context instance to make call using axios
            */            
            await this.callbackInstance.get(endpoint)            
            .then(resp =>{
                response = resp;
            });
        }catch(error){
            console.log(error);
            response = null;
        }
        //console.log(response);
        return response;
    }

/*****************************************************************/





/*******************USER SESSION LOGIN/LOGOUT AND AUTH CALLS********************/

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

/*******************************************************************************/





/*****************************USER CONTROLLER CALLS************************************/

    async submitUserInfo({username, Weight, DOB, Height, Activity, Disease}){

        /*
        *For the user data table, each user key is encoded to base64 for the 
        *sake of not reusing their usernames for the key
        */
        let encodedKey = btoa(username);

        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/settings/basicinfo",
            payload: { username, Weight, DOB, Height, Activity, Disease, PROVID:encodedKey },
        })
    }

    async addUser({username, email, password}){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/create",
            payload: { username, password, email },
        })
    }

    async getUserAccount({username, password}){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/auth",
            payload: { username, password },
        })
    }

    async getProfileStats(){
        
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/settings/get/basicinfo",
            payload: { username: sessionStorage.getItem("USERNAME")}
        })
    }

/*******************************************************************************/





/**********************************POST MANAGEMNET CALLS**************************************/

    async getAllPosts(){
        return await this.API_GET({
            endpoint:  "http://192.168.64.3/justforyouapi/public/forum/post/getall"
        })
    }

    async deletePost({POSTID}){
        return await this.API_POST({
            endpoint:  "http://192.168.64.3/justforyouapi/public/forum/post/delete",
            payload:{username:sessionStorage.getItem("USERNAME"), post_id:POSTID}
        })
    }

    async uploadPost(username, title, category, body){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/forum/post/create",
            payload: {username: username, category: category, title: title, body: body}
        })
    }

    async likePost({POSTID}){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/forum/post/like",
            payload: {post_id: POSTID}
        })
    }

/*******************************************************************************/





/**************************************QUESTION CONTROL CALLS***************************************/

    async getQuestion(){
        return await this.API_GET({
            endpoint:  "http://192.168.64.3/justforyouapi/public/grab/question"
        })
    }

    async getQuestionByCategory(Category){
        return await this.API_POST({
            endpoint:  "http://192.168.64.3/justforyouapi/public/grab/question/category",
            payload: {category: Category}
        })
    }

    async sendQuestionAnswer({state}){
        let user = state.username;
        let aid = state.AID;
        let caid = state.CAID;
        let answer = state.questionAnswer
        return await this.API_POST({
            endpoint:  "http://192.168.64.3/justforyouapi/public/grab/question/answered",
            payload: {username: user, AID: aid, CAID: caid, questionAnswer: answer}
        })
    }

/*******************************************************************************/



/***************************************MIS USER FUNCTIONS**************************************/

    async setUserPFP({file}){
        let username = sessionStorage.getItem("USERNAME");
        let session_id = sessionStorage.getItem("session_id");
        let filecontext = await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/users/set/pfp",
            payload: { username, session_id, file },
        })
        return filecontext;
    }

    async getQuote(){
        return await this.API_GET({
            endpoint:  "https://quotes.rest/qod"
        })
    }

/*******************************************************************************/


/************************************ACTIVITY SCORES/ ASSISTANT METHODS***************************************/
    async getScores(){
        return await this.API_POST({
            endpoint: "http://192.168.64.3/justforyouapi/public/testing/scores",
            payload: {username: sessionStorage.getItem("USERNAME")}
        })
    }
/*******************************************************************************/



}

