import React from 'react';


//rendered when the route is "/resources"
function Resources(){
    return (
        <div className="jumbotron text-center">
            <div class="col-lg-3 col-md-6">
                <form class="form-inline mt-2 ml-2">
                    <input class="form-control my-0 py-0" type="text" placeholder="Search" style={{maxWidth: 140}} />
                    <button class="btn btn-info ml-2 px-2">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div class="container p-3 my-3 border">
                <div class="row align-items-center my-4">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Resources</h1>
                        <p> Welcome! Check back soon for some great resources!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Resources;