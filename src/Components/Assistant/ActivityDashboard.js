import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MentalPage from "./MentalPage"
import DietPage from "./DietPage"
import PersonalPage from "./PersonalPage"
import FitnessPage from "./FitnessPage"
import { Line } from 'react-chartjs-2';
import {MentalScores, DietScores, FitnessScores, PersonalScores} from "../AllUserScores";

export default function ActivityDashboard(){
    console.log(MentalScores);
    console.log(DietScores);
    console.log(FitnessScores);
    console.log(PersonalScores);



    let CombinedData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Fitness',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 132, 132,0.4)',
                borderColor: 'rgba(255, 132, 132,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 132, 132,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 132, 132,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: FitnessScores
            },
            {
                label: 'Mental',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(23, 215, 132,0.4)',
                borderColor: 'rgba(23, 215, 132,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(23, 215, 132,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(23, 215, 132,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: MentalScores
            },
            {
                label: 'Personal',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(253, 208, 64,0.4)',
                borderColor: 'rgba(253, 208, 64,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(253, 208, 64,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(253, 208, 64,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: PersonalScores
            },
            {
                label: 'Diet',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(97, 187, 255,0.4)',
                borderColor: 'rgba(97, 187, 255,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(97, 187, 255,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(97, 187, 255,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: DietScores
            }
        ]
    }
    
    let MentalData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Mental',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(23, 215, 132,0.4)',
                borderColor: 'rgba(23, 215, 132,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(23, 215, 132,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(23, 215, 132,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: MentalScores
            }
        ]
    }
    
    let FitnessData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Fitness',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(255, 132, 132,0.4)',
                borderColor: 'rgba(255, 132, 132,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(255, 132, 132,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(255, 132, 132,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: FitnessScores
            }
        ]
    }
    
    let DietData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Diet',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(97, 187, 255,0.4)',
                borderColor: 'rgba(97, 187, 255,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(97, 187, 255,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(97, 187, 255,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: DietScores
            }
        ]
    }
    
   let PersonalData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
            {
                label: 'Personal',
                fill: true,
                lineTension: 0.1,
                backgroundColor: 'rgba(253, 208, 64,0.4)',
                borderColor: 'rgba(253, 208, 64,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(253, 208, 64,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(253, 208, 64,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: PersonalScores
            }
        ]
    }

    const[state, setState] = new useState({
        activity: "home"
    });


    const setHome = (e) => {
        setState((state)=>({...state, activity: "home"}));
    }
    const setMental = (e) => {
        setState((state)=>({...state, activity: "mental"}));
    }
    const setFitness = (e) => {
        setState((state)=>({...state, activity: "fitness"}));
    }
    const setDiet = (e) => {
        setState((state)=>({...state, activity: "diet"}));
    }
    const setPersonal = (e) => {
        setState((state)=>({...state, activity: "personal"}));
    }

    const {activity} = state;
    if(activity === "home"){
        return(
            <div className = "m-auto gifStyle niceBackground" style = {{textAlign:"center"}}>
                <br></br><br></br>
                <div className = "container m-auto p-auto">
                    <div className = "row m-auto p-auto">
                        <div className = "col-md-3"></div>
                        <div className = "col-md-6 m-auto p-5" style = {{height: "80%", backgroundColor:"gainsboro", textAlign:"center",float:"left", border:"1px solid black"}}>    
                            <div className = "container m-auto p-auto">
                                <h2 className = "font-weight-light">Dashboard</h2>
                                <br></br>
                                <button type = "button" className = "btn btn-dark p-auto" style = {{width:"100%"}} onClick = {setHome}>Dashboard Home</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setFitness}>Fitness Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setMental}>Mental Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setPersonal}>Personal Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setDiet}>Diet Stats</button>
                            </div>
                            <br></br><br></br>          
                        </div>
                        <div className = "col-md-3"></div>
                        <div className = "row"></div>
                        <br></br><br></br><br></br><br></br><br></br><br></br>         
                        <div className = "col-md-12 m-auto p-auto" style = {{textAlign:"center", justifyContent:"center", backgroundColor:"white"}}>
                            <div className = "row m-auto p-auto" style = {{height: "100%", textAlign:"center", justifyContent:"center"}}>
                                <div className = "row"><br></br><br></br></div>
                                <h2 className = "font-weight-light">Weekly Progress</h2>
                                <Line
                                    data={CombinedData}
                                    height = {5}
                                    width = {7}
                                />
                            </div>  
                        </div>
                        <div className = "row p-5"></div>
                    </div>
                </div>
            </div>
        );
    }else if(activity === "mental"){
        return(
            <div className = "m-auto gifStyle niceBackground" style = {{textAlign:"center"}}>
                <br></br>
                <br></br>
                <div className = "container m-auto p-4"style = {{backgroundColor:"white"}}>
                    <div className = "row m-auto p-auto">
                        
                        <div className = "col-md-4 m-auto p-5" style = {{height: "80%", backgroundColor:"gainsboro", textAlign:"center",float:"left", border:"1px solid black"}}>
                            
                            <div className = "container m-auto p-auto">
                                <h2 className = "font-weight-light">Dashboard</h2>
                                <br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setHome}>Dashboard Home</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setFitness}>Fitness Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn p-auto" style = {{width:"100%", backgroundColor:"#8dceb2"}} onClick = {setHome}>Mental Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setPersonal}>Personal Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setDiet}>Diet Stats</button>
                            </div>
                            <br></br><br></br>          
                        </div>
                        <div className = "col-md-1"></div>
                        <br></br><br></br><br></br>
                        <div className = "col-md-7 m-auto p-auto" style = {{textAlign:"center", justifyContent:"center"}}>
                            <div className = "row m-auto p-auto" style = {{height: "100%", textAlign:"center", justifyContent:"center"}}>
                                <div className = "row"><br></br><br></br></div>
                                <h2 className = "font-weight-light">Mental Progress</h2>
                                <Line
                                    data={MentalData}
                                    height = {5}
                                    width = {7}
                                />
                            </div>  
                        </div>
                    </div>
                </div>
                <div>
                    <MentalPage></MentalPage>
                </div>
                <div className = "row p-5"></div>
            </div>
        );
    }else if(activity === "fitness"){
        return(
            <div className = "m-auto gifStyle niceBackground" style = {{textAlign:"center"}}>
                <br></br>
                <br></br>
                <div className = "container m-auto p-4"style = {{backgroundColor:"white"}}>
                    <div className = "row m-auto p-auto">
                        
                        <div className = "col-md-4 m-auto p-5" style = {{height: "80%", backgroundColor:"gainsboro", textAlign:"center",float:"left", border:"1px solid black"}}>
                            
                            <div className = "container m-auto p-auto">
                                <h2 className = "font-weight-light">Dashboard</h2>
                                <br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setHome}>Dashboard Home</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn p-auto" style = {{width:"100%", backgroundColor:"#ff8484"}} onClick = {setFitness}>Fitness Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setMental}>Mental Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setPersonal}>Personal Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setDiet}>Diet Stats</button>
                            </div>
                            <br></br><br></br>          
                        </div>
                        <div className = "col-md-1"></div>
                        <br></br><br></br><br></br>
                        <div className = "col-md-7 m-auto p-auto" style = {{textAlign:"center", justifyContent:"center"}}>
                            <div className = "row m-auto p-auto" style = {{height: "100%", textAlign:"center", justifyContent:"center"}}>
                                <div className = "row"><br></br><br></br></div>
                                <h2 className = "font-weight-light">Fitness Progress</h2>
                                <Line
                                    data={FitnessData}
                                    height = {5}
                                    width = {7}
                                />
                            </div>  
                        </div>
                    </div>
                </div>
                <div>
                    <FitnessPage></FitnessPage>
                </div>
                <div className = "row p-5"></div>
            </div>
        );
    }else if(activity === "personal"){
        return(
            <div className = "m-auto gifStyle niceBackground" style = {{textAlign:"center"}}>
                <br></br>
                <br></br>
                <div className = "container m-auto p-4"style = {{backgroundColor:"white"}}>
                    <div className = "row m-auto p-auto">
                        
                        <div className = "col-md-4 m-auto p-5" style = {{height: "80%", backgroundColor:"gainsboro", textAlign:"center",float:"left", border:"1px solid black"}}>
                            
                            <div className = "container m-auto p-auto">
                                <h2 className = "font-weight-light">Dashboard</h2>
                                <br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setHome}>Dashboard Home</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setFitness}>Fitness Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setMental}>Mental Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn p-auto" style = {{width:"100%", backgroundColor:" #fdd040"}} onClick = {setPersonal}>Personal Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setDiet}>Diet Stats</button>
                            </div>
                            <br></br><br></br>          
                        </div>
                        <div className = "col-md-1"></div>
                        <br></br><br></br><br></br>
                        <div className = "col-md-7 m-auto p-auto" style = {{textAlign:"center", justifyContent:"center"}}>
                            <div className = "row m-auto p-auto" style = {{height: "100%", textAlign:"center", justifyContent:"center"}}>
                                <div className = "row"><br></br><br></br></div>
                                <h2 className = "font-weight-light">Personal Progress</h2>
                                <Line
                                    data={PersonalData}
                                    height = {5}
                                    width = {7}
                                />
                            </div>  
                        </div>
                    </div>
                </div>
                <div>
                    <PersonalPage></PersonalPage>
                </div>
                <div className = "row p-5"></div>
            </div>
        );
    }else if(activity === "diet"){
        return(
            <div className = "m-auto gifStyle niceBackground" style = {{textAlign:"center"}}>
                <br></br>
                <br></br>
                <div className = "container m-auto p-4"style = {{backgroundColor:"white"}}>
                    <div className = "row m-auto p-auto">
                        
                        <div className = "col-md-4 m-auto p-5" style = {{height: "80%", backgroundColor:"gainsboro", textAlign:"center",float:"left", border:"1px solid black"}}>
                            
                            <div className = "container m-auto p-auto">
                                <h2 className = "font-weight-light">Dashboard</h2>
                                <br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setHome}>Dashboard Home</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setFitness}>Fitness Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setMental}>Mental Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%"}} onClick = {setPersonal}>Personal Stats</button>
                                <br></br><br></br>
                                <button type = "button" className = "btn p-auto" style = {{width:"100%", backgroundColor:"#61bbff"}} onClick = {setDiet}>Diet Stats</button>
                            </div>
                            <br></br><br></br>          
                        </div>
                        <div className = "col-md-1"></div>
                        <br></br><br></br><br></br>
                        <div className = "col-md-7 m-auto p-auto" style = {{textAlign:"center", justifyContent:"center"}}>
                            <div className = "row m-auto p-auto" style = {{height: "100%", textAlign:"center", justifyContent:"center"}}>
                                <div className = "row"><br></br><br></br></div>
                                <h2 className = "font-weight-light">Diet Progress</h2>
                                <Line
                                    data={DietData}
                                    height = {5}
                                    width = {7}
                                />
                            </div>  
                        </div>
                    </div>
                </div>
                <div>
                    <DietPage></DietPage>
                </div>
                <div className = "row p-5"></div>
            </div>
        );
    }
    
}