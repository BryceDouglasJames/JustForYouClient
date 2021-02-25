import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createPHPCallInstance} from "./api/fetch";
import {API} from './api/api';
import './App.css';

//==========COMPONENTS============
import LoginPage from './Components/Login/LoginPage';
import SignUp from './Components/SignUp/SignUp';

//==========PROVIDERS============
import APIProvider from "./Components/APIContext";
import AuthenticationProvider from "./Components/User/AuthenticationProvider"
import UserProvider from './Components/User/UserProvider';


function App() {
  
  const apiInstance = new API({
    callbackInstance: createPHPCallInstance(
      { baseUrl: "http://192.168.64.3/justforyouapi/public/" }
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