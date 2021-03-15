import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {DropdownButton, Dropdown} from 'react-bootstrap'

export default function ForumPage(){
    return (
        <div className = "m-auto p-auto" style = {{textAlign:"center"}}>
            <br></br><br></br>
            <h1>Got Questions?</h1>
            <Container>
                <Row>
                    <Col md={4}>Resources</Col>
                    <Col md={4}>Outlets</Col>
                    <Col md={4}>Weekly Community Updates</Col>
                </Row>
            </Container>

            <p>Hey there, you'll see forum posts here soon</p>
        </div>
    );
}
