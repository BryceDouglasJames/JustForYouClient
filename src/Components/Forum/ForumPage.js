import React from 'react';



function ForumPage(){
    return (
        <div className="forum ">
            <div class="container">
                <div class="col-sm-4">
                    <h3 class="font-weight-light text-center">Forum Home Page</h3>
                </div>
                <div class="row align-items-center my-4">
                    <div className = "container m-auto p-3">
                        <div className = "row m-auto p-auto">
                            <div className = "card m-auto p-3 col-md-7" style = {{width: "auto", height: "auto", alignItems: "center", backgroundColor: "gainsboro"}}>
                                <div className = "card-title p-5 m-auto" style = {{textAlign:"center"}}>
                                    <h3 style={{fontOpticalSizing:'auto'}}>Today's Forum</h3>
                                </div>
                                <div className = "card-body m-auto" style = {{border:"2px ridge black", borderRadius:"5px", width:"100%",textAlign:"center"}}>
                                    <p>Check back soon for latest updates</p>
                                </div>
                                <button type = "button" className = "btn btn-outline-secondary m-5">Take a Look!</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
export default ForumPage;