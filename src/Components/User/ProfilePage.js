import React, {useContext, useState} from "react";
import {APIContext} from "../APIContext"
import {age, weight, height, activity, bmi} from "../HydrationProviders/AllUserProfileStats";
import "../../background.css"
function ProfilePage(){
    console.log(weight);
    const api = useContext(APIContext);

    const [state, setState] = useState({
        file: ""
    });

    const setFile = (e) =>{
        let thisFile = e.target.value;
        setState((state) =>({...state, file: thisFile}));
    };

    const setPFP = (e) =>{
        e.preventDefault();
        sendPFP({file});
    };

    async function sendPFP({ file }) {
        if (!file) return;
        try {
          await api.setUserPFP({ file }).then(resp =>{
            console.log(resp);
          });
        } catch (err) {
          console.log(err);
        }
      }

    const { file } = state;
    return (
        <div className = "forum m-auto">
            <div className = "row p-5 "></div>
            <div className="container m-auto" style = {{backgroundColor:"gainsboro", border:"2px solid black"}}>
                <div className="row ">            
                    <div className = "row p-5 "></div>
                    <h1 className="m-auto font-weight-light" style = {{textAlign:"center"}}> {sessionStorage.getItem("USERNAME")}'s Settings</h1>
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
                            <h3 class="font-style-light" >Activity: <br></br>{activity}</h3>
                        </div>
                        <br></br>
                        <div className = "col m-4 p-3" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <h3 class="font-style-light">BMI: <br></br>{bmi}</h3>
                        </div>
                        <br></br>
                        <div className = "col m-4 p-3" style = {{backgroundColor:"white", border:"2px solid black"}}>
                            <h3 class="font-style-light">Age: <br></br>{age}</h3>
                        </div>
                        <br></br>
                    </div>
                    <br></br><br></br>
                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 m-auto">
                        <div class="card h-35" style = {{border:"2px solid black"}}>
                            <div class="card-body">
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h3 class="mb-2 m-auto" style = {{textAlign: 'center', color: "black"}}>Change Personal Details</h3>
                                    </div>
                                    <br></br><br></br><br></br>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" class="form-control" id="fullName" placeholder="Enter full Name"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="fullName">Full Username</label>
                                            <input type="text" class="form-control" id="username" placeholder="Enter full Username"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="fullName">Email</label>
                                            <input type="email" class="form-control" id="Email" placeholder="Enter full Email"></input>
                                        </div>
                                    </div>
                                    <div class="col m-auto p-1" style = {{textAlign:"center", alignContent:"center"}}>
                                        <h4>Seems like you don't have a profile picture.</h4>
                                        <br></br>
                                        <input className = "m-auto p-3" type="file" onChange = {setFile}></input>
                                        <br></br><br></br>
                                        <button className = "btn btn-outline-dark m-auto" onClick={setPFP}>Upload!</button>
                                    </div>
                                </div>
                                <div class="row gutters">

                                </div>
                            </div>
                            <div class="row gutters m-auto">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 m-auto">
                                    <div class="text-right">
                                        <button type="button" id="submit" name="submit" class="btn btn-secondary p-2 m-3">Update</button>
                                        &ensp;&ensp;&ensp;&ensp;
                                    </div>
                                </div>
                            </div>
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
