import React, {useContext, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import QuestionPopup from "../Assistant/QuestionsPopup"
import "bootstrap/dist/css/bootstrap.min.css"


export default function Home(){
    const {showQuestions} = new useContext(UserContext);

    const[state, setState] = new useState({

    });

    if(showQuestions){
        return(
            <QuestionPopup></QuestionPopup>
        )
    }else{
        return (
            <>
                <div className = "m-auto p-auto" style = {{textAlign:"center"}}>
                    <br></br><br></br>
                    <h2>Hey there, you'll see something here soon for the home page ;)</h2>
                </div>


                
            </>
        );
    }
}

