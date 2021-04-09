import React from 'react';
import { Link } from 'react-router-dom';




function Resources(){
    return (
        <div class="container-fluid text-center  m-auto">
            <div class="row content">
                <div class="col-sm-2 sidenav">
                <h4>Available Resource</h4>
                    <p><a href="#">Public Health Newsletter</a></p>
                    <p><a href="#">Mental Resources</a></p>
                    <p><Link to="/posts">Community Posts</Link></p>
                    <p><a href="#">Peoples and Groups</a></p>
                    <p><a href="#">How to get Help</a></p>
                    <p><a href="#">More Resources</a></p>
                </div>
                <div class="col-sm-8 text-left">
                    <h1>Forum Home Page</h1>
                    <hr></hr>
                    <h3></h3>
                    <p>PlaceHolder...</p>
                </div>
                <div class="col-sm-2 sidenav">
                    <div class="well">
                        <p>PLACEHOLDER</p>
                    </div>
                    <div class="well">
                        <p>PLACEHOLDER</p>
                    </div>
                    <div class="well">
                        <p>PLACEHOLDER</p>
                    </div>
                    <div class="well">
                        <p>PLACEHOLDER</p>
                    </div>
                    <div class="well">
                        <p>PLACEHOLDER</p>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Resources

