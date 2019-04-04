import React, { Component } from "react";
import "../../styles/signin.css";
const googlelogo = require("../../assets/googlelogo.png");


class SignIn extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        const { changePage } = this.props;
        return (
            <div>
                <div id="bigContainer">
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

                        <div onClick={() => changePage("ForgotEmail")} id="forgotEmail">
                        Forgot email?
                        </div>
                        <div id="guestMode">
                        Not your computer? Use Guest mode to sign in privately.
                        </div>
                        <div id="learnMore">
                        <a href="  https://support.google.com/chrome/answer/6130773?hl=en" target="_blank">Learn more</a>
                      
                        </div>
                        <div id="createAccountNext">
                            <div onClick={() => changePage("SignUp")} id="createAccount">
                            Create account
                            </div>
                            <div onClick={() => changePage("EmailList")} id="next">
                            Next
                            </div>
                        </div>
                    </div>
                    <div id="Help">
                        <div id="leftBox">
                        English (United States)
                        </div>
                        <div id="rightBoxButtons">
                            <div id="rbHelp"><a href="https://support.google.com/accounts?hl=en#topic=3382296" target="_blank">Help</a></div>
                            <div id="rbPrivacy"><a href="https://policies.google.com/privacy?gl=US&hl=en" target="_blank">Privacy</a></div>
                            <div id="rbTerms"><a href="https://policies.google.com/terms?gl=US&hl=en" target="_blank">Terms</a></div>
                        </div>
                    </div>
                
                
                
                </div>


            </div>
        )
    }
}

export default SignIn;
