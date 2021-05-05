import React, {useContext} from 'react';
import {APIContext} from "../APIContext"

export const AllPosts = [{}];

export var DietLikes = 0;
export var DietPosts = 0;

export var FitnessLikes = 0;
export var FitnessPosts = 0;

export var PersonalLikes = 0;
export var PersonalPosts = 0;

export var MentalLikes = 0;
export var MentalPosts = 0;

export function getRandomPostByCategory(category){
    var thisCategory;
    let tempArray = [{}];
    var index = 0;
    switch(category){
        case "Mental":
            thisCategory = "1";
            break;
        case "General":
            thisCategory = "2";
            break;
        case "Diet":
            thisCategory = "3";
            break;
        case "Fitness":
            thisCategory = "4";
            break;
        default:
            thisCategory = "No Category"
            break;
    }

    
    AllPosts.forEach(post => {
        if(post.CID === thisCategory && post.UID === sessionStorage.getItem("session_id")){
            tempArray[index] = post
            index++;
        }
    });
    return tempArray;
}

export function getRandomPostsByCount(count){
    let returnList = [{}];
    let i = 0
    for(i; i<count; i++){
        let randomIndex = Math.floor(Math.random() * AllPosts.length);
        console.log(randomIndex);
        returnList[i] = AllPosts[randomIndex]; 
    }

    console.log(returnList);
    return returnList;
}

export default function GetAllPosts(){
    let api = useContext(APIContext);

    async function getPosts(){
        
        api.getAllPosts().then(resp =>{
            if(resp !== null && (resp.data!==null || resp.data !== undefined)){
                let temp = resp.data
                var index = 0;
                var ml = 0;
                var mp = 0;
                var dl = 0;
                var dp = 0;
                var pl = 0;
                var pp = 0;
                var fl = 0;
                var fp = 0;

                temp.forEach(post => {
                    AllPosts[index] = post;
                    if(post.UID === sessionStorage.getItem("session_id") && post.CID === "1"){
                        mp++;
                        ml+= Number.parseInt(post.likes);
                    }
                    if(post.UID === sessionStorage.getItem("session_id") && post.CID === "2"){
                        pp++;
                        pl+= Number.parseInt(post.likes);
                    }
                    if(post.UID === sessionStorage.getItem("session_id") && post.CID === "3"){
                        dp++;
                        dl += Number.parseInt(post.likes);
                    }
                    if(post.UID === sessionStorage.getItem("session_id") && post.CID === "4"){
                        fp++;
                        fl += Number.parseInt(post.likes);
                    }
                    index++;
                });


                DietLikes = dl;
                DietPosts = dp;
                MentalLikes = ml;
                MentalPosts = mp;
                PersonalLikes = pl;
                PersonalPosts = pp;
                FitnessLikes = fl;
                FitnessPosts = fp;
            }
        })
    }

    getPosts();
    return(<></>);
}