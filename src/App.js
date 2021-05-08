import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createPHPCallInstance} from "./api/fetch";
import {API} from './api/api';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//==========COMPONENTS============
import Resources from './Components/Forum/Resources';
import Outlets from './Components/Forum/Outlets';
import LoginPage from './Components/Login/LoginPage';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Forum from './Components/Forum/ForumPage';
import SignUpControl from './Components/SignUp/SignUpControl';
import Footer from './Components/Footer'
import ProfilePage from './Components/User/ProfilePage';
import UserPostForm from "./Components/Forum/UserPostForm"

//==========PROVIDERS============
import APIProvider from "./Components/APIContext";
import AuthenticationProvider from "./Components/User/AuthenticationProvider"
import UserProvider from './Components/User/UserProvider';
import ActivityDashboard from "./Components/Assistant/ActivityDashboard";
import GetUserScores from "./Components/HydrationProviders/AllUserScores";
import GetAllPosts from "./Components/HydrationProviders/AllUserPosts"
import AllUserProfileStats from "./Components/HydrationProviders/AllUserProfileStats"
import QOD from "./Components/HydrationProviders/QOD"
import AllUserSuggestions from "./Components/HydrationProviders/AllUserSuggestions";


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
        <AllUserProfileStats></AllUserProfileStats>
        <AllUserSuggestions></AllUserSuggestions>
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