import React, {useContext} from 'react'
import { Redirect, Link } from 'react-router-dom';
import { AuthenticationContext } from './User/AuthenticationProvider'
import {APIContext} from "./APIContext"
import {BsChevronDown} from "react-icons/bs";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../background.css"

export default function Navbar(){
  const api = useContext(APIContext);
  const {isAuthenticated} = new useContext(AuthenticationContext);

  /*
  * FUNCTION THAT SENDS LOGOUT REQUEST TO BACKEND AND KILLS SESSION
  */
  async function logout(username){
    if (!username) return;
    try {
        await api.loginUser({ username })
        .then(resp => {
            console.log(resp);
            if(resp !== undefined || resp !== null){
                sessionStorage.removeItem("USERNAME");
                window.location.reload(false);
            }
        })
    }catch(err) {
        alert(err);
    }
    
}

  {/*
    *   IF USER IS NOT AUTHENTICATED, SEND THEM TO THE LOGIN PAGE
    */}
  if(!isAuthenticated){
    return <Redirect to = "/"></Redirect>
  }else{

    /*
    * STYLE OBJECT VARIABLES
    */
    const logoStyle = {
      width: "70%",
      height: "100%",
      display: "flex",
      position: "relative",
      color: "white"
    }
    const linkStyle = {
      color: "white",
      display: "flex",
      backgroundSize: "20%",
      margin: "10px 5px 10px 5px",
      fontSize: "20px",
      textDecoration: "none",
    }

    /*
    * DROPDOWN NAVBAR
    */
      return(
        <>
          <nav className="navbar navbar-expand-lg navbar-dark m-auto niceBackground" style = {{backgroundImage: "linear-gradient(rgba(110,94,254,0.6)0%, rgba(73,63,252,1)100%)"}}>
              
              {/*
               *  LOGO/HOME BUTTON
               */}
              <Link className="navbar-brand" to='/home' style = {logoStyle}>
                <h1 className = "p-4 font-weight-light">Just For You</h1>
              </Link>  

              {/*
               *  IF SCREEN SIZE IS SMALL, DISPLAY NAVBAR BUTTON
               */}
              <button className="navbar-toggler p-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style = {{position: "initial"}}>
                  <span className="navbar-toggler-icon"></span>
                  <br></br>
              </button>
              <div className="collapse navbar-collapse m-4 p-auto" id="navbarNavAltMarkup">
                <div className="navbar-nav p-auto mx-auto" style={{backgroundRepeat: "repeat", backgroundSize: "cover"}}>

                  {/*
                    * ACTIVITY TAB
                    */}
                  <li data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <a className="nav-link text-center m-auto p-auto" href="drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {linkStyle}>
                      <p>&ensp;&ensp;Activity&emsp;<BsChevronDown/></p>
                    </a>
                    <div className="dropdown-menu m-auto p-5" aria-labelledby="navbarDropdown" >
                      <Link className="dropdown-item" to="/activity" href="#">Dashboard</Link>
                    </div>
                  </li>

                  {/*
                    * FORUM TAB
                    */}
                  <li data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <a className="nav-link text-center m-auto p-auto" href="drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {linkStyle}>
                      <p>&ensp;&ensp;Forum&emsp;<BsChevronDown/></p>
                    </a>
                    <div className="dropdown-menu m-auto p-5" aria-labelledby="navbarDropdown" >
                      <Link className = "dropdown-item" to="/forum">Forum Home</Link>
                    </div>
                  </li>

                  {/*
                    * SETTINGS TAB
                    */}
                  <li data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-label="Toggle navigation">
                    <a className="nav-link text-center m-auto p-auto" href="drop" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {linkStyle}>
                      <p>&ensp;&ensp;Settings&emsp;<BsChevronDown/></p>
                    </a>
                    <div className="dropdown-menu m-auto p-5" aria-labelledby="navbarDropdown" >
                      <p>&ensp;&ensp; User: {sessionStorage.getItem("USERNAME")}</p>
                      <div className="dropdown-divider"></div>
                      <Link className = "dropdown-item" to="/settings">Account Overview</Link>
                      <a className="dropdown-item" href="drop" onClick={logout}>Log Out</a>
                    </div>
                  </li>
                  <br></br>
                </div>
              </div>
          </nav>
        </>
        
      );
  }
}
