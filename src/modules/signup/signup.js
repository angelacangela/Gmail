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
                        <option value="korean">Korean</option>
                        <option value="spanish">Spanish</option>
                        <option value="french">French</option>
                        <option selected value="English">English (United States)</option>
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