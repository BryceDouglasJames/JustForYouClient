import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as ReactBooStrap from "react-bootstrap";
import { MenuItems } from "./MenuItems"
import { Button } from "../Components/Button"
import './Navbar.css'

// navbar with menu icons 
class Navbar extends Component {

  state = { clicked: false}

  handleClick = () => {
    this.setState({clicked: !this.state.clicked })
  }


  render() {
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Mental Health<i className="fab fa-mentalhealth"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return ( 
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default Navbar