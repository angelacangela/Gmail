import React from "react";
import "../styles/email-list.css";

const EmailList = ({
    emails,
    category,
    favoriteEmail,
    setActiveEmail,
    toggleActiveEmail,
    unfavoriteEmail
}) => {
    const header = category.slice(0,1).toUpperCase() + category.slice(1);
    let blurb;
    if (category === "primary") {
        blurb = "All your important emails will be shown here."
    } else if (category === "social") {
        blurb = "Emails from social networks, media-sharing sites, dating services and other social sites will be shown here."
    } else if (category === "promotions") {
        blurb = "Deals, offers and other marketing emails will be shown here.";
    }
    if (emails.length < 1) {
        return (
            <div id="emptyEmailPlaceholder">
                <div id="placeholderContainer">
                    <div id="header">Your {header} tab is empty.</div>
                    <div id="blurb">{blurb}</div>
                    <div id="tabSettings">
                        To add or remove tabs click <a>inbox settings.</a>
                    </div>
                </div>
                <div id="emailFooter">
                    <div id="emailFooterPiece">
                        <div id="footerStatement">0 GB (0%) of 15 GB used</div>
                        <div id="footerLinks">
                            <a id="footerLink" href="https://policies.google.com/terms?hl=en">Terms</a>
                            ·
                            <a id="footerLink" href="https://policies.google.com/privacy?hl=en">Privacy</a>
                            ·
                            <a id="footerLink" href="https://www.google.com/gmail/about/policy/">Program Policies</a>
                        </div>
                        <div id="footerStatement">
                            Last account activity: 1 hour ago
                        </div>
                    </div>
                    <div id="emailFooterPiece">
                        <a id="footerLink" href="https://one.google.com/u/0/storage?hl=en">Manage</a>
                        <a id="footerLink" href="https://one.google.com/u/0/storage?hl=en">Details</a>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id="allEmails">
            {
                emails.map((email, index) => {
                    const { id, favorite, receivedDate, senderName, subject, read } = email;
                    return (
                        <div 
                            key={index} 
                            id="emailLine"
                            onClick={() => {
                                setActiveEmail({ email });
                                toggleActiveEmail();
                            }} 
                            style={{
                                background: read ? "rgba(242,245,245,0.8)" : "#ffffff"
                            }}
                        >
                            <div id="checkBoxAndSender">
                                <input 
                                    type="checkbox"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }} 
                                />
                                <div 
                                    id="favoriteUn" 
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        if (favorite) {
                                            unfavoriteEmail({ id }) 
                                        } else {
                                            favoriteEmail({id})
                                        }
                                    }}
                                    className={favorite ? "glyphicon glyphicon-star" : "glyphicon glyphicon-star-empty"}
                                    style={{ color: favorite ? "goldenrod" : "darkgray" }}
                                />
                                <div 
                                    id="senderName"
                                    style={{
                                        fontWeight: read ? "normal" : "bold"
                                    }}
                                >{senderName}</div>
                            </div>
                            <div 
                                id="email-list-subject"
                                style={{
                                    fontWeight: read ? "normal" : "bold"
                                }}
                            >{subject}</div>
                            <div 
                                id="receivedDate"
                                style={{
                                    fontWeight: read ? "normal" : "bold"
                                }}
                            >{receivedDate}</div>
                        </div>  
                    )
                })
            }     
                <div id="emailFooter">
                    <div id="emailFooterPiece">
                        <div id="footerStatement">0 GB (0%) of 15 GB used</div>
                        <div id="footerLinks">
                            <a id="footerLink" href="https://policies.google.com/terms?hl=en">Terms</a>
                            ·
                            <a id="footerLink" href="https://policies.google.com/privacy?hl=en">Privacy</a>
                            ·
                            <a id="footerLink" href="https://www.google.com/gmail/about/policy/">Program Policies</a>
                        </div>
                        <div id="footerStatement">
                            Last account activity: 1 hour ago
                        </div>
                    </div>
                    <div id="emailFooterPiece">
                        <a id="footerLink" href="https://one.google.com/u/0/storage?hl=en">Manage</a>
                        <a id="footerLink" href="https://one.google.com/u/0/storage?hl=en">Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmailList;