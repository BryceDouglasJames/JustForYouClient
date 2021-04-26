import React, {useState, useContext} from "react"
import {Redirect} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import {APIContext} from "../APIContext"


export default function UserPostForm(){
    const api = useContext(APIContext);

    const [state, setState] = useState({
        username: "",
        category: null,
        title: "",
        body:""
    });

    const setBody = (e) =>{
        let currentMessage = e.target.value;
        setState({...state, body: currentMessage});
    }
    const setTitle = (e) =>{
        let thisTitle = e.target.value;
        setState({...state, title: thisTitle});
    }

    const setCategory = (e) =>{
        var temp = null;
        switch(e.target.value){
            case "Mental Health":
                temp = 1
                break;
            case "Personal Health":
                temp = 2
                break;
            case "Diet":
                temp = 3;
                break;
            case "Fitness":  
                temp = 4;  
                break;
            default:
                temp = -1;
                break;
        }

        setState({...state, category: temp});
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        setState({...state, username: sessionStorage.getItem("USERNAME")})
        sendPost({state});
        //window.location.reload(true);
    }

    async function sendPost({state}){
        await api.uploadPost(state.username, state.title, state.category, state.body).then(resp =>{
            alert("Post uploaded!");
        })
    }

    const{category, body, title} = state;

    return(
        <div className = "forum">
            <div className = "row p-3"></div>
            <form className = "m-auto p-2" style = {{textAlign: "center"}} onSubmit = {onSubmit}>
                <div className = "row m-auto p-5" style = {{height:"100%"}}>
                    <div className = "card m-auto p-3" style = {{width: "80rem", height: "auto", alignItems: "center", backgroundColor: "gainsboro", textAlight:"center"}}>
                        <div className="row m-auto">
                            <div className = "col m-auto">
                                <div className = "row p-4"></div>
                                <h3 className = "m-auto font-weight-light" htmlFor="activity">Category</h3>
                                <div className = "row p-2"></div>
                                <select className = "col m-auto" name = "activity" id = "activity" style = {{width:"100%"}} onChange={setCategory}>
                                    <option selected="selected">----</option>
                                    <option value = "Mental Health">Mental Health</option>
                                    <option value = "Personal Health">Personal Health</option>
                                    <option value = "Diet">Diet</option>
                                    <option value = "Fitness">Fitness</option>
                                </select>
                                <div className = "row p-2"></div>
                            </div>
                            <div className = "col">
                                <div className = "row p-4"></div>
                                <h3 className = "m-auto font-weight-light" htmlFor="activity">Title</h3>
                                <div className = "row p-2"></div>
                                <input className = "m-auto" onChange = {setTitle}></input>
                                <div className = "row p-2"></div>
                            </div>
                        </div>
                        <div className="form row m-auto p-3">
                            <br></br><br></br>
                            <div className="row m-auto" style = {{width: "100%"}}>
                                <div className = "row p-2"></div>
                                <h2 className = "m-auto font-weight-light" htmlFor="body">Say what's up!</h2>
                                <div className = "row p-2"></div>
                                <br></br>
                                <textarea 
                                    name = "body"
                                    cols="50"
                                    rows="20"
                                    onChange={setBody}
                                    style = {{resize: "none"}}
                                />
                            </div>
                        </div>
                        <div className="footer">
                            <button type = "button" className = "btn btn-dark" style = {{fontSize:"100%"}} onClick={onSubmit}>Submit Post</button>
                        </div>
                    </div>
                </div>
            </form>
            <div className = "row p-4"></div>
        </div>
    );
}