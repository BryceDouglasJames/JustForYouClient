import React, {Component} from "react"
import axios from 'axios'

class LoginPage extends Component{

    state = {
        name:'',
        pass:''
    }


    handleFormSubmit( event ) {
        event.preventDefault();

        let logindata = new FormData();
        logindata.append('name', this.state.name);
        logindata.append('pass', this.state.pass);

        //change this ip address
        axios.post("http://192.168.64.2/JustForYouAPI/public/login", logindata)
        .then(resp=> console.log(resp))
        .catch(err=>console.log(err));

    }

    render(){
        return(
            <>
            <form>
                <label for="name">Name</label><br></br>
                <input type="text" id="user" name="name" 
                    onChange={e => this.setState({ name: e.target.value })}/>
                <br></br><br></br>
                <label for ="pass">Password</label><br></br>
                <input type="password" name = "pass"
                    onChange={e => this.setState({ pass: e.target.value })}/>
                <br></br><br></br>
                <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Add user" />
            </form>
            </>
        )
    }
}

export default LoginPage;