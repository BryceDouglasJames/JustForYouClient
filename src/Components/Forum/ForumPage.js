import React from 'react';
import { Link } from 'react-router-dom';
import Posts from "../Forum/Posts"
import "bootstrap/dist/css/bootstrap.min.css"
import {AllPosts} from "../HydrationProviders/AllUserPosts" 
import "../../background.css"
import {GiBrain,GiHelp,GiNewspaper,GiOpenBook, GiConversation} from "react-icons/gi";

function ForumPage(){
    let postArray = AllPosts;
    let tempArray = [{}];

    /*
    * TODO: ADD ALGORTIGMS TO CONRTOL SORT
    */
    const selectFilter = (e) =>{
        postArray = tempArray;
        postArray = [{}];
        var index = 0;
        tempArray.forEach(post => {
            if(post.CID === "3"){
                postArray[index++] = post;
            }  
        });
    }
    
    return ( 
        <>
            <div class="container-fluid text-center m-auto forum">
                <br></br><br></br>
                <div class="container m-auto">
                    <div className = "row p-5 m-auto" style = {{height: "100%", backgroundColor:"gainsboro", textAlign:"center", border:"1px solid black",}}>    
                        
                        {/*FORUN RESOURCES SECTION*/}
                        <div className = "col-md-8 m-auto p-auto">
                            <h2 className = "font-weight-light">Forum</h2>
                            <br></br>
                            <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} ><GiNewspaper/>&ensp;Public Health News</button>
                            <br></br><br></br>
                            <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}}><GiBrain/>&ensp;Mental Resources</button>
                            <br></br><br></br>
                            <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}}><GiConversation />&ensp;People and Groups</button>
                            <br></br><br></br>
                            <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}}><GiHelp />&ensp;How to get help</button>
                            <br></br><br></br>
                            <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}}><GiOpenBook />&ensp;More Resources</button>
                            <br></br><br></br>
                        </div>

                        {/*SORT DROPDOWN*/}  
                        <div className = "col-md-4 m-auto p-auto" style = {{textAlign:"center"}}>
                            <h2 className = "font-weight-light">Sort by</h2>
                            <select className = "row m-auto p-2" name = "activity" id = "activity" style = {{width:"65%"}} onChange={selectFilter}>
                                <option selected="selected">----</option>
                                <option value = "name">Name A-Z</option>
                                <option value = "date">Date Created</option>
                                <option value = "diet">Diet</option>
                                <option value = "fitness">Fitness</option>
                                <option value = "mental">Mental</option>
                                <option value = "personal">Personal</option>
                            </select>
                            <br></br>

                            {/*NEW POST BUTTON*/}
                            <Link to ="/posts/new">
                                <button className = "btn btn-outline-dark" style = {{fontSize:"110%"}}><h3>+ Make a new post</h3></button>
                            </Link>
                        </div>  
                    </div>
                </div>

                {/* FOR EACH POST FROM TABLE, CONTAIN AND MAP EACH COMPNENT. IF NONE, DISPLAY ERROR*/}
                <div class="container row m-auto">
                        {
                            (postArray[0].POSTID !== undefined ) ?
                                postArray.map((postdata) => 
                                <>
                                    <div className = "col-md-6">
                                        <Posts postinfo = {postdata}></Posts>
                                    </div>
                                </>
                                )
                            :
                            <>
                            <div className = "row p-5" style = {{height: "100%"}}></div>
                            <h3>There aren't any posts to be displayed :(</h3>   
                            <div className = "row p-5" style = {{height: "100%"}}></div>
                            </>
                        }

                
                        {/*EXTRA CONTAINER FOR GRID SYMMETRY*/}
                        <div className = "col m-auto" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <div className = "row p-3" style = {{height: "100%"}}></div>
                            <h3 className = "font-weight-light m-auto" style = {{width:"70%"}}>Hey there! We see you working hard. Keep checking for new question and resources to keep you on track.</h3>
                            <div className = "row p-4" style = {{height: "100%"}}></div>
                            <button className = "btn btn-dark" style = {{width:"45%"}}>Head home</button>
                            <div className = "row p-3" style = {{height: "100%"}}></div>
                        </div>                        
                </div>
                <div className = "row p-5" style = {{height: "100%"}}></div>
            </div>
        </>    
    )
}

export default ForumPage

