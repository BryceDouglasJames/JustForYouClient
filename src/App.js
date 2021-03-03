import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import { createPHPCallInstance} from "./api/fetch";
import {API} from './api/api';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//==========COMPONENTS============
import LoginPage from './Components/Login/LoginPage';
import SignUp from './Components/SignUp/SignUp';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';

//==========PROVIDERS============
import APIProvider from "./Components/APIContext";
import AuthenticationProvider from "./Components/User/AuthenticationProvider"
import UserProvider from './Components/User/UserProvider';


function App() {
  
  const apiInstance = new API({
    callbackInstance: createPHPCallInstance(
      { baseUrl: "http://137.140.141.39/JustForYouAPI/public/" }
    ),
  });

  //First: Need api context.
  //TODO: Need authentication layer!
  //Third: Need User context for api
  return (
      <APIProvider api = {apiInstance}>
        <AuthenticationProvider>
          <UserProvider>
            <Router>
              <Switch>
                <Route path="/home/" component={Home}>
                  <Navbar></Navbar>
                </Route>
                <Route path = "/login"> 
                  <LoginPage></LoginPage>
                </Route>
                <Route path = "/signup">
                  <SignUp></SignUp>
                </Route>
              </Switch>
            </Router>
          </UserProvider>
        </AuthenticationProvider>
      </APIProvider>
  );
}

export default App;