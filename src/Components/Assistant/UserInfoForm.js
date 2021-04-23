import React, {useEffect, useState, useContext} from 'react';
import {APIContext} from "../APIContext"

//footer at a the bottom -common for all routes 
function UserInfoForm () {

    const api = useContext(APIContext);

    const [infoState, setInfoState] = useState({
        username: sessionStorage.getItem("USERNAME"),
        Weight: 0,
        DOB: null,
        Height: 0,
        Activity: "",
        Disease: [],
        errorMessage: "",
        formatted: false
    });

    const setWeight = (e) =>{
        let weight = e.target.value;
        setInfoState({...infoState, Weight: weight})
    }
    const setDOB= (e) =>{
        let DOB = e.target.value;
        console.log(typeof(DOB));
        setInfoState({...infoState, DOB: DOB})
    }
    const setHeight = (e) =>{
        let height = e.target.value;
        setInfoState({...infoState, Height: height})
    }

    const setActivity = (e) =>{
        let activity = e.target.value;
        setInfoState({...infoState, Activity: activity})
    }

    const setDisease = (e) =>{
        let dis = e.target.value;
        dis = dis.split(",");
        setInfoState({...infoState, Disease: dis})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let error = "";
        let cont = true;
        console.log(DOB)
        
        /*
            ERROR HANDLING HERE
        */

        if(!cont){
            setInfoState({...infoState, errorMessage: error});
        }else{
            setInfoState({...infoState, formatted: true});
            submitUserForm({...infoState});
            sessionStorage.removeItem("NEWUSER");
            window.location.reload(false);
        }

    }

    let{ username, Weight, DOB, Height, Activity, Disease, errorMessage, formatted } = infoState;

    async function submitUserForm({Weight, DOB, Height, Activity, Disease}){

        if(!Weight || !DOB || !Height || !Activity || !Disease){return}

        try {
            let response
            await api.submitUserInfo({username,Weight, DOB, Height, Activity, Disease}).then(resp => response = resp);
            console.log(response);

          } catch (err) {
            console.log(err);
          }
    }


    return (
        <>
        <form className = "m-auto p-auto" onSubmit = {onSubmit}>
        <div className = "row m-auto p-5">
            <div className = "card m-auto p-3" style = {{width: "80rem", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                <div className = "card-title p-5 m-auto" style = {{textAlign:"center"}}>
                <h3 className = "font-weight-light" style = {{fontSize:"100%"}}>Please fill out some basic information so we can get to know you a little.</h3>
                <br></br>
                <h3 className = "font-weight-light" style = {{fontSize:"120%", color:"red"}}>{errorMessage}</h3>
                </div>
                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%", textAlign:"center"}}>
                    
                        <div className="base-container">
                            <div className="content" style = {{animation: "fadeIn ease 10s", WebkitAnimation: "fadeIn ease 10s"}}>
                                <div className="form m-auto p-3" >
                                    <div className="row m-auto p-auto">
                                        <label className = "col-lg" htmlFor="Weight ">Weight</label >
                                        <input 
                                        className = "col-lg"
                                            type="text" 
                                            name ="weight"    
                                            placeholder="----"
                                            maxLength="3"
                                            onChange={setWeight}
                                            />
                                    </div>
                                    <br></br><br></br>
                                    <div className="row m-auto">
                                        <label className = "col-lg"htmlFor="DOB">Date of birth</label>
                                        <input 
                                            className = "col-lg"
                                            type="date" 
                                            name="DOB" 
                                            data-date="" 
                                            data-date-format="MM DD YYYY"
                                            placeholder="MM-DD-YYYY"
                                            maxLength="10"
                                            onChange={setDOB}
                                            />
                                    </div>
                                    <br></br><br></br>
                                    <div className="row m-auto">
                                        <label className = "col-lg" htmlFor="Height">Height in inches</label>
                                        <input 
                                            className = "col-lg"
                                            type="text" 
                                            name="Height" 
                                            placeholder="----"
                                            maxlength = "3"
                                            onChange={setHeight}
                                            />
                                    </div>
                                    <br></br><br></br>
                                    <div className="row m-auto">
                                        <label className = "col-lg" htmlFor="activity">Daily Activity</label>
                                        <select className = "col-lg" name = "activity" id = "activity" onChange={setActivity}>
                                            <option selected="selected">----</option>
                                            <option value = "minimal">Minimal</option>
                                            <option value = "light">Light</option>
                                            <option value = "moderate">Moderate</option>
                                            <option value = "heavy">Heavy</option>
                                        </select>
                                    </div>
                                    <br></br><br></br>
                                    <div className="row m-auto">
                                        <label className = "col-lg" htmlFor="disease">Diseases/Disorder<br></br>Add commas inbetween if any.</label>
                                        <input 
                                            className = "col-lg"
                                            type="text" 
                                            name="disease" 
                                            placeholder="----"
                                            onChange={setDisease}
                                            />
                                    </div>
                                
                                </div>
                            </div>
                            <div className="footer">
                                <button type = "button" className = "btn btn-outline-secondary m-auto p-3" style = {{fontSize:"120%"}} onClick={onSubmit}>Submit and get started!</button>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
        </form>
        </>
    );
};

export default UserInfoForm;
