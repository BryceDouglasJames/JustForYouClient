import React, {useContext, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import QuestionPopup from "../Assistant/QuestionsPopup"
import "bootstrap/dist/css/bootstrap.min.css"
import {InfoSection} from './Components/InfoSection';

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
                    <h2>Welcome! <br></br>
                    <p>Hey there, you'll see something here soon for the home page ;)</p></h2>
                </div>
                <InfoSection {...homeObjTwo} />
            </>
        );
    }
}

export const homeObjTwo = {
    lightBg: false,
    lightText: true,
    lightTopLine: true,
    lightTextDesc: true,
    topLine: '100% Secure',
    headline: 'Stay protected 24/7 anywhere anytime',
    description:
      'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
    buttonLabel: 'Learn More',
    imgStart: '',
    // img: require('../../images/svg-1.svg'),
    alt: 'Vault'
  };
