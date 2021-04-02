import React from 'react';
import "./ProfilePage.css";

function ProfilePage(){
    return (
        <div class="container">
            <div class="row gutters">
                <div class="col-xl-3  col-md-12 col-sm-12 col-12">
                    <div class="card h-35">
                        <div class="card-body">
                            <div class="account-settings">
                                <div class="user-profile">
                                    <div class="user-avatar">

                                    </div>
                                    <h5 class="user-name">Tester</h5>
                                    <h6 class="user-email">tester@info.com</h6>
                                </div>
                                <div class="about">
                                    <h5>About</h5>
                                    <p>Placeholder for user About Section </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div class="card h-35">
                            <div class="card-body">
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 class="mb-2 text-primary">Personal Details</h6>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" class="form-control" id="fullName" placeholder="Enter full Name"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="fullName">Full Username</label>
                                            <input type="text" class="form-control" id="username" placeholder="Enter full Username"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="fullName">Email</label>
                                            <input type="email" class="form-control" id="Email" placeholder="Enter full Email"></input>
                                        </div>
                                        <div class="form-group">
                                            <label for="fullName">Phone</label>
                                            <input type="text" class="form-control" id="phone" placeholder="Enter phone number"></input>
                                        </div>
                                    </div>
                                </div>
                                <div class="row gutters">
                                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <h6 class="mt-3 mb-2 text-primary">Address</h6>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="Street">Street</label>
                                            <input type="text" class="form-control" id="Street" placeholder="Enter Street"></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="Street">City</label>
                                            <input type="text" class="form-control" id="city" placeholder="Enter City"></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="Street">State</label>
                                            <input type="text" class="form-control" id="State" placeholder="Enter State"></input>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                        <div class="form-group">
                                            <label for="Street">Zip Code</label>
                                            <input type="text" class="form-control" id="Zip Code" placeholder="Enter Zip code"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutters">
                                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div class="text-right">
                                        <button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
                                        &ensp;&ensp;&ensp;&ensp;
                                        <button type="button" id="submit" name="submit" class="btn btn-secondary">Update</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>


    );
}
export default ProfilePage;
