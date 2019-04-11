import React, { Component } from "react";
import EmailForm from "../../components/email-form.js";
import InboxCategoryMenu from "../../components/inbox-category-menu.js";
import EmailDetails from "../../components/email-details.js";
import EmailList from "../../components/email-list.js";
import Header from "../../components/header.js";
import Tabs from "../../components/tabs.js";
import "../../styles/email-list.css";
import EmailOptionsMenu from "../../components/email-options-menu.js";

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
        const { activeEmail, deleteEmail, favoriteEmail, sendEmail, setActiveEmail, unfavoriteEmail, markUnread } = this.props;
        const emails = Object.values(this.props.emails);
        const { 
            composeNewEmail,
            currentSideMenuCategory,
            inboxCategory,
            inputContent,
            showActiveEmail,
            // markUnread
        } = this.state;
        const { id } = activeEmail;

        const primary = inboxCategory === "primary";
        const social = inboxCategory === "social";
        const promotions = inboxCategory === "promotions";

        return (
            <div id="wholeBox">
                { composeNewEmail && <EmailForm sendEmail={sendEmail} toggleEmailForm={this.toggleEmailForm} /> }
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
                        toggleMarkUnread={this.toggleMarkUnread}
                    />
                    <div id="emailSubjectContent">
                        <EmailOptionsMenu 
                            id={id}
                            deleteEmail={deleteEmail}
                            toggleActiveEmail={this.toggleActiveEmail}
                            toggleMarkUnread={this.toggleMarkUnread}
                        />
                        {
                            !showActiveEmail && (
                                <Tabs 
                                    promotions={promotions}
                                    primary={primary}
                                    selectInboxCategory={this.selectInboxCategory}
                                    social={social}
                                />
                            )
                        }
                        { showActiveEmail && <EmailDetails email={activeEmail}/> }
                        {
                            !showActiveEmail && primary && (
                                <EmailList 
                                    emails={emails.filter((email) => (email.category === "primary"))}
                                    category={inboxCategory}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                    favoriteEmail={favoriteEmail}
                                    unfavoriteEmail={unfavoriteEmail}
                                    markUnread={markUnread}
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
                                    favoriteEmail={favoriteEmail}
                                    unfavoriteEmail={unfavoriteEmail}
                                    markUnread={markUnread}
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
                                    favoriteEmail={favoriteEmail}
                                    unfavoriteEmail={unfavoriteEmail}
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


