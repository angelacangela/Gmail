import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import "../styles/email-list.css";

const unnamed = require(".././assets/unnamed.png");
const googleLogo = require(".././assets/googlelogo.png");
const myicon = require(".././assets/myicon.png");
const senderPhoto = require(".././assets/senderPhoto.png");

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
            <div id="subjectLine">
                <div id="leftSubjectLine">
                    <div id="subject">{subject}</div>
                    <div id="inboxTagContainer">
                        <div id="inboxTag">Inbox</div>
                        <div id="inboxX" className="glyphicon glyphicon-remove"/>
                    </div>
                </div>
                <div id="rightSubjectLine">
                    <div id="rightSubjectLineItem"><span className="glyphicon glyphicon-print"></span></div>
                    <div id="rightSubjectLineItem"><span className="glyphicon glyphicon-new-window"></span></div>
                </div>
            </div>
            <div id="senderLineContainer">
                <div id="senderLineLeft">
                    <img id="senderPhoto" src={senderPhoto}/>
                    <div id="senderDetails">
                        <div id="senderDetailsTop">
                            <div id="detailsSenderName">{senderName}</div>
                            <div id="senderEmail">{`<${senderEmail}>`}</div>
                        </div>
                        <div id="toMe">
                            to me
                        </div>
                    </div>
                </div>
                <div id="senderLine">
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
                    <div>{body}</div>

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
