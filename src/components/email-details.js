import React from "react";
import "../styles/email-list.css";

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
            <div id="emailContent">{body}</div>
            <div id="bottomButton">
                <div id="replyButton"> <span className="glyphicon glyphicon-arrow-right"></span>Reply</div>
                <div id="forwardButton"><span className="glyphicon glyphicon-share-alt"></span>Forward</div>
            </div>
        </div>
    )
};

export default EmailDetails;