import React, {useEffect, useContext} from 'react';
import {APIContext} from "./APIContext"

export let MentalScores = [];
export let PersonalScores = [];
export let DietScores = [];
export let FitnessScores = [];

export default function GetUserScores(){
    let api = useContext(APIContext);
    

    async function getScores(){
        let tempMentalScores = [];
        let tempPersonalScores = [];
        let tempDietScores = [];
        let tempFitnessScores = [];
        try{
            api.getScores().then(resp=>{
                resp.data.forEach(temp => {
                    if(temp.Activity_Index.includes("Mental")){
                        tempMentalScores[0] = parseFloat(temp.Monday);
                        tempMentalScores[1] = parseFloat(temp.Tuesday);
                        tempMentalScores[2] = parseFloat(temp.Wednesday);
                        tempMentalScores[3] = parseFloat(temp.Thursday);
                        tempMentalScores[4] = parseFloat(temp.Friday);
                        tempMentalScores[5] = parseFloat(temp.Saturday);
                        tempMentalScores[6] = parseFloat(temp.Sunday);
                        MentalScores = tempMentalScores;
                    }else if(temp.Activity_Index.includes("Diet")){
                        tempDietScores[0] = parseFloat(temp.Monday);
                        tempDietScores[1] = parseFloat(temp.Tuesday);
                        tempDietScores[2] = parseFloat(temp.Wednesday);
                        tempDietScores[3] = parseFloat(temp.Thursday);
                        tempDietScores[4] = parseFloat(temp.Friday);
                        tempDietScores[5] = parseFloat(temp.Saturday);
                        tempDietScores[6] = parseFloat(temp.Sunday);
                        DietScores = tempDietScores;
                    }else if(temp.Activity_Index.includes("Fitness")){
                        tempFitnessScores[0] = parseFloat(temp.Monday);
                        tempFitnessScores[1] = parseFloat(temp.Tuesday);
                        tempFitnessScores[2] = parseFloat(temp.Wednesday);
                        tempFitnessScores[3] = parseFloat(temp.Thursday);
                        tempFitnessScores[4] = parseFloat(temp.Friday);
                        tempFitnessScores[5] = parseFloat(temp.Saturday);
                        tempFitnessScores[6] = parseFloat(temp.Sunday);
                        FitnessScores = tempFitnessScores;
                    }else if(temp.Activity_Index.includes("Personal")){
                        tempPersonalScores[0] = parseFloat(temp.Monday);
                        tempPersonalScores[1] = parseFloat(temp.Tuesday);
                        tempPersonalScores[2] = parseFloat(temp.Wednesday);
                        tempPersonalScores[3] = parseFloat(temp.Thursday);
                        tempPersonalScores[4] = parseFloat(temp.Friday);
                        tempPersonalScores[5] = parseFloat(temp.Saturday);
                        tempPersonalScores[6] = parseFloat(temp.Sunday);
                        PersonalScores = tempPersonalScores;
                    }
                });
            });
        }catch(error){

        }
    }
    getScores();
    return(<></>);
}