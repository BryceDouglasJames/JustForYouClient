import React, {Component} from "react"
import axios from 'axios'

class LoginPage extends Component{

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
        return(
            <>
            <form align="center">
                <label for="username">Username or Email</label><br></br>
                <input type="Username" placeholder="Enter your e-mail address" 
                
                    onChange={e => this.setState({ name: e.target.value })}/>
                <br></br><br></br>
                <label id ="password">Password</label><br></br>
                <input type="password" name = "password" placeholder="Enter password"
                    onChange={e => this.setState({ password: e.target.value })}/>
                <br></br><br></br>
                <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Sign In"/>
                &nbsp; &nbsp;
                <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Sign Up"/>
            </form>
            </>
        )
    }
}

export default LoginPage;