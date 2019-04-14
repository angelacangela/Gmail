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
            composeNewEmail: false,
            currentSideMenuCategory: "inbox",
            inboxCategory: "primary",
            inputContent: "",
            selectedEmails: {},
            showActiveEmail: false
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.toggleActiveEmail = this.toggleActiveEmail.bind(this);
        this.toggleEmailForm = this.toggleEmailForm.bind(this);
        this.selectEmail = this.selectEmail.bind(this);
        this.selectInboxCategory = this.selectInboxCategory.bind(this);
        this.setSearchValue = this.setSearchValue.bind(this);
        this.setSideMenuCategory = this.setSideMenuCategory.bind(this);
        this.unselectEmail = this.unselectEmail.bind(this);
    }

    selectEmail(id) {
        const { selectedEmails } = this.state;
        selectedEmails[id] = true;
        this.setState({ selectedEmails });
    }

    unselectEmail(id) {
        const { selectedEmails } = this.state;
        delete selectedEmails[id];
        this.setState({ selectedEmails });
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
            showActiveEmail
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
                        // toggleMarkUnread={this.toggleMarkUnread}
                    />
                    <div id="emailSubjectContent">
                        <EmailOptionsMenu 
                            id={id}
                            deleteEmail={deleteEmail}
                            toggleActiveEmail={this.toggleActiveEmail}
                            toggleMarkUnread={markUnread}
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
                                    category={inboxCategory}
                                    emails={emails.filter((email) => (email.category === "primary"))}
                                    favoriteEmail={favoriteEmail}
                                    markUnread={markUnread}
                                    selectEmail={this.selectEmail}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                    unfavoriteEmail={unfavoriteEmail}
                                    unselectEmail={this.unselectEmail}
                                />
                            )
                        }
                        {
                            !showActiveEmail && social && (
                                <EmailList 
                                    category={inboxCategory}
                                    emails={emails.filter((email) => email.category === "social")}
                                    favoriteEmail={favoriteEmail}
                                    markUnread={markUnread}
                                    selectEmail={this.selectEmail}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                    unfavoriteEmail={unfavoriteEmail}
                                    unselectEmail={this.unselectEmail}
                                />
                            )
                        }
                        {
                            !showActiveEmail && promotions && (
                                <EmailList 
                                    category={inboxCategory}
                                    emails={emails.filter((email) => email.category === "promotions")}
                                    favoriteEmail={favoriteEmail}
                                    selectEmail={this.selectEmail}
                                    setActiveEmail={setActiveEmail}
                                    toggleActiveEmail={this.toggleActiveEmail}
                                    unfavoriteEmail={unfavoriteEmail}
                                    unselectEmail={this.unselectEmail}
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


