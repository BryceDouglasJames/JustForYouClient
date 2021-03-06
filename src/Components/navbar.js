import React, {useContext, useState, setState} from 'react'
import { MenuItems } from "./MenuItems"
import { Button } from "../Components/Button"
import { Redirect, Link } from 'react-router-dom';
import { AuthenticationContext } from './User/AuthenticationProvider'
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

// navbar with menu icons 
export default function Navbar(){

  const {isAuthenticated} = new useContext(AuthenticationContext);

  if(!isAuthenticated){
    return <Redirect to = "/"></Redirect>
  }else{
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

      return(
        <>
          <nav className="navbar navbar-expand-lg navbar-dark m-auto" style = {{backgroundImage: "linear-gradient(rgba(110,94,254,0.6)0%, rgba(73,63,252,1)100%)"}}>
              <Link className="navbar-brand" to='/' style = {logoStyle}>
                  
                <h3 className = "p-4">Just For You</h3>
                  
              </Link>  
              <button className="navbar-toggler p-3" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style = {{position: "initial"}}>
                  <span className="navbar-toggler-icon"></span>
                  <br></br>
              </button>
              <div className="collapse navbar-collapse m-auto" id="navbarNavAltMarkup">
                  <div className="navbar-nav p-auto mx-auto" style={{backgroundRepeat: "repeat", backgroundSize: "cover"}}>
                      
                  <li data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <Link  className = "nav-link text-center m-auto p-auto" to="/home" style = {linkStyle}>
                          &ensp;&ensp;Home
                          </Link>
                      </li>
                      <li data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <Link  className = "nav-link text-center m-auto p-auto" to="/forum" style = {linkStyle}>
                          &ensp;&ensp;Forum
                          </Link>
                      </li>
                      <li data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                          <Link  className = "nav-link text-center m-auto p-auto" to="/settings" style = {linkStyle}>
                          &ensp;&ensp;Settings
                          </Link>
                      </li>
                  
                  </div>
              </div>
          </nav>
        </>
      );
  }
}
