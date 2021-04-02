import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import "bootstrap/dist/css/bootstrap.min.css"
import {APIContext} from "../APIContext"
import { Line } from 'react-chartjs-2';


export default function ActivityDashboard(){

    const PersonalData = {
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
                data: [65, 59, 80, 81, 56, 55, 40]
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
                data: [87,73,80,76,87,92,49]
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
                data: [50, 71, 66, 86, 84, 46, 39]
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
                data: [34, 39, 11, 4, 23, 10, 35]
            }
        ]
    }

    return(
        <div className = "m-auto" style = {{textAlign:"center"}}>
            <div className = "container m-auto p-auto">
                <div className = "row m-auto p-auto">
                    <div className = "col-md-2 m-auto p-5" style = {{height: "75%", backgroundColor:"gainsboro",position: "absolute", left:"0", textAlign:"center", borderRight:"1px solid black", borderBottom:"1px solid black"}}>
                        <h2 className = "font-weight-light">Dashboard</h2>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Dashboard Home</button>
                        <br></br><br></br>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Fitness Stats</button>
                        <br></br><br></br>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Mental Stats</button>
                        <br></br><br></br>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Personal Stats</button>
                        <br></br><br></br>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Diet Stats</button>
                        <br></br><br></br><br></br>
                        <h2 className = "font-weight-light">Questions</h2>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Fitness Questions</button>
                        <br></br><br></br>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Mental Questions</button>
                        <br></br><br></br>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Personal Questions</button>
                        <br></br><br></br>
                        <button type = "button" className = "btn btn-outline-dark p-auto" style = {{width:"100%", position: "absolute", left:"0", borderRight:"none", borderLeft:"none"}}>Diet Questions</button>                    
                    </div>
                    <div className = "col-md-2"></div>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br>

                    <div className = "col-md-8 m-auto p-auto" style = {{textAlign:"center", justifyContent:"center"}}>
                        <div className = "row m-auto p-auto" style = {{height: "100%", textAlign:"center", justifyContent:"center"}}>
                            <div className = "row"><br></br><br></br></div>
                            <h2 className = "font-weight-light">Weekly Progress</h2>
                            <Line 
                                data={PersonalData}
                                height = {5}
                                width = {7}
                            />
                        </div>
                    </div>
                    
                </div>
                <div className = "row p-5"></div>
            </div>

        </div>
    );
}