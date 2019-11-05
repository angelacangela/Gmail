import React, { Component } from "react";
import "../styles/email-list.css";

const userBubble = require("../assets/user-bubble.png");
const chatBubble = require("../assets/chat-bubble.png");

class InboxCategoryMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHangoutsMenu: "conversations"
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.setMenu = this.setMenu.bind(this);
    }

    handleMenuClick(searchBarValue, sideMenuCategory) {
        const { setSearchValue, setSideMenuCategory, toggleActiveEmail, toggleMarkUnread } = this.props;
        setSideMenuCategory(sideMenuCategory);
        setSearchValue(searchBarValue);
        toggleActiveEmail(false);
        // toggleMarkUnread (false);
    }

    setMenu(currentHangoutsMenu) {
        this.setState({ currentHangoutsMenu });
    }

    render() {
        const { sideMenuCategory, toggleEmailForm } = this.props;
        const { currentHangoutsMenu } = this.state;
        let header;
        let body;
        if (currentHangoutsMenu === "conversations") {
            header = "No recent chats";
            body = "Start a new one";
        } else if (currentHangoutsMenu === "contacts") {
            header = "No Hangouts contacts";
            body = "Find someone";
        } else if (currentHangoutsMenu === "calls") {
            header = "Make a call";
            body = "Also try our mobile apps for Android and iOS"
        }
        return (
            <div className="bigLeftBox hideOnMobile">
                <div onClick={() => toggleEmailForm()}>
                    <div id="composeButton">
                        <div className="glyphicon glyphicon-plus" id="composePlus"/>
                        <div id="composeText">Compose</div>
                    </div>
                </div>
                <div id="menuItems">
                    <div
                        onClick={() => this.handleMenuClick("", "inbox")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "inbox" ? "rgba(229,109,102,0.10)" : null,
                            color: sideMenuCategory === "inbox" ? "#D93025" : "#202124",
                            fontWeight: "700"
                        }}
                    >
                        <div
                            className="glyphicon glyphicon-inbox"
                            id="menuItemImage"
                            style={{
                                color: sideMenuCategory === "inbox" ? "#D93025" : "rgb(102,102,102)",
                            }}
                        />
                        Inbox
                    </div>
                    <div
                        onClick={() => this.handleMenuClick("is:starred", "starred")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "starred" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "starred" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-star" id="menuItemImage"/>Starred</div>
                    <div
                        onClick={() => this.handleMenuClick("in:snoozed", "snoozed")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "snoozed" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "snoozed" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-time" id="menuItemImage"/>Snoozed</div>
                    <div
                        onClick={() => this.handleMenuClick("in:sent", "sent")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "sent" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "sent" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-send" id="menuItemImage"/>Sent</div>
                    <div
                        onClick={() => this.handleMenuClick("in:draft", "drafts")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "drafts" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "drafts" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-file" id="menuItemImage"/>Drafts</div>
                    <div
                        onClick={() => this.handleMenuClick("is:important", "important")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "important" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "important" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-alert" id="menuItemImage"/>Important</div>
                    <div
                        onClick={() => this.handleMenuClick("in:chats", "chats")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "chats" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "chats" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-comment" id="menuItemImage"/>Chats</div>
                    <div
                        onClick={() => this.handleMenuClick("", "all mail")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "all mail" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "all mail" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-envelope" id="menuItemImage"/>All Mail</div>
                    <div
                        onClick={() => this.handleMenuClick("in:spam", "spam")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "spam" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "spam" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-exclamation-sign" id="menuItemImage"/>Spam</div>
                    <div
                        onClick={() => this.handleMenuClick("in:trash", "trash")}
                        id="menuItem"
                        style={{
                            background: sideMenuCategory === "trash" ? "rgba(102,102,102,0.15)" : null,
                            fontWeight: sideMenuCategory === "trash" ? "700" : "normal"
                        }}
                    >
                        <div className="glyphicon glyphicon-trash" id="menuItemImage"/>Trash</div>
                </div>
                <div id="chatMenu">
                    <div id="chatUserContainer">
                        <div id="photoAndName">
                            <img id="chatUser" src={userBubble}/>
                            <div id="chatUsername">Angela</div>
                        </div>
                        <div className="glyphicon glyphicon-plus" id="chatPlus"/>
                    </div>
                    <div id="noRecentChatBottom"><div id="norecentchat" />
                        <img id="chatBubble" src={chatBubble}/>
                        <div id="NRC">{header}</div>
                        <div id="NO">{body}</div>
                    </div>
                </div>
                <div id="chatBottomMenu">
                    <div
                        id="bottomMenuButton"
                        onClick={() => this.setMenu("contacts")}
                        className="glyphicon glyphicon-user"
                        style={{ background: currentHangoutsMenu === "contacts" ? "rgba(102,102,102,0.05)" : "transparent"}}
                    />
                    <div
                        id="bottomMenuButton"
                        onClick={() => this.setMenu("conversations")}
                        className="glyphicon glyphicon-comment"
                        style={{ background: currentHangoutsMenu === "conversations" ? "rgba(102,102,102,0.05)" : "transparent"}}
                    />
                    <div
                        id="bottomMenuButton"
                        onClick={() => this.setMenu("calls")}
                        className="glyphicon glyphicon-earphone"
                        style={{ background: currentHangoutsMenu === "calls" ? "rgba(102,102,102,0.05)" : "transparent"}}
                    />
                </div>
            </div>
        )
    }
};

export default InboxCategoryMenu;
