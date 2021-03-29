import React from 'react';


//rendered when the route is "/posts"
function Posts(){
    return (
        <div class="jumbotron text-center">
            <div class="container">
                <div class="row align-items-center my-4">
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Community Posts</h1>
                        <p> Welcome to Just For You Community Posts</p>
                    </div>
                </div>
            </div>
            <div class="media border p-3">
                <div class="media border p-12">
                    <div class="media-body">
                        <h4 class="mt-0">User name<small> <i>Posted on Month Day, Year</i></small></h4>
                        <p>Generic placeholder for post content...</p>
                        <div class="media mt-3">
                            <a class="pr-3">
                                <img src="avatar.png" alt="User Name" class="mr-3 mt-3 rounded circle" style={{width:45}}>

                                </img>
                            </a>
                            <div class="media-body">
                                <h4>Name of other users <small><i>Posted on Month Day, Year</i></small></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Posts;