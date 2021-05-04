import React, {useContext, useState} from "react";
import {APIContext} from "../APIContext"

function ProfilePage(){
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
    if(sessionStorage.getItem("pfp")){
        return (
            <>
            <div class="container m-auto">
                <div class="row gutters">
                    <div class="col-xs-4 ">
                        <div class="card h-35">
                            <div class="card-body">
                                <div class="account-settings">
                                    <div class="user-profile">
                                        <div class="user-avatar">
                                            <img img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle" width="50" alt="User"></img>
                                        </div>
                                        <h5 class="user-name">{sessionStorage.getItem("USERNAME")}</h5>
                                        <h6 class="user-email">tester@info.com</h6>
                                    </div>
                                    <div class="about">
                                        <h5>About</h5>
                                        <p>Placeholder for user About Section </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 m-auto">
                            <div class="card h-35">
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
                                            <div class="form-group">
                                                <label for="fullName">Phone</label>
                                                <input type="text" class="form-control" id="phone" placeholder="Enter phone number"></input>
                                            </div>
                                        </div>
                                        <div class="col">
                                            <label for="fullName">Profile Picture</label>
                                            {

                                            }
                                        </div>
                                    </div>
                                    <div class="row gutters">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 class="mt-3 mb-2">Address</h6>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">Street</label>
                                                <input type="text" class="form-control" id="Street" placeholder="Enter Street"></input>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">City</label>
                                                <input type="text" class="form-control" id="city" placeholder="Enter City"></input>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">State</label>
                                                <input type="text" class="form-control" id="State" placeholder="Enter State"></input>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">Zip Code</label>
                                                <input type="text" class="form-control" id="Zip Code" placeholder="Enter Zip code"></input>
                                            </div>
                                        </div>
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

                        </div>

                    </div>

                </div>

            </div>
            <div className = "p-5"></div>
            </>
        );
    }else{
        return (
            <>
            <div class="container m-auto">
                <div class="row gutters">
                    <div class="col-xs-4 ">
                        <div class="card h-35">
                            <div class="card-body">
                                <div class="account-settings">
                                    <div class="user-profile">
                                        <div class="user-avatar">
                                            <img img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle" width="50" alt="User"></img>
                                        </div>
                                        <h5 class="user-name">{sessionStorage.getItem("USERNAME")}</h5>
                                        <h6 class="user-email">tester@info.com</h6>
                                    </div>
                                    <div class="about">
                                        <h5>About</h5>
                                        <p>Placeholder for user About Section </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br></br><br></br>
                        <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 m-auto">
                            <div class="card h-35">
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
                                            <div class="form-group">
                                                <label for="fullName">Phone</label>
                                                <input type="text" class="form-control" id="phone" placeholder="Enter phone number"></input>
                                            </div>
                                        </div>
                                        <div class="col m-auto p-1" style = {{textAlign:"center", alignContent:"center", border:"2px solid black"}}>
                                            <h4>Seems like you don't have a profile picture.</h4>
                                            <br></br>
                                            <input className = "m-auto p-3" type="file" onChange = {setFile}></input>
                                            <br></br><br></br>
                                            <button className = "btn btn-outline-dark m-auto" onClick={setPFP}>Upload!</button>
                                        </div>
                                    </div>
                                    <div class="row gutters">
                                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <h6 class="mt-3 mb-2">Address</h6>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">Street</label>
                                                <input type="text" class="form-control" id="Street" placeholder="Enter Street"></input>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">City</label>
                                                <input type="text" class="form-control" id="city" placeholder="Enter City"></input>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">State</label>
                                                <input type="text" class="form-control" id="State" placeholder="Enter State"></input>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                            <div class="form-group">
                                                <label for="Street">Zip Code</label>
                                                <input type="text" class="form-control" id="Zip Code" placeholder="Enter Zip code"></input>
                                            </div>
                                        </div>
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

                        </div>

                    </div>

                </div>

            </div>
            <div className = "p-5"></div>
            </>
        );
    }
}
export default ProfilePage;
