import React, {useContext, useState} from "react";
import {APIContext} from "../APIContext"
import {age, weight, height, activity, bmi} from "../HydrationProviders/AllUserProfileStats";
import "../../background.css"
function ProfilePage(){
    console.log(weight);
    const api = useContext(APIContext);

    const [state, setState] = useState({
        username:sessionStorage.getItem("USERNAME"),
        file: "",
        Activity: "",
        Weight: 0,
        Height: 0
    });

    const setFile = (e) =>{
        let thisFile = e.target.value;
        setState((state) =>({...state, file: thisFile}));
    };

    const setPFP = (e) =>{
        e.preventDefault();
        sendPFP({file});
    };

    const setActivity = (e) =>{
        let activity = e.target.value;
        setState({...state, Activity: activity})
    }

    const setWeight = (e) =>{
        let weight = e.target.value;
        setState({...state, Weight: weight})
    }

    const setHeight = (e) =>{
        let height = e.target.value;
        setState({...state, Height: height})
    }

    async function sendPFP({ file }) {
        if (!file) return;
        try {
          await api.setUserPFP({ file }).then(resp =>{
            //console.log(resp);
          });
        } catch (err) {
          console.log(err);
        }
    }

    async function sendUpdateInfo({state}){
        if(state.Height === 0 || state.Weight === 0 || state.Activity === ""){
            alert("If you wish to update, you must record all new stats to keep a valid record of results.");
            return
        }
        try {
            await api.updateUserStats({ state }).then(resp =>{
              console.log(resp);
            });
            window.location.reload(false);
        }catch (err) {
            console.log(err);
        }

    }

    const onUpdateEvent = (e) =>{
        e.preventDefault();
        sendUpdateInfo({state});
    }

    const { file } = state;
    return (
        <div className = "forum m-auto">
            <div className = "row p-5 "></div>
            <div className="container m-auto" style = {{backgroundColor:"gainsboro", border:"2px solid black"}}>
                <div className="row ">            
                    <div className = "row p-5 "></div>
                    <h1 className="m-auto font-weight-light" style = {{textAlign:"center"}}> {sessionStorage.getItem("USERNAME")}'s Profile</h1>
                    <div className = "row"></div>
                    <div class="container row p-5 m-auto" style = {{textAlign:"center"}}>
                        <br></br>
                        <div className = "col m-4 p-3" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <h3 class="font-style-light">Weight <br></br> {weight} lbs </h3>
                        </div>
                        <br></br>
                        <div className = "col m-4 p-3" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <h3 class="font-style-light">Height <br></br> {height}" </h3>
                        </div>
                        <br></br>
                        <div className = "col m-4 p-3" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <h3 class="font-style-light" >Activity <br></br>{activity}</h3>
                        </div>
                        <br></br>
                        <div className = "col m-4 p-3" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <h3 class="font-style-light">BMI <br></br>{bmi}</h3>
                        </div>
                        <br></br>
                        <div className = "col m-4 p-3" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <h3 class="font-style-light">Age <br></br>{age}</h3>
                        </div>
                        <br></br>
                    </div>
                    <br></br><br></br>
                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 m-auto">
                        <div class="card h-35" style = {{border:"2px solid black"}}>
                            <div class="card-body">
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h3 class="mb-2 m-auto" style = {{textAlign: 'center', color: "black"}}>Change Account Details</h3>
                                    </div>
                                    <br></br><br></br><br></br>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <label className = "form-group" htmlFor="activity">Daily Activity</label>
                                        <select className = "col-md p-2" name = "activity" id = "activity" onChange={setActivity}>
                                            <option selected="selected">----</option>
                                            <option value = "minimal">Minimal</option>
                                            <option value = "light">Light</option>
                                            <option value = "moderate">Moderate</option>
                                            <option value = "heavy">Heavy</option>
                                        </select>
                                        <div className = "row p-2"></div>
                                        <div class="form-group">
                                            <label for="weight">Weight</label>
                                            <input 
                                            className = "col-lg"
                                                type="text" 
                                                name ="weight"    
                                                maxLength="3"
                                                onChange={setWeight}
                                            />                                       
                                        </div>
                                        <div className = "row p-1"></div>
                                        <div class="form-group">
                                            <label for="Height">Height</label>
                                            <input 
                                                className = "col-lg"
                                                type="text" 
                                                name="Height" 
                                                maxlength = "3"
                                                onChange={setHeight}
                                                />
                                        </div>
                                    </div>
                                    <div class="col m-auto p-1" style = {{textAlign:"center", alignContent:"center"}}>
                                        <h4>Seems like you don't have a profile picture.</h4>
                                        <br></br>
                                        <input className = "m-auto p-3" type="file" onChange = {setFile}></input>
                                        <br></br><br></br>
                                    </div>
                                </div>
                            </div>
                            <div className="col m-auto" style = {{width:"100%", textAlign:"center"}}>
                                <button type="button" id="submit" name="submit" class="btn btn-secondary p-3 m-3" style = {{width:"40%"}} onClick={onUpdateEvent}>Update Profile Info</button>                                
                            </div>
                            <div className = "row p-2 "></div>
                        </div>
                        <div className = "row p-5 "></div>
                    </div>
                </div>
            </div>
            <div className = "p-5"></div>
        </div>
    );
    
}
export default ProfilePage;
