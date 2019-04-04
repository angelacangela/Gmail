import React, { Component } from "react";
import "../../styles/signup.css";
const googlelogo = require("../../assets/googlelogo.png");
const accountImage = require("../../assets/account.png");

class SignUp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { changePage } = this.props;
        return (
            <div>
                <div id="entireSignUpBox">
                    <div id="fillInTheBlank">
                        <div id="googlelogo">
                            <img 
                                id="googlelogo"
                                src={googlelogo}
                            />
                        </div>
                        <div id="createYourGoogleAccount">
                            Create your Google Account
                        </div>
                        <div id="toContinueToGmail">
                            to continue to Gmail
                        </div>
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
                            <div id="endGmailCom">
                                @gmail.com
                            </div>
                        </div>
                        <div id="userNameInsturction">
                        You can use letters, numbers & periods
                        </div>
                        <div id="pwpw">
                            <input
                                id="pw"
                                placeholder="Password"
                                type="password"
                            />
                            <input
                            id="passwordConfirm"
                            placeholder="Confirm"
                            type="password"
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
                    <div id="rightBox">
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
                <div id="signUpBoxHelp">
                    <div id="one">English (United States)
                    <select>
                    <option value="korean">Korean</option>
                    <option value="spanish">Spanish</option>
                    <option value="french">French</option>
                    <option value="English">English</option>
                    </select></div>
                    <div id="one">Help</div>
                    <div id="one">Privacy</div>
                    <div id="one">Terms</div>
                </div>
            </div>
        )
    }
}


export default SignUp