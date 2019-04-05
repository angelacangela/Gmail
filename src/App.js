import React, { Component } from 'react';
import './App.css';
import SignIn from "./modules/signin/index.js"
import SignUp from "./modules/signup/index.js";
import ForgotEmail from "./modules/forgotemail/index.js";
import Home from "./modules/home/index.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "SignIn"
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    const { currentPage } = this.state;
    if (currentPage === "SignIn") {
      return (
        <div className="App">
          <SignIn changePage={this.changePage}/>
        </div>
      )
    } else if (currentPage === "SignUp") {
      return (
        <div className="App">
          <SignUp changePage={this.changePage}/>
        </div>
      )
    } else if (currentPage === "ForgotEmail") {
      return (
        <div className="App">
          <ForgotEmail changePage={this.changePage}/>
        </div>
      )
    } else if (currentPage === "EmailList") {
      return (
        <div className="App">
          <Home changePage={this.changePage}/>
        </div>
      )
    }
  }
}

export default App;
