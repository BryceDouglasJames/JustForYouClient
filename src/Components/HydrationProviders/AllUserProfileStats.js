import React, {useContext} from 'react';
import {APIContext} from "../APIContext"

export var age = null
export var weight = null
export var height = null
export var activity = null
export var bmi = null

export default function AllUserProfuleStats(){
    const api = useContext(APIContext);
    async function ProfileStats(){
        try{
            api.getProfileStats().then(resp=>{
                var tempage = resp.data[0];
                var tempweight = resp.data[1];
                var tempheight = resp.data[2];
                var tempactivity = resp.data[3];
                var tempbmi = resp.data[4];

                age = tempage;
                weight = tempweight;
                height = tempheight;
                activity = tempactivity;
                bmi = tempbmi;
            })
        }catch(e){
            console.log(e);
        }
    }

    ProfileStats();
    return(<></>);
}
