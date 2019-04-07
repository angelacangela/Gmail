import React, { Component } from "react";
import EmailForm from "../../components/email-form.js";
import InboxCategoryMenu from "../../components/inbox-category-menu.js";
import EmailList from "../../components/email-list.js";
import Header from "../../components/header.js";
import Tabs from "../../components/tabs.js";
import "../../styles/email-list.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showActiveEmail: false,
            composeNewEmail: false,
            currentSideMenuCategory: "inbox",
            inboxCategory: "primary",
            inputContent: ""
        }
        this.toggleActiveEmail = this.toggleActiveEmail.bind(this);
        this.toggleEmailForm = this.toggleEmailForm.bind(this);
        this.selectInboxCategory = this.selectInboxCategory.bind(this);
        this.setSearchValue = this.setSearchValue.bind(this);
        this.setSideMenuCategory = this.setSideMenuCategory.bind(this);
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

    setSearchValue(inputContent) {
        this.setState({ inputContent });
    }

    setSideMenuCategory(currentSideMenuCategory) {
        this.setState({ currentSideMenuCategory });
    }

    render() {
        const { activeEmail, deleteEmail, setActiveEmail, sendEmail } = this.props;
        const emails = Object.values(this.props.emails);
        const { 
            composeNewEmail,
            currentSideMenuCategory,
            inboxCategory,
            inputContent,
            showActiveEmail
        } = this.state;
        const {
            body,
            id,
            receivedDate,
            senderEmail,
            senderName,
            subject
        } = activeEmail;

        const primary = inboxCategory === "primary";
        const social = inboxCategory === "social";
        const promotions = inboxCategory === "promotions";

        return (
            <div id="wholeBox">
                { composeNewEmail && <EmailForm sendEmail={sendEmail}/> }
                <Header 
                    inputContent={inputContent}
                    onChangeHandler={(e) => this.onChangeHandler(e)}
                />
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <InboxCategoryMenu 
                        setSearchValue={this.setSearchValue}
                        setSideMenuCategory={this.setSideMenuCategory}
                        sideMenuCategory={currentSideMenuCategory}
                        toggleActiveEmail={this.toggleActiveEmail}
                        toggleEmailForm={this.toggleEmailForm}
                    />
                    <div id="emailSubjectContent">
                        <Tabs 
                            promotions={promotions}
                            primary={primary}
                            selectInboxCategory={this.selectInboxCategory}
                            social={social}
                        />
                        {
                            showActiveEmail && (
                                <div>
                                    <div id="topHeadingIcons">
                                        <div id="backToInbox"><span className="glyphicon glyphicon-arrow-left"></span></div>
                                        <div id="archieve"> <span className="glyphicon glyphicon-collapse-down"></span></div>
                                        <div id="reportSpam"><span className="glyphicon glyphicon-exclamation-sign"></span></div>
                                        <div id="delette" onClick={() => {
                                            deleteEmail({ id: id });
                                            this.toggleActiveEmail(false);
                                        }}><span className="glyphicon glyphicon-trash"></span></div>
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
                        }
                        {
                            !showActiveEmail && primary && (
                                <EmailList 
                                    emails={emails.filter((email) => (email.category === "primary"))}
                                    category={inboxCategory}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                />
                            )
                        }
                        {
                            !showActiveEmail && social && (
                                <EmailList 
                                    emails={emails.filter((email) => email.category === "social")}
                                    category={inboxCategory}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                />
                            )
                        }
                        {
                            !showActiveEmail && promotions && (
                                <EmailList 
                                    emails={emails.filter((email) => email.category === "promotions")}
                                    category={inboxCategory}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                />
                            )
                        }    
                    </div>     
                </div>       
            </div>
        )
    }
}
 
export default Home;


