import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import {APIContext} from "../APIContext"

export default function QuestionPopup(){

    let api = useContext(APIContext);

    const {setUserState} = new useContext(
        UserContext
    );

    const[state, setState] = new useState({
        question: "",
        answers: [],
        questionAnswer: 0,
        answered: false
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
                let response = "";
                let answerString = "";
                await api.getQuestion().then(resp=>response = resp.data);

                /*console.log(response.Answers)
                for(let i = 0; i < response.Answers.length; i++){
                    let temp = parseInt(response.Answers[i]);
                    if(isNaN(temp)){
                        answerString = answerString + response.Answers[i];
                    }else{
                        answerString = answerString + response.Answers[i];
                    }
                }*/

                console.log(answerString);
                setState({
                    ...state, 
                    question: response.Question_Text,
                    answers: response.Answers
                });

            }catch(error){
                console.log(error);
            }
        }
        questionGrabber();
    }, [setState]);


    let {question, answers} = state;

    if(question === ""){
        return(
            <>
                <h1 className = "m-auto"></h1>
            </>
        )
    }else{
        
        return(
            <div className = "row m-auto p-5">
                    <div className = "card m-auto p-3" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                        <div className = "card-title p-5 m-auto" style = {{textAlign:"center"}}>
                            <h3 style={{fontSize:"100%"}}>{question}</h3>
                        </div>
                        <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%"}}>
                            <div className="container" style ={{textAlign:"center"}}>
                                
                                {
                                    Object.entries(JSON.parse(answers)).map((key,i, s)=>(
                                        <>
                                        <div className="row m-auto p-auto">
                                            <div className = "col-1">
                                                <input type="checkbox" class="form-check-input"/>
                                            </div>
                                            <div className = "col-11 m-auto p-auto">
                                                <p>{
                                                //format the key looks like garbage but it works
                                                key.toString().substring(2,key.toString().length)
                                                }</p>

                                            </div>
                                        </div>
                                        <br></br> 
                                        </>
                                    ))
                                }

                            </div>
                        </div>
                        <button type = "button" className = "btn btn-outline-secondary m-5" onClick={questionAnswered}>Submit</button>
                    </div>
                </div>
        );
    }
}