import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from './Components/Login/LoginPage'
import UserProvider from './Components/User/UserProvider'

function App() {
  return (
    <>
      <UserProvider>
        <Router>
          <Switch>
            <Route path = "/">
              <LoginPage></LoginPage>
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
