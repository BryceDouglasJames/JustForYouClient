import React, {useContext, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import {Link} from 'react-router-dom'
import QuestionPopup from "../Assistant/QuestionsPopup"
import UserInfoForm from "../Assistant/UserInfoForm"
import Navbar from '../navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import { Doughnut } from 'react-chartjs-2';
import {APIContext} from "../APIContext"



//pops up questions upon login & Displays a daily nutrition challenge
export default function Home(){

    const api = useContext(APIContext);
    const {showQuestions} = new useContext(UserContext);
    const[quote, setQuote] = new useState({
        text:"",
        author:"",
        category:"",
        fetch: true
    });

    async function QOD() {
        if(quote.fetch){
            await api.getQuote().then(resp =>{
                let temptext = resp.data.contents.quotes[0].quote;
                let tempauthor = resp.data.contents.quotes[0].author;
                let tempcat = resp.data.contents.quotes[0].category;
                setQuote((...quote) =>({...quote, text: temptext, author: tempauthor, category: tempcat, fetch: false}));
            })
            return
        }else{
            return;
        }
        
    }
    //QOD();
    

    const MentalData = {
        labels: ['Mental Score', 'Potential'],
        datasets: [{
            label: 'Mental Score',
            data: [78, 22],
            backgroundColor: [
                'rgba(23, 215, 132, 0.4)',
                'rgba(155, 155, 155, 0.4)',
            ],
            borderColor: [
                'rgba(23, 215, 132, 1)',
                'rgba(155, 155, 155, 1)',
            ],
            borderWidth: 2
        }]
    }

    const FitnessData = {
        labels: ['Fitness Score', 'Potential'],
        datasets: [{
            label: 'Fitness Score',
            data: [42, 58],
            backgroundColor: [
                'rgba(255, 132, 132, 0.4)',
                'rgba(155, 155, 155, 0.4)',
            ],
            borderColor: [
                'rgba(255, 132, 132, 1)',
                'rgba(155, 155, 155, 1)',
            ],
            borderWidth: 2
        }]
    }

    const DietData = {
        labels: ['Diet Score', 'Potential'],
        datasets: [{
            label: 'Diet Score',
            data: [85, 15],
            backgroundColor: [
                'rgba(97, 187, 255, 0.4)',
                'rgba(155, 155, 155, 0.4)',
            ],
            borderColor: [
                'rgba(97, 187, 255, 1)',
                'rgba(155, 155, 155, 1)',
            ],
            borderWidth: 2
        }]
    }

    const PersonalData = {
        labels: ['Personal Score', 'Potential'],
        datasets: [{
            label: 'Personal Score',
            data: [64, 36],
            backgroundColor: [
                'rgba(253, 208, 64, 0.4)',
                'rgba(155, 155, 155, 0.4)',
            ],
            borderColor: [
                'rgba(253, 208, 64, 1)',
                'rgba(155, 155, 155, 1)',
            ],
            borderWidth: 2
        }]
    }

    const {text, author, category} = quote;
    if(sessionStorage.getItem("NEWUSER") !== null && sessionStorage.getItem("NEWUSER") !== false){
        return(
            <UserInfoForm></UserInfoForm>
        )
    }else if(showQuestions){
        return(
            <>
            <Navbar></Navbar>
            <QuestionPopup></QuestionPopup>
            </>
        )
    }else{
        return (        
            <>
                <Navbar></Navbar>
                <br></br><br></br>
                <div className = "m-auto p-auto" style = {{textAlign:"center"}}>
                <div className = "container m-auto p-3">
                    <div className = "row m-auto p-auto" >
                        <div className = "card m-auto p-3 col-md-4" style = {{width: "auto", height: "10%", alignItems: "center", backgroundColor: "gainsboro"}}>
                            <div className = "card-title p-5 m-auto " style = {{textAlign:"center"}}>
                                <p className = "font-weight-light m-auto" style ={{fontSize:"150%"}}>Hello {sessionStorage.getItem("USERNAME")}, great to see you!</p>
                            </div>
                            <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"1px", width:"80%",textAlign:"center"}}>
                            {
                                sessionStorage.getItem("pfp")?
                                    <> 
                                        <p>You look good!</p>
                                    </>
                                :
                                    <>
                                        <p>You should add a Profile picture!</p>
                                        <Link to = "/settings">
                                            <button className = "btn btn-outline-dark">Add profile pic</button>
                                        </Link>
                                    </>
                            }                            
                            </div>
                            <br></br>
                            <div className = "row m-auto">
                                <Link to = "/activity">
                                    <button type = "button" className = "col btn btn-dark m-2">Visit dashboard</button>
                                </Link>
                                <Link to ="/forum">
                                    <button type = "button" className = "col btn btn-dark m-2" >Head to forum</button>
                                </Link>
                                <Link to="/posts/new">
                                    <button type = "button" className = "col btn btn-dark m-2">Create Post</button>
                                </Link>
                                <Link to ="/settings">
                                    <button type = "button" className = "col btn btn-dark m-2" >&#9881;<br></br>Account settings</button>
                                </Link>
                            </div>
                        </div>
                        <div className = "col-md-1"></div>
                        <div className = "col-md-7 m-auto p-3" style = {{backgroundColor:""}}>
                            <div class="text-center col m-auto p-2" style = {{border:"2px ridge black", borderRadius:"1px", width:"80%",textAlign:"center"}}>
                                <h1>Daily personal challenge</h1>
                                <br></br>
                                <h3>Try meditating for at least 15-20 minutes. Focus on breathing and reflect on how your day 
                                    went/what you will do tomorrow.</h3>
                            </div>
                            <br></br><hr className = "solid" style = {{color:"black"}}></hr><br></br>                    
                            <div class="text-center col m-auto p-2 " style = {{border:"2px ridge black", borderRadius:"1px", width:"80%",textAlign:"center"}}>
                                <h1>Quote of the day:</h1>
                                <h2 className = "font-weight-light">Category: {category}</h2>
                                <br></br>
                                <h3 className = "font-weight-light">{text}<br></br><br></br><i>{author}</i></h3>

                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                    <h1 className = "m-auto p-5">Let's take a look at your progress so far.</h1>
                </div>
                <br></br><hr className = "solid m-auto p-2"></hr><br></br>                    
                    <div className = "container m-auto p-auto">
                        <div className = "row m-auto p-auto">
                            <div className = "card m-auto p-3 col-md-7" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                                <div className = "card-title p-5 m-auto " style = {{textAlign:"center"}}>
                                    <h2 className = "font-weight-light" style={{fontOpticalSizing:'auto'}}>Mental Wellness Score</h2>
                                </div>
                                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"80%",textAlign:"center"}}>
                                    <p  style = {{fontSize:"22px"}}>We keep track of this score in order for you to gauge where you are are mentally. <br></br><br></br> Here at just for you, we are only here to 
                                        help you find ways to improve your wellbeing and find the resources you need.</p>
                                </div>
                                <div className = "row m-auto p-auto">
                                    <button type = "button" style = {{backgroundColor:"rgba(23, 215, 132, 0.7)"}} className = "col btn m-5">See mental health resources</button>
                                    <button type = "button" style = {{backgroundColor:"rgba(23, 215, 132, 0.7)"}} className = "col btn m-5" p-auto>View progress report</button>
                                </div>
                                

                            </div>
                            <div className = "col-sm-5 m-auto p-5">
                                <p>Mental Pie Chart</p>
                                <Doughnut className = "p-auto"
                                    data={MentalData}
                                    height = {400}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br><hr className = "solid m-auto p-2"></hr><br></br>
                    <div className = "container m-auto p-auto">
                        <div className = "row m-auto p-auto">
                            <div className = "col-sm-5 m-auto p-5">
                                <p>Fitness Pie Chart</p>
                                <Doughnut className = "p-auto"
                                    data={FitnessData}
                                    height = {400}
                                />
                            </div>
                            <div className = "card m-auto p-3 col-md-7" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                                <div className = "card-title p-5 m-auto " style = {{textAlign:"center"}}>
                                    <h2 className = "font-weight-light" style={{fontOpticalSizing:'auto'}}>Personal Fitness Score</h2>
                                </div>
                                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"80%",textAlign:"center"}}>
                                    <p  style = {{fontSize:"22px"}}></p>
                                </div>
                                <div className = "row m-auto p-auto">
                                    <button type = "button" style = {{backgroundColor:"rgba(255, 132, 132, 0.7)"}} className = "col btn m-5">View Fitness Resources</button>
                                    <button type = "button" style = {{backgroundColor:"rgba(255, 132, 132, 0.7)"}} className = "col btn m-5" p-auto>View progress report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br><hr className = "solid m-auto p-2"></hr><br></br>
                    <div className = "container m-auto p-auto">
                        <div className = "row m-auto p-auto">
                            <div className = "card m-auto p-3 col-md-7" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                                <div className = "card-title p-5 m-auto " style = {{textAlign:"center"}}>
                                    <h2 className = "font-weight-light" style={{fontOpticalSizing:'auto'}}>Dietary Health Score</h2>
                                </div>
                                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"80%",textAlign:"center"}}>
                                    <p  style = {{fontSize:"22px"}}></p>
                                </div>
                                <div className = "row m-auto p-auto">
                                    <button type = "button" style = {{backgroundColor:"rgba(97, 187, 255, 0.7)"}} className = "col btn m-5">Look at dietary resources</button>
                                    <button type = "button" style = {{backgroundColor:"rgba(97, 187, 255, 0.7)"}} className = "col btn m-5" p-auto>View progress report</button>
                                </div>
                                

                            </div>
                            <div className = "col-sm-5 m-auto p-5">
                                <p>Diet Pie Chart</p>
                                <Doughnut className = "p-auto"
                                    data={DietData}
                                    height = {400}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br><hr className = "solid m-auto p-2"></hr><br></br>
                    <div className = "container m-auto p-auto">
                        <div className = "row m-auto p-auto">
                            <div className = "col-sm-5 m-auto p-5">
                                <p>Personal Pie Chart</p>
                                <Doughnut className = "p-auto"
                                    data={PersonalData}
                                    height = {400}
                                />
                            </div>
                            <div className = "card m-auto p-3 col-md-7" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                                <div className = "card-title p-5 m-auto " style = {{textAlign:"center"}}>
                                    <h2 className = "font-weight-light" style={{fontOpticalSizing:'auto'}}>Personal Overall Score</h2>
                                </div>
                                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"80%",textAlign:"center"}}>
                                    <p  style = {{fontSize:"22px"}}></p>
                                </div>
                                <div className = "row m-auto p-auto">
                                    <button type = "button" style = {{backgroundColor:"rgba(253, 208, 64, 0.7)"}} className = "col btn m-5">View Fitness Resources</button>
                                    <button type = "button" style = {{backgroundColor:"rgba(253, 208, 64, 0.7)"}} className = "col btn m-5" p-auto>View progress report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                </div>
            </>
        );
    }
}


