import React, {Component} from "react"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"

export class Signup extends React.Component{

    state = {
        username:'',
        password:'',
    }

    handleFormSubmit( event ) {
        event.preventDefault();

        let logindata = new FormData();
        logindata.append('username', this.state.username);
        logindata.append('password', this.state.password);

        //change this ip address to Xampp's
        axios.post("http://192.168.64.2/JustForYouAPI/public/login", logindata)
        .then(resp=> console.log(resp))
        .catch(err=>console.log(err));

    }
    // renders a username and password login form
    render(){
        return (
            <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Sing Up</div>
                <div className="content" >
                    <div className="image">
                        <center> <img src="mh.png" height="60px" width="60px" /></center>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name ="username" placerholder="enter username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name ="email" placerholder="enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="enter password"/>
                        </div>
                    </div>
                </div>
                <div className="fotter">
                    <button type="button" className="btn" value="Sign Up">
                        Sign Up
                    </button>
                </div>
                <div name="form-group">
                    <div name="custom-control custom-checkbox">
                        <input type="checkbox" name="custom-control-input" id="customCheck" />
                        <label name="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            </div>
        );
    }
}