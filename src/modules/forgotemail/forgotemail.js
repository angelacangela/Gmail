import React, { Component } from "react";
import "../../styles/forgotemail.css";
const googleLogo = require("../../assets/googlelogo.png");
const googlelogo = require("../../assets/googlelogo.png");

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
                            id="googlelogo"
                            src={googlelogo}
                        />
                    <div id="signIn">
                        Find your email
                        </div>
                        <div id="toContinuetoGmail">
                        Enter your phone number or recovery email
                        </div>
                        <input 
                            id="signInInput"
                            placeholder="Email or phone"
                        />
                            <div id="next">
                            Next
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


            </div>
        )
    }
}

export default ForgotEmail;
