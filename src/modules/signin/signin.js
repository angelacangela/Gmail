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
          <div id="signInBigContainer">
              <div id="signInBox">
                  <img
                      id="googlelogo"
                      src={googlelogo}
                  />
                  <div id="signIn">
                  Sign in
                  </div>
                  <div id="toContinuetoGmail">
                  to continue to Gmail
                  </div>
                  <input
                      id="signInInput"
                      placeholder="Email or phone"
                  />

                  <div id="row">
                      <div id="forgotEmail">
                      <Link
                        className="forgotemail"
                        to="./forgotemail"
                      >
                      Forgot email?
                      </Link>
                      </div>
                  </div>

                  <div id="guestMode">
                  Not your computer? Use Guest mode to sign in privately.
                  </div>
                  <div id="learnMore">
                  <a href="  https://support.google.com/chrome/answer/6130773?hl=en" target="_blank">Learn more</a>

                  </div>
                  <div id="createAccountNext">
                      <div id="createAccount">
                      <Link
                        className="signup"
                        to="./signup"
                      >
                      Create account
                      </Link>
                      </div>
                      <div id="next">
                      <Link
                        className="next"
                        to="./home"
                      >
                      Next
                      </Link>
                      </div>
                  </div>
              </div>
              <div id="Help">
                  <div id="leftBox">
                      <select id="languageBox">
                          <option value="Afrikaans">Afrikaans</option>
                          <option value="azerbaycan">azerbaycan</option>
                          <option value="catala">catala</option>
                          <option value="Cestina">Cestina</option>
                          <option value="Dansk">Dansk</option>
                          <option value="Deutsch">Deutsch</option>
                          <option value="eesti">eesti</option>
                          <option value="English (United Kingdom)">English (United Kingdom)</option>
                          <option selected value="English (United States)">English (United States)</option>
                          <option value="Espanol (Espana)">Espanol (Espana)</option>
                          <option value="Espanol (Latinoamerica)">Espanol (Latinoamerica)</option>
                          <option value="euskara">euskara</option>
                          <option value="Filipino">Filipino</option>
                          <option value="Francais (Canada)">Francais (Canada)</option>
                          <option value="Francais (France)">Francais (France)</option>
                          <option value="galego">galego</option>
                          <option value="Hrvatski">Hrvatski</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="isiZulu">isiZulu</option>
                          <option value="islenska">islenska</option>
                          <option value="italiano">italiano</option>
                          <option value="Kiswahili">Kiswahili</option>
                          <option value="latviesu">latviesu</option>
                          <option value="lietuviu">lietuviu</option>
                          <option value="magyar">magyar</option>
                          <option value="Melayu">Melayu</option>
                          <option value="Nederlands">Nederlands</option>
                          <option value="norsk">norsk</option>
                          <option value="polski">polski</option>
                          <option value="Portugues (Brasil)">Portugues (Brasil)</option>
                          <option value="Portugues (Portugal)">Portugues (Portugal)</option>
                          <option value="romana">romana</option>
                          <option value="Slovencina">Slovencina</option>
                          <option value="slovenscina">slovenscina</option>
                          <option value="Suomi">Suomi</option>
                          <option value="Svenska">Svenska</option>
                          <option value="Tieng Viet">Tieng Viet</option>
                          <option value="Turkce">Turkce</option>
                      </select>
                  </div>
                  <div id="rightBoxButtons">
                      <a id="rbButton" href="https://support.google.com/accounts?hl=en#topic=3382296" target="_blank">Help</a>
                      <a id="rbButton" href="https://policies.google.com/privacy?gl=US&hl=en" target="_blank">Privacy</a>
                      <a id="rbButton" href="https://policies.google.com/terms?gl=US&hl=en" target="_blank">Terms</a>
                  </div>
              </div>
          </div>
        )
    }
}

export default SignIn;
