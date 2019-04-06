import React, { Component } from "react";
import EmailForm from "../../components/email-form.js";
import EmailList from "../../components/email-list.js";
import "../../styles/email-list.css";

const allmail = require("../../assets/allmail.png");
const chats = require("../../assets/chats.png");
const drafts = require("../../assets/drafts.png");
const important = require("../../assets/important.png");
const inbox = require("../../assets/inbox.png");
const sent = require("../../assets/sent.png");
const snoozed = require("../../assets/snoozed.png");
const spam = require("../../assets/spam.png");
const starred = require("../../assets/starred.png");
const trash = require("../../assets/trash.png");
const norecentchat = require("../../assets/norecentchat.png");
const promotions = require("../../assets/promotions.png");
const social = require("../../assets/social.png");
const gmail = require("../../assets/gmail.png");
const googleapps = require("../../assets/googleapps.png");
const select = require("../../assets/select.png");
const refresh = require("../../assets/refresh.png");
const backtoinbox = require("../../assets/backtoinbox.png");
const archieve = require("../../assets/archieve.png");
const reportspam = require("../../assets/reportspam.png");
const delette = require("../../assets/delette.png");
const markasunread = require("../../assets/markasunread.png");
const snooze = require("../../assets/snooze.png");
const moveto = require("../../assets/moveto.png");
const labels = require("../../assets/labels.png");
const moreoptions = require("../../assets/moreoptions.png");
const replyreply = require("../../assets/replyreply.png");


const myaccount = require("../../assets/myaccount.png");
const search = require("../../assets/search.png");
const maps = require("../../assets/maps.png");
const youtube = require("../../assets/youtube.png");
const play = require("../../assets/play.png");
const news = require("../../assets/news.png");
const gmailicon = require("../../assets/gmailicon.png");
const contacts = require("../../assets/contacts.png");
const drive = require("../../assets/drive.png");
const calendar = require("../../assets/calendar.png");
const googleplus = require("../../assets/googleplus.png");
const translate = require("../../assets/translate.png");
const photos = require("../../assets/photos.png");
const shopping = require("../../assets/shopping.png");






class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: Object.values(props.emails),
            showActiveEmail: false,
            composeNewEmail: false,
            inboxCategory: "primary",
            inputContent: ""
        }
        this.toggleActiveEmail = this.toggleActiveEmail.bind(this);
        this.toggleEmailForm = this.toggleEmailForm.bind(this);
        this.selectInboxCategory = this.selectInboxCategory.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    selectInboxCategory(inboxCategory) {
        this.setState({ 
            inboxCategory,
            showActiveEmail: false        
        });
    }

    handleSearch(value) {
        const { emails } = this.props;
        const returnedEmails = value.length < 1 ? Object.values(emails) : Object.values(emails).filter((email) => (
            email.subject.toLowerCase().includes(value.toLowerCase()) || email.senderName.toLowerCase().includes(value.toLowerCase())
        ))
        this.setState({ emails: returnedEmails });
    }

    onChangeHandler(e) {
        e.preventDefault();
        this.setState({ inputContent: e.target.value }); //value를 찾는것//
        this.handleSearch(e.target.value);
    }

    toggleActiveEmail(newState = !this.state.activeEmail) {
        this.setState({ showActiveEmail: newState });
    }

    toggleEmailForm() {
        this.setState({ composeNewEmail: !this.state.composeNewEmail });
    }

    render() {
        const { activeEmail, changePage, setActiveEmail } = this.props;
        const emails = Object.values(this.props.emails);
        const { 
            composeNewEmail,
            showActiveEmail,
            inboxCategory,
            inputContent
        } = this.state;
        const {
            subject,
            body,
            senderName,
            senderEmail,
            receivedDate,
        } = activeEmail;

        const primary = inboxCategory === "primary";
        const social = inboxCategory === "social";
        const promotions = inboxCategory === "promotions";

        return (
            <div id="wholeBox" style={{ 
                display: "flex", 
                flexDirection: "column",
                padding: "8px"
            }}>
                { composeNewEmail && <EmailForm /> }
                <div id="TopBox">
                    <div style={{ 
                        minWidth: "248px",
                        textAlign: "left"
                    }}>
                        <div 
                            className="glyphicon glyphicon-menu-hamburger"
                            style={{ 
                                alignContent: "center",
                                width: "24px", 
                                height: "24px", 
                                padding: "12px", 
                                margin: "0px 4px",
                                justifyContent: "center"
                            }}
                        />
                        <img 
                            id="gmailpng"
                            src={gmail}
                            style={{
                                paddingRight: "32px",
                                objectFit: "contain"
                            }}
                        />
                    </div>
                    <div id="middleHeader">
                        <div id="searchContainer">
                            <div className="glyphicon glyphicon-search"/>
                            <input 
                                placeholder="Search mail"
                                value={inputContent}
                                onChange={(e) => this.onChangeHandler(e)}
                            />
                        </div>
                    </div>
                    
                    <div id="rightHeader">
                        <div id="chart" className="glyphicon glyphicon-th"/>
                        <div id="initialCircle">A</div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                <div id="bigLeftBox" style={{
                    minWidth: "248px"
                }}>
                    <div onClick={() => this.toggleEmailForm()}>
                        <div style={{
                            alignItems: "center",
                            margin: "16px 0",
                            paddingLeft: "8px",
                            height: "48px",
                            display: "flex",
                            flexDirection: "row",
                            border: "1px solid #e6e6e6",
                            borderRadius: "50px",
                            width: "145px"
                        }}>
                            <div className="glyphicon glyphicon-plus"
                            style={{
                                minWidth: "44px",
                                justifyContent: "center",
                                alignItems: "center"
                            }}/>
                            <div style={{
                                padding: "0 24px 0 0",
                                alignItems: "center"
                            }}>
                                Compose
                            </div>
                        </div>
                    </div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="inbox"><img id="inboximage" src={inbox}/>Inbox</div>
                    <div onClick={() => this.toggleActiveEmail(false)} id="starred"><img id="starredimage" src={starred}/>Starred</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="snoozed"><img id="snoozedimage" src={snoozed}/>Snoozed</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="sent"><img id="sentimage" src={sent}/>Sent</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="drafts"><img id="draftsimage" src={drafts}/>Drafts</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="important"><img id="importantimage" src={important}/>Important</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="chats"><img id="chatsimage" src={chats}/>Chats</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="allmail"><img id="allmailimage" src={allmail}/>All Mail</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="spam"><img id="spamimage" src={spam}/>Spam</div>
                    <div onClick={() => this.toggleActiveEmail(false)}id="trash"><img id="trashimage" src={trash}/>Trash</div>
                    <div id="noRecentChatBottom"><img id="norecentchat" src={norecentchat}/>
                        <div id="NRC">No recent chat</div>
                        <div id="NO">Start a new one</div>
                    </div>
                </div>
                <div id="bigRightBox">
                    <div id="topHeading">
                        <div 
                            id="topKey"
                            onClick={() => this.selectInboxCategory("primary")}
                            style={{
                                borderBottom: primary ? "3px solid #d93025" : null
                            }}
                        >
                            <div id="topKeyInside">
                                <span 
                                    style={{
                                        color: primary ? "#d93025" : "#5F6368"
                                    }}
                                    className="glyphicon glyphicon-inbox"
                                ></span>
                                <div
                                    style={{
                                        color: primary ? "#d93025" : "#5F6368"
                                    }}
                                >Primary</div>
                            </div>
                        </div>
                        <div 
                            id="topKey"
                            onClick={() => this.selectInboxCategory("social")}
                            style={{
                                borderBottom: social ? "3px solid #1a73e8" : null
                            }}
                        >
                            <div 
                                id="topKeyInside"
                            >
                                <span 
                                    className="glyphicon glyphicon-user"
                                    style={{
                                        color: social ? "#1a73e8" : "#5F6368"
                                    }}
                                ></span>
                                <div
                                    style={{
                                        color: social ? "#1a73e8" : "#5F6368"
                                    }}
                                >Social</div>
                            </div>
                        </div>
                        <div 
                            id="topKey"
                            onClick={() => this.selectInboxCategory("promotions")}
                            style={{
                                borderBottom: promotions ? "3px solid #1e8e3e" : null
                            }}
                        >
                            <div 
                                id="topKeyInside"
                            >
                                <span 
                                    className="glyphicon glyphicon-tag"
                                    style={{
                                        color: promotions ? "#1e8e3e" : "#5F6368"
                                    }}
                                ></span>
                                <div
                                    style={{
                                        color: promotions ? "#1e8e3e" : "#5F6368"
                                    }}
                                >Promotions</div>
                            </div>
                        </div>
                        
                    </div>
            
                    <div id="emailSubjectContent">
                    {
                        showActiveEmail && (
                            <div>
                                <div id="topHeadingIcons">
                                    <div id="backToInbox"><span className="glyphicon glyphicon-arrow-left"></span></div>
                                    <div id="archieve"> <span className="glyphicon glyphicon-collapse-down"></span></div>
                                    <div id="reportSpam"><span className="glyphicon glyphicon-exclamation-sign"></span></div>
                                    <div id="delette"><span className="glyphicon glyphicon-trash"></span></div>
                                    <div id="markasunread"><span className="glyphicon glyphicon-modal-window"></span></div>
                                    <div id="snooze"><span className="glyphicon glyphicon-dashboard"></span></div>
                                    <div id="moveto"><span className="glyphicon glyphicon-level-up"></span></div>
                                    <div id="labels"><span className="glyphicon glyphicon-pawn"></span></div>
                                    <div id="moreoptions"><span className="glyphicon glyphicon-option-vertical"></span></div>
                                    <div id="titleOptions">
                                        <div id="newer"><span className="glyphicon glyphicon-menu-left"></span></div>
                                        <div id="older"><span className="glyphicon glyphicon-menu-right"></span></div>
                                        <div id="keyboard"><span className="glyphicon glyphicon-list-alt"></span></div>
                                        <div id="settings"><span className="glyphicon glyphicon-cog"></span></div>
                                    </div>
                                </div>
                                <div id="subject">{subject}
                                    <div id="contentPrint"><span class="glyphicon glyphicon-print"></span></div>
                                    <div id="newWindowLink"><span class="glyphicon glyphicon-new-window"></span></div>
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
                            </div>) 
                        }
                        {
                            primary && (
                                <EmailList 
                                    emails={emails.filter((email) => (
                                        email.category === "primary"
                                    ))}
                                    category={inboxCategory}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                />
                            )
                        }
                        {
                            social && (
                                <EmailList 
                                    emails={emails.filter((email) => (
                                        email.category === "social"
                                    ))}
                                    category={inboxCategory}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                />
                            )
                        }
                        {
                            promotions && (
                                <EmailList 
                                    emails={emails.filter((email) => (
                                        email.category === "promotions"
                                    ))}
                                    category={inboxCategory}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                />
                            )
                        }
                    </div>     
                </div>          
                </div>
            </div>
        )
    }
}
 
export default Home;


