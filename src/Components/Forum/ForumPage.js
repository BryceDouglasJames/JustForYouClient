import React from 'react';
import {Container, Row, Card,Button, Col} from 'react-bootstrap'
import {DropdownButton, Dropdown} from 'react-bootstrap'


export default function ForumPage(){
    return (
        <div className = "m-auto p-auto" style = {{textAlign:"center"}}>
            <br></br><br></br>
            <h1>Got Questions?</h1>
            <div class="row m-auto p-5" style = {{width: "auto", height: "auto", alignItems: "center"}}>
            <Container>
                <Row>
                    <Col md={4}> Resources
                    <Card className="text-center">
                            <Card.Img variant="top" src="forum.jpg" height="300px" width="160px" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Access Resources</Button>
                        </Card.Body>
                        </Card> 
                    </Col>
                    <Col md={4}>Outlets
                    <Card className="text-center">
                            <Card.Img variant="top" src="forum.jpg" height="145px" width="160px" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button primary>Outlets</Button>
                        </Card.Body>
                        </Card> 
                    </Col>
                    <Col md={4}>Weekly Community Updates
                    <Card className="text-center">
                            <Card.Img variant="top" src="forum.jpg" height="145px" width="160px" />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">View Updates</Button>
                        </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
            </div>
            
            <p>Hey there, you'll see forum posts here soon</p>
        </div>
    );
}