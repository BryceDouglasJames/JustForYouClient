import React, {useContext, useState, setState} from 'react'
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
    //dropdown menu components with links 
      return(
        <>
          <nav className="navbar navbar-expand-lg navbar-dark m-auto" style = {{backgroundImage: "linear-gradient(rgba(110,94,254,0.6)0%, rgba(73,63,252,1)100%)"}}>
              <Link className="navbar-brand" to='/' style = {logoStyle}>
                  
                <h1 className = "p-4 font-weight-light">Just For You</h1>
                  
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
                    <a className="nav-link text-center m-auto p-auto" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {linkStyle}>
                      &ensp;&ensp;Forum&#8595;
                    </a>
                    <div className="dropdown-menu m-auto p-5" aria-labelledby="navbarDropdown" >
                      <Link className="dropdown-item" to="/resources" href="#">Resources</Link>
                      <Link className="dropdown-item" to="/outlets" href="#">Commmunity Outlets</Link>
                      <Link className="dropdown-item" to="/posts" href="#">View Community Posts</Link>
                      <div className="dropdown-divider"></div>
                      <Link className = "dropdown-item" to="/forum">Forum Home</Link>
                    </div>
                  </li>

                  <li data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <a className="nav-link text-center m-auto p-auto" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = {linkStyle}>
                      &ensp;&ensp;Settings&#8595;
                    </a>
                    <div className="dropdown-menu m-auto p-5" aria-labelledby="navbarDropdown" >
                      <a className="dropdown-item" href="#">Preferences</a>
                      <a className="dropdown-item" href="#">Log Out</a>
                      <div className="dropdown-divider"></div>
                      <Link className = "dropdown-item" to="/settings">Account Overview</Link>
                      <a className="dropdown-item" href="#">User: {sessionStorage.getItem("USERNAME")}</a>
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
