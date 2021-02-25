import React from "react";
import './App.css';
import { Login } from './Components/Login/index'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProvider from './Components/User/UserProvider'

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path = "/">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;