import React from 'react';
import "./Outlets.css";

//rendered when the route is "/outlets"
function Outlets(){
    return (
        <div class="container-fluid text-center">
            <div class="row content">
                <div class="col-sm-2 sidenav">
                <h4>Outlet Links</h4>
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                    <p><a href="#">Link</a></p>
                </div>
                <div class="col-sm-8 text-left">
                    <h1>JustForYou Outlets</h1>
                    <hr></hr>
                    <h3>Test</h3>
                    <p>PlaceHolder...</p>
                </div>
                <div class="col-sm-2 sidenav">
                    <div class="well">
                        <p>ADS</p>
                    </div>
                    <div class="well">
                        <p>ADS</p>
                    </div>
                </div>
            </div>
        </div>
            
    );
}
export default Outlets;