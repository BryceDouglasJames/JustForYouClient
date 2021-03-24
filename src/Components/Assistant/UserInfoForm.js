import React from 'react';

//footer at a the bottom -common for all routes 
function UserInfoForm () {
  return (
    <div className = "row m-auto p-5">
        <div className = "card m-auto p-3" style = {{width: "85%", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
            <div className = "card-title p-5 m-auto" style = {{textAlign:"center"}}>
               <h3 className = "font-weight-light">Please fill out some basic information so we can get to know you a little.</h3>
            </div>
            <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%", textAlign:"center"}}>
                <form>
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
                                        />
                                </div>
                                <br></br><br></br>
                                <div className="row m-auto">
                                    <label className = "col-lg"htmlFor="DOB">Date of birth</label>
                                    <input 
                                        className = "col-lg"
                                        type="text" 
                                        name="DOB" 
                                        placeholder="MM/DD/YYYY"
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
                                        />
                                </div>
                                <br></br><br></br>
                                <div className="row m-auto">
                                    <label className = "col-lg" htmlFor="activity">Daily Activity</label>
                                    <select className = "col-lg" name = "activity" id = "activity">
                                        <option value = "minimal">Minimal</option>
                                        <option value = "light">Light</option>
                                        <option value = "moderate">Moderate</option>
                                        <option value = "heavy">Heavy</option>
                                    </select>
                                </div>
                                <br></br><br></br>
                                <div className="row m-auto">
                                    <label className = "col-lg" htmlFor="disease">Diseases/Disorder<br></br>Add commas inbetween.</label>
                                    <input 
                                        className = "col-lg"
                                        type="text" 
                                        name="disease" 
                                        placeholder="----"
                                        />
                                </div>
                               
                            </div>
                        </div>
                        <div className="footer">
                            <button type = "button" className = "btn btn-outline-secondary m-5">Submit and get started!</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

  );
};

export default UserInfoForm;
