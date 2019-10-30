import React, { Component } from 'react';
import './App.css';
import SignIn from "./modules/signin/index.js"
import SignUp from "./modules/signup/index.js";
import ForgotEmail from "./modules/forgotemail/index.js";
import GoogleMainPage from "./modules/GoogleMainPage/index.js";
import GoogleTranslate from "./modules/GoogleTranslate/index.js";
import Home from "./modules/home/index.js";
import store from "./store/store";
import { Provider } from "react-redux"
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/t" render={() => <GoogleMainPage/>}/>
            <Route exact path="/signedin" render={() => <SignIn/>}/>
            <Route exact path="/home" render={() => <Home/>}/>
            <Route exact path="/emails/:emailId" render={() => <Home/>}/>
            <Route exact path="/signin" render={() => <SignIn/>}/>
            <Route exact path="/signup" render={() => <SignUp/>}/>
            <Route exact path="/forgotemail" render={() => <ForgotEmail/>}/>
            <Route exact path="/" render={() => <GoogleTranslate/>}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
