import React, {useContext, useState} from 'react';
import {UserContext} from "../User/UserProvider"
import QuestionPopup from "../Assistant/QuestionsPopup"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container, Row, Card,Button, Col} from 'react-bootstrap'

//pops up questions upon login & Displays a daily nutrition challenge
export default function Home(){
    const {showQuestions} = new useContext(UserContext);

    const[state, setState] = new useState({

    });

    if(showQuestions){
        return(
            <QuestionPopup></QuestionPopup>
        )
    }else{
        return (
            <>
                <div className = "m-auto p-auto" style = {{textAlign:"center"}}>
                    <br></br><br></br>
                    
                    <br></br><br></br>
                
                    <div className = "container m-auto p-3">
                        <div className = "row m-auto p-auto">
                            <div className = "card m-auto p-3 col-md-7" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                                <div className = "card-title p-5 m-auto" style = {{textAlign:"center"}}>
                                    <h3 style={{fontOpticalSizing:'auto'}}>Daily Nutrition Challenge!</h3>
                                </div>
                                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%",textAlign:"center"}}>
                                    <p> Zinc boosts your body's immune system, helps to heal wounds, helps with hormone production
                                    and digestion, and helps you grow! Eat some food today that'll give you this essential mineral.
                                    Try turkey breast, yogurt, hummus, or cashews.</p>
                                </div>
                                <button type = "button" className = "btn btn-outline-secondary m-5">Take a look!</button>
                            </div>
                            <div className = "col-sm-5 m-auto p-5">
                                <h1>PLACEMENT</h1>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                    <div className = "container m-auto p-3">
                        <div className = "row m-auto p-auto" >
                            <div className = "col-sm-5 m-auto p-auto" style = {{alignContent:"center", alignItems:"center", textAlign: "center"}}>
                                <h1>PLACEMENT 2</h1>
                            </div>
                            <div className = "card m-auto p-3 col-md-7" style = {{width: "auto", height: "auto", alignItems: "center"}}>
                                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%",textAlign:"center"}}>
                                    <h3>Today's Survey Questions</h3>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

/*

<Container>
                <Row>
                    <Col md={8}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Daily Nutrition Challenge!</Card.Title>
                            <Card.Text>
                                Zinc boosts your body's immune system, helps to heal wounds, helps with hormone production
                                and digestion, and helps you grow! Eat some food today that'll give you this essential mineral.
                                Try turkey breast, yogurt, hummus, or cashews.
                            </Card.Text>
                            <Button variant="primary">Did it?</Button>
                        </Card.Body>
                    </Card> 
                    </Col>
                    <Col md={8}> 
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Today's Survey Questions</Card.Title>
                        </Card.Body>
                    </Card> 
                    </Col>
                </Row>
                </Container>

*/

