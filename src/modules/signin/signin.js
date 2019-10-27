import React, { Component } from "react";
import "../../styles/signin.css";
import { Link } from "react-router-dom";

const googlelogo = require("../../assets/googlelogo.png");

class SignIn extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
          <div className="bigBox">
            <div className="innerBox">
              <div className="innerofInner">
                <div className="googleLogoBox">
                  <img
                      className="googleLogo"
                      src={googlelogo}
                  />
                </div>
                <div className="signInLetter">
                Sign in
                </div>
                <div className="toContinue">
                to continue to Gmail
                </div>
                <div className="emailInput">
                  <input
                      id="email"
                      placeholder="Email or phone"
                  />
                </div>
                <Link
                  className="forgotEmail"
                  to="./forgotemail"
                >
                Forgot email?
                </Link>
                <div className="notYour">
                Not your computer? Use Guest mode to sign in privately.
                </div>
                <div className="learnMore">
                Learn more
                </div>
                <div className="createOrNext">
                  <Link
                    className="createAccount"
                    to="/signup"
                  >
                    Create account
                  </Link>
                  <div className="nextButton">
                  <Link
                    className="signIntoGmailpage"
                    to="./GmailPage"
                  >
                  Next
                  </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="lowerBox">
              <div className="languageBox">
              English (United States)
              </div>
              <div className="hptboxes">
                <div className="help">
                Help
                </div>
                <div className="privacy">
                Privacy
                </div>
                <div className="terms">
                Terms
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
    export default SignIn;
