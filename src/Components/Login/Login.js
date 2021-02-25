import React, {Component} from "react"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"


export class Login extends React.Component{

    state = {
        username:'',
        password:'',
        loginErros: '',
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
    handleChange(event){
        this.setState( {
            [event.target.username]: event.target.value
        });
    }
    // renders a username and password login form
    render() {
        return (
            <div className="base-container" ref={this.state.containerRef}>
                <div className="header">Login</div>
                <div className="content" >
                    <div className="image">
                        <center> <img src="mh.png" height="60px" width="60px" /></center>
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label >
                            <input type="username" name ="username" placeholder="Enter your username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter your password"/>
                        </div>
                    </div>
                </div>
                <div className="fotter">
                    <button type="submit" className="btn" value="Login">
                        Login
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
