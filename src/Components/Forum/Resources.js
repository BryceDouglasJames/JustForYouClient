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
                <form class="form-inline mt-2 ml-2">
                    <input class="form-control my-0 py-0" type="text" placeholder="Search" style={{maxWidth: 140}} />
                    <button class="btn btn-info ml-3">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div class="container p-3 my-3 border">
                <div class="row align-items-center my-4">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Resources</h1>
                    </div>
                </div>

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