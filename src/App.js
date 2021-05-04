import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createPHPCallInstance} from "./api/fetch";
import {API} from './api/api';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//==========Pages============
import Resources from './Components/Forum/Resources';
import Outlets from './Components/Forum/Outlets';
import Posts from './Components/Forum/Posts';
//==========COMPONENTS============
import LoginPage from './Components/Login/LoginPage';
import Navbar from './Components/navbar';
import Home from './Components/Pages/Home';
import Forum from './Components/Forum/ForumPage';
import UserSettings from './Components/User/UserSettings';
import SignUpControl from './Components/SignUp/SignUpControl';
import Footer from './Components/Footer'
import ProfilePage from './Components/User/ProfilePage';
import GetAllPosts from "./Components/AllUserPosts"
import UserPostForm from "./Components/Forum/UserPostForm"
//==========PROVIDERS============
import APIProvider from "./Components/APIContext";
import AuthenticationProvider from "./Components/User/AuthenticationProvider"
import UserProvider from './Components/User/UserProvider';
import ActivityDashboard from "./Components/Assistant/ActivityDashboard";
import GetUserScores from "./Components/AllUserScores";
import QOD from "./Components/QOD"


function App() {
  
  const apiInstance = new API({
    callbackInstance: createPHPCallInstance(
      { baseUrl: "http://192.168.64.3/justforyouapi/public/" }
    ),
  });

  return (
      <APIProvider api = {apiInstance}>
        <GetAllPosts></GetAllPosts>
        <GetUserScores></GetUserScores>
        <QOD></QOD>
        <AuthenticationProvider>
          <UserProvider>
            <Router>
              <Switch>
                <Route exact path="/home">
                  <Home></Home>
                  <Footer></Footer>
                </Route>
                <Route exact path = "/"> 
                  <LoginPage></LoginPage>
                </Route>
                <Route exact path = "/activity">
                  <Navbar></Navbar>
                  <ActivityDashboard></ActivityDashboard>
                  <Footer></Footer>    
                </Route>
                <Route exact path = "/signup">
                    <SignUpControl></SignUpControl>
                </Route>
                <Route exact path = "/forum">
                  <Navbar></Navbar>
                  <Forum></Forum>
                  <Footer></Footer>
                </Route>
                <Route exact path = "/resources">
                  <Navbar></Navbar>
                  <Resources></Resources>
                  <Footer></Footer>
                </Route>
                <Route exact path = "/posts">
                  <Navbar></Navbar>
                  <Posts></Posts>
                  <Footer></Footer>
                </Route>
                <Route exact path = "/posts/new">
                  <Navbar></Navbar>
                  <UserPostForm></UserPostForm>
                  <Footer></Footer>
                </Route>
                <Route exact path = "/outlets">
                  <Navbar></Navbar>
                  <Outlets></Outlets>
                  <Footer></Footer>
                </Route>
                <Route exact path = "/settings">
                  <Navbar></Navbar>
                  <UserSettings></UserSettings>
                  <ProfilePage></ProfilePage>
                  <Footer></Footer>
                </Route>
              </Switch>
            </Router>
          </UserProvider>
        </AuthenticationProvider>
      </APIProvider>
  );
}

export default App;