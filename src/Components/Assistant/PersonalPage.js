import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import {APIContext} from "../APIContext"
import Posts from "../Forum/Posts"
import styles from "../../background.css"
import { Line } from 'react-chartjs-2';
import {Link} from "react-router-dom";

import {AllPosts, getRandomPostByCategory, PersonalLikes, PersonalPosts} from "../AllUserPosts"



export default function PersonalPage(){

    let api = useContext(APIContext);
    let postArray = getRandomPostByCategory("Personal");


    const {setUserState} = new useContext(
        UserContext
    );

    const[state, setState] = new useState({
        Suggestions: ["Hello"],
    });

    const questionAnswered = (e) =>{
        e.preventDefault();
        let answer = state.answer;
        setState({...state, answered: true});
        setUserState({showQuestions: false});
    }

    useEffect(()=>{
        async function questionGrabber(){
            try{
                setState({
                    ...state, 
                });

            }catch(error){
                console.log(error);
            }
        }
        questionGrabber();
    }, [setState]);


    let {Suggestions} = state;

    if(Suggestions.length === 0){
        return(
            <>
                <h1>Hey, looks like this is working</h1>
            </>
        )
    }else{
        return(
            <>
                <div className = "row m-auto p-2">
                    <div className = "row m-auto p-auto">
                        <div className = "m-auto p-auto font-weight-light" style = {{textAlign:"center"}}>
                            <h3 className = "font-weight-light" style={{color:"white"}}><br></br><br></br>Overall Score: 64<br></br><br></br>You're doing good, but can do better. Stay on track!</h3>
                        </div>
                    </div>
                </div>
                <br></br><hr className = "solid" style = {{color:"black"}}></hr>                
                <div className = "p-5 m-auto personal">
                    <div className = "row m-auto p-auto ">
                        <div className = "col-md-6 m-auto p-5 font-weight-light" style = {{width:"100%", fontSize:"20px", textAlign: "center"}}>
                            <h2>Assistant Suggestions</h2>
                            <p>Have you every sat and read without being told to do so? Try it out for an hour a day this week.</p>
                            <br></br>
                            <p>Call an old friend. Or, try reaching out to some relative and catch up.</p>
                            <br></br>
                            <p>Write down 5 things you wish to accomlish in the next month and make a plan on how you can accompish each goal.</p>
                            <br></br><br></br><br></br>
                            <h3>So far you have answered 23 mental related questions.</h3>
                            <br></br>
                            <h3>You've posted about {PersonalPosts} times in this category.</h3>
                            <br></br>
                            <h3>You have a total of {PersonalLikes} likes on your posts. People seem to like you!</h3>
                            <p></p>
                            <br></br><br></br>
                        </div>
                        <div className ="col-md-1"></div>
                        <div className = "col-md-5 m-auto p-5 font-weight-light" style = {{border: "2px solid black", fontSize:"20px", height: "100%", position:"sticky"}}>
                            <h1>Your posts</h1>
                            {
                                (postArray[0].POSTID !== undefined) ?
                                    postArray.map((postdata) =>
                                        <Posts postinfo = {postdata}></Posts>
                                    )
                                :
                                <>
                                <br></br>
                                <h3>No posts for this category.</h3>   
                                <br></br> 
                                </>
                            }  

                            <Link to = "/posts/new">
                                <button className = "btn btn-dark" style = {{fontSize:"110%"}}><h3>+ Make a new post</h3></button>
                            </Link>
       
                        </div>
                    </div>
                    <br></br><br></br><br></br>
                    <div className = "row m-auto p-auto">
                        <h1 className = "p-5">Some things to keep you company</h1>
                        <hr className = "solid" style = {{color:"black"}}></hr>                
                        <div className = "col-md-5 m-auto p-5" style={{border:"2px solid black", height:"100%", backgroundColor:"white"}}>
                            <h4>Ask some questions and get some feedback</h4>
                            <br></br>
                            <button type = "button" className = "btn btn-dark p-auto" style = {{width:"33%"}}>Diet Questions</button>    
                        </div>
                        <div className = "col-md-5 m-auto p-5" style={{border:"2px solid black", backgroundColor:"white"}}>
                            <h4>Find some resources to look for guidence or help</h4>
                            <br></br>
                            <button type = "button" className = "btn btn-dark p-auto" style = {{width:"33%"}}>Resources</button>    
                        </div>
                        <div className = "col-md-5 m-auto p-5"></div>
                        <div className = "col-md-5 m-auto p-5"></div>
                        <div className = "col-md-5 m-auto p-5" style={{border:"2px solid black", backgroundColor:"white"}}>
                            <h4>Been a while? Update your profile here.</h4>
                            <br></br>
                            <button type = "button" className = "btn btn-dark p-auto" style = {{width:"33%"}}>Go to settings</button>    
                        </div>
                    </div> 
                </div>
            </>
        );
    }
}