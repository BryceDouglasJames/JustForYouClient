import React from 'react';


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
                <div class="card border-info mb-3" style={{maxwidth: 18}}>
                    <div class="card-title border text-red bg-primary mb-3">More Daily Challenges</div>
                    <br></br> 
                    <div class="card-title border text-blue bg-success mb-3">Ask Questions</div>
                    <br></br> 
                    <div class="card-title border text-black bg-secondary mb-3">Health Facts</div>
                    <br></br> 
                    <div class="card-title border text-purple bg-danger mb-3">Reminders</div>
                    <br></br> 
                    <div class="card-title border text-black bg-dark mb-3">Schedule A Counseling Session</div>
                    <div class="card border-info">
                    <div class="card-title">Health Services Contact Info</div>
                    </div>
                    </div>
                </div>
        </div>
    );
}
export default Resources;