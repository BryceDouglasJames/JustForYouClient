import React, {useContext} from 'react';
import {APIContext} from "../APIContext"

export var mentalSuggestions=[];
export var personalSuggestions=[];
export var dietSuggestions=[];
export var fitnessSuggestions=[];

export default function AllUserSuggestions(){
    let api = useContext(APIContext);

    async function getSuggestions(){
        try{
            api.getSuggestions().then(resp=>{
                if(resp !== null && resp !== undefined){
                    var tempMentalSuggestions = resp.data[0];
                    var tempPersonalSuggestions = resp.data[1];
                    var tempDietSuggestions = resp.data[2];
                    var tempFitnessSuggestions = resp.data[3];

                    mentalSuggestions = tempMentalSuggestions;
                    personalSuggestions = tempPersonalSuggestions;
                    dietSuggestions = tempDietSuggestions;
                    fitnessSuggestions = tempFitnessSuggestions;
                }
            });
        }catch(error){

        }
    }
    getSuggestions();

    return(<></>);    
}