import React, {useContext} from 'react';
import {APIContext} from "../APIContext"

{/*
*   SCORE ARRAYS
*/}
export var MentalScores = [];
export var PersonalScores = [];
export var DietScores = [];
export var FitnessScores = [];

{/*
*  SCORE VARIABLES
*/}
export var TodaysMentalScore
export var TodaysPersonalScore 
export var TodaysDietScore 
export var TodaysFitnessScore

export default function GetUserScores(){

    {/*
    *   GET DAY OF THE WEEK
    */}
    let api = useContext(APIContext);
    let date = new Date();
    let today = date.getDay() - 1;


    {/*
    *   COMPONENT THAT CONTROLS RETRIVAL OF USER SCORES PER RENDER
    */}
    async function getScores(){
        let tempMentalScores = [];
        let tempPersonalScores = [];
        let tempDietScores = [];
        let tempFitnessScores = [];
        try{
            if(sessionStorage.getItem("USERNAME") !== null){
                api.getScores().then(resp=>{

                    {/*
                    *   DANGEROUS: ASSUMES RESPONSE IS PRESENT
                    *
                    *   GRABS DATA FROM THE SERVER AND MAPS TO APPROPIATE DAY INDEXES
                    */}
                    resp.data.forEach(temp => {
                        if(temp.Activity_Index.includes("Mental")){
                            tempMentalScores[0] = parseFloat(temp.Monday);
                            tempMentalScores[1] = parseFloat(temp.Tuesday);
                            tempMentalScores[2] = parseFloat(temp.Wednesday);
                            tempMentalScores[3] = parseFloat(temp.Thursday);
                            tempMentalScores[4] = parseFloat(temp.Friday);
                            tempMentalScores[5] = parseFloat(temp.Saturday);
                            tempMentalScores[6] = parseFloat(temp.Sunday);
                            TodaysMentalScore = tempMentalScores[today];
                            MentalScores = tempMentalScores;

                            /*
                            *This is meant to update the score by the last day the user had if they havent logged 
                            *in for some time
                            */
                            if(TodaysMentalScore === 0){
                                for(var i = today; i >= 0; i--){
                                    if(tempMentalScores[i] !== 0){
                                        TodaysMentalScore = tempMentalScores[i];
                                        tempMentalScores[today] = tempMentalScores[i];
                                        break;
                                    }
                                }
                                if(TodaysMentalScore === 0){
                                    for(i = 6; i >=0; i--){
                                        if(tempMentalScores[i] !== 0){
                                            TodaysMentalScore = tempMentalScores[i];
                                            tempMentalScores[today] = tempMentalScores[i];
                                            break;
                                        }
                                    }
                                }
                                MentalScores = tempMentalScores;

                        }
                        }else if(temp.Activity_Index.includes("Diet")){
                            tempDietScores[0] = parseFloat(temp.Monday);
                            tempDietScores[1] = parseFloat(temp.Tuesday);
                            tempDietScores[2] = parseFloat(temp.Wednesday);
                            tempDietScores[3] = parseFloat(temp.Thursday);
                            tempDietScores[4] = parseFloat(temp.Friday);
                            tempDietScores[5] = parseFloat(temp.Saturday);
                            tempDietScores[6] = parseFloat(temp.Sunday);
                            TodaysDietScore = tempDietScores[today];
                            DietScores = tempDietScores;

                            /*
                            *This is meant to update the score by the last day the user had if they havent logged 
                            *in for some time
                            */
                            if(TodaysDietScore === 0){
                                for(i = today; i >= 0; i--){
                                    if(tempDietScores[i] !== 0){
                                        TodaysDietScore = tempDietScores[i];
                                        tempDietScores[today] = tempDietScores[i];
                                        break;
                                    }
                                }
                                if(TodaysDietScore === 0){
                                    for(i = 6; i >=0; i--){
                                        if(tempDietScores[i] !== 0){
                                            TodaysDietScore = tempDietScores[i];
                                            tempDietScores[today] = tempDietScores[i];
                                            break;
                                        }
                                    }
                                }

                                DietScores = tempDietScores;
                            }

                        }else if(temp.Activity_Index.includes("Fitness")){
                            tempFitnessScores[0] = parseFloat(temp.Monday);
                            tempFitnessScores[1] = parseFloat(temp.Tuesday);
                            tempFitnessScores[2] = parseFloat(temp.Wednesday);
                            tempFitnessScores[3] = parseFloat(temp.Thursday);
                            tempFitnessScores[4] = parseFloat(temp.Friday);
                            tempFitnessScores[5] = parseFloat(temp.Saturday);
                            tempFitnessScores[6] = parseFloat(temp.Sunday);
                            TodaysFitnessScore = tempFitnessScores[today];
                            FitnessScores = tempFitnessScores;

                            /*
                            *This is meant to update the score by the last day the user had if they havent logged 
                            *in for some time
                            */
                            if(TodaysFitnessScore === 0){
                                for(i = today; i >= 0; i--){
                                    if(tempFitnessScores[i] !== 0){
                                        TodaysFitnessScore = tempFitnessScores[i];
                                        tempFitnessScores[today] = tempFitnessScores[i];
                                        break;
                                    }
                                }
                                if(TodaysFitnessScore === 0){
                                    for(i = 6; i >=0; i--){
                                        if(tempFitnessScores[i] !== 0){
                                            TodaysFitnessScore = tempFitnessScores[i];
                                            tempFitnessScores[today] = tempFitnessScores[i];
                                            break;
                                        }
                                    }
                                }
                                FitnessScores = tempFitnessScores;
                            }

                        }else if(temp.Activity_Index.includes("Personal")){
                            tempPersonalScores[0] = parseFloat(temp.Monday);
                            tempPersonalScores[1] = parseFloat(temp.Tuesday);
                            tempPersonalScores[2] = parseFloat(temp.Wednesday);
                            tempPersonalScores[3] = parseFloat(temp.Thursday);
                            tempPersonalScores[4] = parseFloat(temp.Friday);
                            tempPersonalScores[5] = parseFloat(temp.Saturday);
                            tempPersonalScores[6] = parseFloat(temp.Sunday);
                            TodaysPersonalScore = tempPersonalScores[today];
                            PersonalScores = tempPersonalScores;

                            /*
                            *This is meant to update the score by the last day the user had if they havent logged 
                            *in for some time
                            */
                            if(TodaysPersonalScore === 0){
                                for(i = today; i >= 0; i--){
                                    if(tempPersonalScores[i] !== 0){
                                        TodaysPersonalScore = tempPersonalScores[i];
                                        tempPersonalScores[today] = tempPersonalScores[i];
                                        break;
                                    }
                                }
                                if(TodaysPersonalScore === 0){
                                    for(i = 6; i >=0; i--){
                                        if(tempPersonalScores[i] !== 0){
                                            TodaysPersonalScore = tempPersonalScores[i];
                                            tempPersonalScores[today] = tempPersonalScores[i];
                                            break;
                                        }
                                    }
                                }
                            }
                            PersonalScores = tempPersonalScores;
                        }
                    });
                });
            }
        }catch(error){
            console.log(":(");
        }
    }
    getScores();
    return(<></>);
}