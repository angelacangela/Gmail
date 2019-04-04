import React, { Component } from "react";
import "../../styles/forgotemail.css";
const googleLogo = require("../../assets/google-logo.png");


class ForgotEmail extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div>
                <div id="bigContainer">
                    <div id="boxBox">
                        <img 
                            id="googleLogo"
                            src={googleLogo}
                        />
                        <div id="findYourEmail">
                        Find your email
                        </div>
                        <div id="enterYPNORE">
                        Enter your phone number or recovery email
                        </div>
                        <input 
                            id="pNorEmail"
                            placeholder="Phone number or email"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ForgotEmail;

