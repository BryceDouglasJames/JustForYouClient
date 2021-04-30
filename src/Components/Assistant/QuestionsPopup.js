import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import {APIContext} from "../APIContext"

export default function(props){

    let api = useContext(APIContext);
    let answerIndex = 1;
    let category = props.category
    let CategoryName = "";
    let response = "";

    switch(category){
        case "Mental":
            category = "1";
            CategoryName = "Mental Health"
            break;
        case "General":
            category = "2";
            CategoryName = "General Health";
            break;
        case "Diet":
            category = "3";
            CategoryName = "Diet Health";
            break;
        case "Fitness":
            category = "4";
            CategoryName = "Fitness";
            break;
        default:
            category="-1";
            break
    }

    const {setUserState} = new useContext(
        UserContext
    );

    const[state, setState] = new useState({
        username: sessionStorage.getItem("USERNAME"),
        AID: 0,
        question: "",
        answers: [],
        questionAnswer: 0,
        answered: false,
        canFetch: true
    });

    const questionAnswered = (e) =>{
        e.preventDefault();
        sendAnswer({state});
        //window.location.reload(false);
    }

    const selectAnswer = (e) =>{
        e.preventDefault();
        let index = e.target.value;
        console.log(index);
        setState({...state, questionAnswer: index});
    }

    async function sendAnswer(){
        try{
            await api.sendQuestionAnswer({state});
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        async function questionGrabber(){
            try{
                await api.getQuestionByCategory("1").then(resp=>{
                        response = resp.data                    
                });

                setState({
                    ...state, 
                    AID: response.Question_ID,
                    question: response.Question_Text,
                    answers: response.Answers,
                    canFetch: false
                });

            }catch(error){
                console.log(error);
            }
        }
        if(state.canFetch === true){
            questionGrabber();
        }
    }, [setState, state]);


    let {question, answers} = state;

    if(question === ""){
        return(
            <>
                <h1 className = "m-auto">Seems like there are no questions to show...</h1>
            </>
        )
    }else{
        return(
            <div className = "row m-auto p-5">
                    <div className = "card m-auto p-3" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                        <div className = "card-title p-5 m-auto" style = {{textAlign:"center"}}>
                            <h2>{CategoryName}</h2>
                            <hr></hr>
                            <h3 style={{fontSize:"100%"}}>{question}</h3>
                        </div>
                        <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%"}}>
                            <div className="container" style ={{textAlign:"center"}}>
                                
                                {
                                    Object.entries(JSON.parse(answers)).map((key,i, s)=>(
                                        <>
                                        <div className="row m-auto p-auto">
                                            <div className = "col m-auto">
                                                <button className = "btn btn-outline-dark" value = {answerIndex++} onClick = {selectAnswer} style = {{width:"100%"}}>
                                                {
                                                    //format the key looks like garbage but it works
                                                    key.toString().substring(2,key.toString().length)
                                                }
                                                </button>
                                            </div>
                                        </div>
                                        <br></br> 
                                        </>
                                    ))
                                }

                            </div>
                        </div>
                        <button type = "button" className = "btn btn-dark m-5" onClick={questionAnswered}>Submit answer</button>
                    </div>
                </div>
        );
    }
}