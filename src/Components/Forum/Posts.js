import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//rendered when the route is "/posts"
function Posts(){
    return (
        <div class="container">
            <div class="inner-wrapper">
                <div class="inner-sidebar">
                    <div class="inner-sidebar-header justify-content-center">
                        <button class="btn btn-primary has-icon btn-block" type="button" data-toggle="modal" data-target="#threadModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                        NEW POST
                        </button>
                        <div class="inner-sidebar-body auto">
                            <div class="p-3 h-100" data-simplebar="init">
                                <div class="simplebar-wrapper" style={{margin: "-16PX"}}>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inner-main-body p-2 p-sm-3 collapse forum-content show">
                <div class="card mb-2">
                    <div class="card-body p-2 p-sm-3">
                        <div class="media forum-item">
                            <a href="#" data-toggle="collapse" data-target=".forum-content"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="mr-3 rounded-circle" width="50" alt="User" /></a>
                            <div class="media-body">
                                <h6><a href="#" data-toggle="collapse" data-target=".forum-content" class="text-body">My first community post!</a></h6>
                                <p class="text-secondary">
                                    I am navigating the website very well! How is everyone else doing?!
                                </p>
                                <p class="text-muted"><a href="javascript:void(0)">{sessionStorage.getItem("USERNAME")}</a> replied <span class="text-secondary font-weight-bold">13 minutes ago</span></p>
                            </div>
                            <div class="text-muted small text-center align-self-center">
                                <span class="d-none d-sm-inline-block"><i class="far fa-eye"></i> 19</span>
                                <span><i class="far fa-comment ml-2"></i> 3</span>
                            </div>
                        </div>
                    </div>
                </div>

                <ul class="pagination pagination-sm pagination-circle justify-content-center mb-5">
                    <li class="page-item disabled">
                        <span class="page-link has-icon" href="javascript:void(0)"><i class="material-icons">left</i></span>
                    </li>
                    <li class="page-item active"><span class="page-link" href="javascript:void(0)">1</span></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                    <li class="page-item">
                        <a class="page-link has-icon" href="javascript:void(0)"><i class="material-icons">right</i></a>
                    </li>
                </ul>
            </div>
            <div class="inner-main-body p-2 p-sm-3 collapse forum-content">
                <a href="#" class="btn btn-light btn-sm mb-3 has-icon" data-toggle="collapse" data-target=".forum-content"><i class="fa fa-arrow-left mr-2"></i>Back</a>
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="media forum-item">
                            <a href="javascript:void(0)" class="card-link">
                                <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="rounded-circle" width="50" alt="User" />
                                <small class="d-block text-center text-muted">{sessionStorage.getItem("USERNAME")}</small>
                            </a>
                            <div class="media-body ml-3">
                                <a href="javascript:void(0)" class="text-secondary">AYO</a>
                                <small class="text-muted ml-2">1 hour ago</small>
                                <h5 class="mt-1">Realtime fetching data</h5>
                                <div class="mt-3 font-size-sm">
                                    <p>Hellooo :)</p>
                                    <p>
                                        I'm newbie with Just For You and I just accoumplished my daily goal today! Have a great week everyone!
                                    </p>
                                </div>
                            </div>
                            <div class="text-muted small text-center">
                                <span class="d-none d-sm-inline-block"><i class="far fa-eye"></i> 19</span>
                                <span><i class="far fa-comment ml-2"></i> 3</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-2">
                    <div class="card-body">
                        <div class="media forum-item">
                            <a href="javascript:void(0)" class="card-link">
                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="rounded-circle" width="50" alt="User" />
                                <small class="d-block text-center text-muted">Other User</small>
                            </a>
                            <div class="media-body ml-3">
                                <a href="javascript:void(0)" class="text-secondary">Other User</a>
                                <small class="text-muted ml-2">1 hour ago</small>
                                <div class="mt-3 font-size-sm">
                                    <p>Hello! {sessionStorage.getItem("USERNAME")}, Glad to see you achieved your goal, keep it up! </p>
                                </div>
                                <button class="btn btn-xs text-muted has-icon"><i class="fa fa-heart" aria-hidden="true"></i>1</button>
                                <a href="javascript:void(0)" class="text-muted small">Reply</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div class="modal fade" id="threadModal" tabindex="-1" role="dialog" aria-labelledby="threadModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <form>
                        <div class="modal-header d-flex align-items-center bg-primary text-white">
                            <h6 class="modal-title mb-0" id="threadModalLabel">New Post</h6>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label for="threadTitle">Title</label>
                                <input type="text" class="form-control" id="threadTitle" placeholder="Enter title" autofocus="" />
                            </div>
                            <textarea class="form-control summernote" style={{display: "none"}}></textarea>
                            <div class="custom-file form-control-sm mt-3" style={{maxwidth: "300px"}}>
                                <input type="file" class="custom-file-input" id="customFile" multiple="" />
                                <label class="custom-file-label" for="customFile">Attachment</label>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
    
    // <div>
    //     <div class="jumbotron text-center">
    //         <div class="container">
    //             <div class="row align-items-center my-4">
    //                 <div class="col-lg-5">
    //                     <h1 class="font-weight-light">Community Posts</h1>
    //                     <p> Welcome to Just For You Community Posts</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>

    //     <Card class="rounded p-5 col-xl-12">
    //       <Card.Header>Featured Community Post</Card.Header>
    //       <Card.Body>
    //         <Card.Title>UserName: Special title</Card.Title>
    //         <div class="col-sm-9">
    //             <h4><small>Recent Posts</small></h4>
    //             <hr></hr>
    //             <h2>I Achieved my Daily Goal</h2>
    //             <h5><span class="glyphicon glyphicon-time"></span>Posted by UserName, April 12th, 2021</h5>
    //             <h5><span class="label label-danger">Goal</span></h5>
    //         </div>
    //         <Card.Text>
    //             User Generated post content
    //         </Card.Text>
    //         <Button>Read Now</Button>
    //         <h4><small>RECENT POSTS</small></h4>
    //         <hr></hr>
    //         <h2>Blogging</h2>
    //       </Card.Body>
    //       <Card.Footer><small class="text-muted">posted 2 hours ago.</small></Card.Footer>
    //     </Card>
    //     </div>
    );}
export default Posts;
