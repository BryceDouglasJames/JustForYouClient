import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import CardColumns from 'react-bootstrap/CardColumns';
import Accordion from 'react-bootstrap/Accordion';
import { GiBookCover ,GiBrain,GiAchievement,GiAlarmClock,GiTalk,GiTabletopPlayers } from "react-icons/gi";

//rendered when the route is "/resources" & contains resource page content 
function Resources(){
    return (
        <div className="jumbotron text-center">
            <div class="col-lg-3 col-md-6">
            </div>
            <div class="container p-3 m-auto" style = {{border:"1px solid black"}}>
                <div class="row m-auto p-auto">
                    <div class="col-6">
                        <h1 class="font-weight-light m-auto p-auto">Resources</h1>
                    </div>
                    <form class="col-6 form m-auto">
                            <input class="form-control m-auto p-auto" type="text" placeholder="Search" style={{width:"60%"}} />
                            <button class="btn btn-info">
                                Search Keyword
                            </button>
                        
                    </form>
                </div>
                <br></br><hr className = "solid" style = {{color:"black", width:"100%"}}></hr><br></br>                    
                <div class="card-deck" style={{maxwidth: 18}}>
                    <div class="row">
                        <div class="col-sm-4">
                        <Accordion>
                        <Card class="bg-primary text-white rounded mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="0">  <GiAchievement /> More Daily Challenges  </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body class="rounded border bg-light text-dark">Extra challenges for those who want to go the extra mile on their health journey! 
                                    <br></br>
                                    <button class="rounded bg-primary text-white">Challenge Me!</button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div>
                        <div class="col-sm-4">
                        <Accordion>
                        <Card class="bg-success text-white rounded mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="0"> <GiBrain />Ask Questions</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body class="rounded border bg-light text-dark">Extra challenges for those who want to go the extra mile on their health journey! 
                                    <br></br>
                                    <button class="rounded bg-primary text-white">Challenge Me!</button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div><div class="col-sm-4">
                        <Accordion>
                        <Card class="bg-info text-white rounded mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="0"> <GiBookCover />Health Facts</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body class="rounded border bg-light text-dark">Extra challenges for those who want to go the extra mile on their health journey! 
                                    <br></br>
                                    <button class="rounded bg-primary text-white">Challenge Me!</button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div>
                    </div> 
                    <div class="row">
                    <div class="col-sm-4">
                        <Accordion>
                        <Card class="bg-danger text-white rounded mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="0"> <GiAlarmClock />Reminders</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body class="rounded border bg-light text-dark">Extra challenges for those who want to go the extra mile on their health journey! 
                                    <br></br>
                                    <button class="rounded bg-primary text-white">Challenge Me!</button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div><div class="col-sm-4">
                        <Accordion>
                        <Card class="bg-warning text-white rounded mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="0"> <GiTabletopPlayers /> Schedule a Counseling Session</Accordion.Toggle>
                           <Accordion.Collapse eventKey="0">
                                <Card.Body class="rounded border bg-light text-dark">Extra challenges for those who want to go the extra mile on their health journey! 
                                    <br></br>
                                    <button class="rounded bg-primary text-white">Challenge Me!</button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div><div class="col-sm-4">
                        <Accordion>
                        <Card class="bg-dark text-white rounded mb-2">
                            <Accordion.Toggle as={Card.Header} eventKey="0"> <GiTalk /> Health Services Contact info</Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body class="rounded border bg-light text-dark">Extra challenges for those who want to go the extra mile on their health journey! 
                                    <br></br>
                                    <button class="rounded bg-primary text-white">Challenge Me!</button>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                        </div>
                    </div>
                    </div>
        </div>

        </div>
    );
}
export default Resources;

                /*
                
                */