import React from 'react';
import { Link } from 'react-router-dom';
import Posts from "../Forum/Posts"
import Resources from "../Forum/Resources"
import Outlets from '../Forum/Outlets';
import Accordion from 'react-bootstrap/Accordion';
import {GiBrain,GiHelp,GiNewspaper,GiOpenBook, GiTalk,GiConversation} from "react-icons/gi";

function ForumPage(){
    return (
        <div class="container-fluid text-center  m-auto">
            <div class="cotainer row content m-auto">
                <div class="card col-md-2 personal m-auto">
                <h2>Available Resources <hr></hr> </h2>
                    <p><a href="#"><Accordion.Toggle>  <GiNewspaper/> Public Health Newsletter </Accordion.Toggle></a></p>
                    <p><Link to="/resources"><Accordion.Toggle> <GiBrain />Mental Resources</Accordion.Toggle></Link></p>
                    <p><Link to="/posts"><Accordion.Toggle> <GiTalk />Community Posts</Accordion.Toggle></Link></p>
                    <p><Link exact path to= "/outlets"><Accordion.Toggle> <GiConversation />People and Groups</Accordion.Toggle></Link></p>
                    <p><a href="#"><Accordion.Toggle> <GiHelp />How to get help</Accordion.Toggle></a></p>
                    <p><a href="#"><Accordion.Toggle> <GiOpenBook />More Resources</Accordion.Toggle></a></p>
                </div>
                <div class=" container card col-md-8 m-auto">
                    <h1>Forum Home Page</h1>
                    <hr></hr>
                    <Resources></Resources>
                    <hr></hr>
                    <Posts></Posts>
                    <hr></hr>
                    
                    
                </div>
            </div>
        </div>    
    )
}

export default ForumPage

