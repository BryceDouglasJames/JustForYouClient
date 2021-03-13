import React, {useContext, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import "bootstrap/dist/css/bootstrap.min.css"

export default function QuestionPopup(){

    const {setUserState} = new useContext(
        UserContext
    );

    const[state, setState] = new useState({
        questionAnswer: 0,
        answered: false
    });

    const questionAnswered = (e) =>{
        e.preventDefault();
        let answer = state.answer;
        setState({...state, answered: true});
        setUserState({showQuestions: false});
    }

    return(
        <div className = "row m-auto p-5">
                <div className = "card m-auto p-3" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                    <div className = "card-title p-5 m-auto" style = {{textAlign:"center"}}>
                        <h3 style={{fontOpticalSizing:'auto'}}>Hello! How are you feeling today?</h3>
                    </div>
                    <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%"}}>
                        <div className="container" style ={{textAlign:"center"}}>
                            <div className="row m-auto p-auto">
                                <div className = "col-1">
                                    <input type="checkbox" class="form-check-input"/>
                                </div>
                                <div className = "col-11 m-auto p-auto">
                                    <p>This is the first row</p>
                                </div>
                            </div>
                            <br></br>
                            <div className="row m-auto p-auto">
                                <div className = "col-1">
                                    <input type="checkbox" class="form-check-input"/>
                                </div>
                                <div className = "col-11">
                                    <p>This is the Second row</p>
                                </div>
                            </div>
                            <br></br>
                            <div className="row m-auto p-auto">
                                <div className = "col-1">
                                    <input type="checkbox" class="form-check-input"/>
                                </div>
                                <div className = "col-11">
                                    <p>This is the Third row</p>
                                </div>
                            </div>
                            <br></br>
                            <div className="row m-auto p-auto">
                                <div className = "col-1">
                                    <input type="checkbox" class="form-check-input"/>
                                </div>
                                <div className = "col-11">
                                    <p>This is the fourth row</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type = "button" className = "btn btn-outline-secondary m-5" onClick={questionAnswered}>Submit</button>
                </div>
            </div>
    );
}