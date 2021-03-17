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
                    <h2>Welcome! <br></br></h2>
                    <br></br><br></br>
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
                </div>
            </>
        );
    }
}


