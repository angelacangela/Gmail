import React, { Component } from "react";
import "../../styles/signup.css";
const googlelogo = require("../../assets/googlelogo.png");
const accountImage = require("../../assets/account.png");

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false
        }
        this.togglePassword = this.togglePassword.bind(this);
    }

    togglePassword() {
        this.setState({
            showPassword: !this.state.showPassword
        });
    }

    render() {
        const { changePage } = this.props;
        const { showPassword } = this.state;
        const iconClass = showPassword ? "glyphicon glyphicon-eye-open" : "glyphicon glyphicon-eye-close";
        return (
            <div>
                <div id="entireSignUpBox">
                    <div id="fillInTheBlank">
                        <div id="googlelogo">
                            <img 
                                id="imageLogo"
                                src={googlelogo}
                            />
                        </div>
                        <div id="createYourGoogleAccount">
                            Create your Google Account
                        </div>
                        <div id="toContinueToGmail">
                            to continue to Gmail
                        </div>
                        <div id="allInputs">
                            <div id="nameInput">
                                <input 
                                    id="firstNameInput"
                                    placeholder="First name"
                                />
                                <input 
                                    id="lastNameInput"
                                    placeholder="Last name"
                                />
                            </div>
                            <div id="username">
                                <input 
                                    id="usernameInput"
                                    placeholder="Username"
                                />
                                <div id="endGmailContainer">
                                    <div id="gmailDotCom">
                                        @gmail.com
                                    </div>
                                </div>
                            </div>
                            <div id="userNameInstruction">
                            You can use letters, numbers & periods
                            </div>
                            <div id="pwpw">
                                <input
                                    id="pw"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                />
                                <input
                                    id="passwordConfirm"
                                    placeholder="Confirm"
                                    type={showPassword ? "text" : "password"}
                                />
                                <div 
                                    id="eyeball" 
                                    className={iconClass}
                                    onClick={this.togglePassword}
                                />
                            </div>
                            <div id="pwInstruction">
                            Use 8 or more characters with a mix of letters, numbers & symbols
                            </div>
                            <div id="signInAndNext">
                                <div onClick={() => changePage("SignIn")} id="signInInstead">
                                Sign in instead
                                </div>
                                <div onClick={() => changePage("EmailList")} id="next">
                                Next
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="rightBox">
                        <div id="imageContainer">
                            <div id="imageLogo">
                                <img 
                                    id="accountImage"
                                    src={accountImage}
                                />
                            </div>
                            <div id="explanationUnderImage">
                            One account. All of Google working for you.
                            </div>
                        </div>
                    </div>
                </div>
                <div id="signUpBoxHelp">
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
                    <div id="signUpHelpRight">
                        <div id="one">Help</div>
                        <div id="one">Privacy</div>
                        <div id="one">Terms</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SignUp