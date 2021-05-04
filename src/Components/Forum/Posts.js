import React, {useState,  useContext} from 'react';
import {BsFillTrashFill} from "react-icons/bs";
import {APIContext} from "../APIContext"

export default function Posts(props){

        let api = useContext(APIContext);

        const {POSTID, author, CID, UID, title, body, likes, created_at} = props.postinfo;


        let theseLikes = Number.parseInt(likes);
        let thisColor = "";


        const [state, setState] = useState({
            like: theseLikes
        })

    
        var thisCategory = "";
        
        async function deleteThisPost(POSTID){
            await api.deletePost({POSTID}).then(resp =>{
                window.location.reload(true);
            })
        }

        async function likeThisPost(POSTID){
            await api.likePost({POSTID})
        }

        const deleteClicked = (e) =>{
            e.preventDefault();
            deleteThisPost(POSTID)
        }

        const likeClicked = (e) =>{
            e.preventDefault();
            setState({...state, like: state.like+1})
            likeThisPost(POSTID)
        }

        switch(CID){
            case "1":
                thisCategory = "Mental Health";
                thisColor =  "container m-auto"
                break;
            case "2":                
                thisCategory = "General Health";
                thisColor =  "container m-auto"
                break;
            case "3":
                thisCategory = "Diet Health";
                thisColor =  "container m-auto"
                break;
            case "4":
                thisCategory = "Fitness Health";
                thisColor =  "container m-auto"
                break;
            default:
                thisCategory = "No Category"
                break;
        }


        let {like} = state;

        return(
            <>
                <div className = "p-3"></div>          
                
                    <div className = {thisColor} style = {{border:"2px solid black",  borderRadius: "4px", backgroundColor:"#f1f1f1"}}>
    
                    <div class="card-body p-2 p-sm-3" >
                        <div className = "row m-auto p-auto">
                            <div class="media-body m-auto p-auto">
                                <h4>{author}</h4>
                                <h6>{thisCategory}  |  {title}</h6>    
                            </div>
                            <div class="row text-muted small text-center align-self-center m-auto p-1">
                                {
                                    (sessionStorage.getItem("session_id") === UID)?
                                        <>
                                            <h4 className="col-md-5 m-auto p-1" onClick = {likeClicked}>&#9734;{like}</h4>
                                            <div className = "col-md-2"></div>
                                            <button className = "col-md-5 btn btn-outline-dark" onClick={deleteClicked}>Delete <BsFillTrashFill/></button>
                                        </>
                                    :
                                        <>
                                            <div className = "col"></div>
                                            <button className="col btn btn-outline-dark" onClick = {likeClicked}>&#9734;{like}</button>
                                            <div className = "col"></div>
                                        </>
                                }
                            </div> 
                        </div>
                        <hr className = "solid" style = {{color:"black"}}></hr>                
                        <div className = "row m-auto">
                            <p>{body}</p>
                        </div>
                        <br></br>
                        <div className = "row">
                            <div className = "col-md-6">
                                
                            </div>
                            <div className = "col-md-6">
                                <p style = {{fontSize:"12px"}}>Posted: {created_at}</p>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div className = "p-3"></div>
            </>
        )
    
}
