import React from "react";
import "../styles/email-list.css";
const unnamed = require(".././assets/unnamed.png");
const googleLogo = require(".././assets/googlelogo.png");
const myicon = require(".././assets/myicon.png");

const EmailDetails = ({ email }) => {
    const {
        body,
        receivedDate,
        senderEmail,
        senderName,
        subject
    } = email;
    return (
        <div>
            <div id="subject">{subject}
                <div id="contentPrint"><span className="glyphicon glyphicon-print"></span></div>
                <div id="newWindowLink"><span className="glyphicon glyphicon-new-window"></span></div>
            </div>
            <div>
                <div id="senderLine">
                    <div id="senderName">{senderName}</div>
                    <div id="senderEmail">{senderEmail}</div>
                    <div id="receivedDate">{receivedDate}</div>
                    <div id="favorite"><span className="glyphicon glyphicon-star"></span></div>
                    <div id="replyreply"><span className="glyphicon glyphicon-share-alt"></span></div>
                    <div id="moreoptions"><span className="glyphicon glyphicon-option-vertical"></span></div>
                </div>
            </div>
            <div id="emailContent">
                <div id="emailContentBox">
                    <div id="googleLogo">
                        <img 
                            id="googleLogo"
                            src={googleLogo}
                        />
                        <img
                            id="unnamed"
                            src={unnamed}
                        />
                    </div>
                    <h3>Your password was changed</h3>
                    <div id="usericon"><img id="myicon" src={myicon}/>angela@gmail.com</div>
                    The password for your Google account angela@gmail.com was changed. If you didn't change it, you should <a id="recoverYourAccount" href="https://accounts.google.com/signin/v2/recoveryidentifier?fpOnly=1&source=ancppe&Email=kublakhan9292%40gmail.com&anexp=givab-fa--mdv2-fa&flowName=GlifWebSignIn&flowEntry=ServiceLogin">recover your account.</a>
                    
                </div>
                <div id="googleAddress">You received this email to let you know about important changes to your Google Account and services.
                © 2019 Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA 
                </div>
            </div>
            <div id="bottomButton">
                <div id="replyButton"> <span className="glyphicon glyphicon-arrow-right"></span>Reply</div>
                <div id="forwardButton"><span className="glyphicon glyphicon-share-alt"></span>Forward</div>
            </div>

        </div>
    )
};

export default EmailDetails;