import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import Posts from "../Forum/Posts"
import {Link} from "react-router-dom"
import {getRandomPostByCategory, MentalLikes, MentalPosts, MentalQuestionsAnswered} from "../HydrationProviders/AllUserPosts"
import {TodaysMentalScore} from "../HydrationProviders/AllUserScores";
import QuestionPopup from "./QuestionsPopup"
import {mentalSuggestions} from "../HydrationProviders/AllUserSuggestions";


export default function MentalPage(){
    let postArray = getRandomPostByCategory("Mental");
    console.log(MentalQuestionsAnswered);
    {/*
    *   HANDLES STATE FOR DISPLAYING A QUESTION WHEN PROMPTED
    */} 
    const[state, setState] = new useState({
        showQuestion: false,
        Suggestions: ["Hello"],
    });

    {/*
    *   QUESTION DISPLAY HANDLER
    */}
    const displayQuestion = (e) =>{
        e.preventDefault();
        setState({...state, showQuestion: true});
    } 

    {/*
    *   ASSIGN STATE VARIABLES
    */} 
    let {Suggestions, showQuestion} = state;

    {/*
    *   TODO: GET RID OF ONCE YOU HAVE SUGGESTIONS
    */}
    if(Suggestions.length === 0){
        return(
            <>
                <h1>Hey, looks like this is working</h1>
            </>
        )
    }else 
    
    {/*
    *  IF QUESTION STATE IS TRIGGERED, DISPLAY QUESTION 
    */}
    if(showQuestion){
        return <QuestionPopup category = {"Mental"}></QuestionPopup>
    }else{
        var sug1 = mentalSuggestions[Math.floor(Math.random()*mentalSuggestions.length)];
        var sug2 = mentalSuggestions[Math.floor(Math.random()*mentalSuggestions.length)];
        return(
            <>
                {/*
                *   DISPLAY USER SOCRE AND AFFIRMATION
                */}
                <div className = "row m-auto p-2">
                    <div className = "row m-auto p-auto">
                        <div className = "m-auto p-auto font-weight-light" style = {{textAlign:"center"}}>
                            {
                                (TodaysMentalScore === 0) ? <h3 className = "font-weight-light" style = {{color:"white"}}><br></br><br></br>Overall Score: {TodaysMentalScore}<br></br><br></br>You're just getting started. Answer some questions and work on raising your score!</h3>:<></>
                            }
                            {
                                (TodaysMentalScore >= 1  && TodaysMentalScore <= 45) ? <h3 className = "font-weight-light" style = {{color:"white"}}><br></br><br></br>Overall Score: {TodaysMentalScore}<br></br><br></br>Let's get moving! We can do this together.</h3>:<></>
                            }
                            {
                                (TodaysMentalScore > 45  && TodaysMentalScore <= 75) ? <h3 className = "font-weight-light" style = {{color:"white"}}><br></br><br></br>Overall Score: {TodaysMentalScore}<br></br><br></br>You're doing good, but can do better. Stay on track!</h3>:<></>
                            }
                            {
                                (TodaysMentalScore > 75   && TodaysMentalScore <= 100) ? <h3 className = "font-weight-light" style = {{color:"white"}}><br></br><br></br>Overall Score: {TodaysMentalScore}<br></br><br></br>You're doing great, keep it up!</h3>:<></>
                            }
                        </div>
                    </div>
                </div>
                <br></br><hr className = "solid" style = {{color:"black"}}></hr> 

                {/*
                *   FITNESS TAB CONTAINER
                */}                
                <div className = "p-5 m-auto mental">
                    <div className = "row m-auto p-auto ">

                        {/*
                        *   SUGGESTIONS/POSTS RECORD
                        */}
                        <div className = "col-md-6 m-auto p-5 font-weight-light" style = {{width:"100%", fontSize:"20px", textAlign: "center"}}>
                            <h3>So far you have answered {MentalQuestionsAnswered} mental related questions.</h3>
                            <br></br>
                            <h3>You've posted about {MentalPosts} times in this category.</h3>
                            <br></br>
                            <h3>You have a total of {MentalLikes} likes on your posts.</h3>
                            <br></br><br></br><br></br>
                            <h2>Assistant Suggestions</h2>
                            <p>{sug1}</p>
                            <p>{sug2}</p>
                            <br></br><br></br>
                        </div>
                        <div className ="col-md-1"></div>

                        {/*
                        *   POST DISPLAY CONTAINER
                        */}
                        <div className = "col-md-5 m-auto p-5 font-weight-light" style = {{border: "2px solid black", fontSize:"20px", height: "100%", position:"sticky"}}>
                            <h1>Your posts</h1>
                            {
                                (postArray[0].POSTID !== undefined) ?
                                    postArray.map((postdata) =>
                                        <Posts postinfo = {postdata} style = {{backgroundColor:"white"}}></Posts>
                                    )
                                :
                                <>
                                <br></br>
                                <h3>No posts for this category.</h3>   
                                <br></br> 
                                </>
                            }

                            {/*
                            *   NEW POST BUTTON
                            */}
                            <Link to = "/posts/new">
                                <button className = "btn btn-dark" style = {{fontSize:"110%"}}><h3>+ Make a new post</h3></button>
                            </Link>                           
                        </div>
                    </div>

                    {/*
                    *   QUESTION DISPLAY BUTTON CONTAINER
                    */}
                    <br></br><br></br><br></br>
                    <button className = "btn btn-dark m-auto p-auto" style = {{width:"100%", fontSize:"70%"}} onClick={displayQuestion}><h3>Answer mental questions</h3></button>
                    <br></br><br></br><br></br><br></br><br></br><br></br>

                    {/*
                    *   ACTIVITY TAB FOOTER   
                    */}
                    <div className = "row m-auto p-auto">
                        <hr className = "solid" style = {{color:"black"}}></hr>                
                        <div className = "col-md-5 m-auto p-5" style={{border:"2px solid black", backgroundColor:"white"}}>
                            <h4>Been a while? Update your profile here.</h4>
                            <br></br>
                            <Link to = "/settings">
                                <button type = "button" className = "btn btn-dark p-1 m-auto">Go to settings</button>    
                            </Link>
                        </div>
                    </div> 
                </div>
            </>
        );
    }
}