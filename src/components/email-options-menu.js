import React from "react";
import "../styles/email-list.css";
import { markUnread } from "../actions/mark-unread";

const EmailOptionsMenu = ({
    id,
    deleteEmail,
    toggleActiveEmail,
    toggleMarkUnread
}) => {
    return (
        <div className="topHeadingIcons hideOnMobile">
            <div className="topHeadingItem hideOnMobile"><span onClick={() => toggleActiveEmail(false)} className="glyphicon glyphicon-arrow-left"></span></div>
            <div className="topHeadingItem hideOnMobile"><span className="glyphicon glyphicon-collapse-down"></span></div>
            <div className="topHeadingItem hideOnMobile"><span className="glyphicon glyphicon-exclamation-sign"></span></div>
            <div className="topHeadingItem hideOnMobile" onClick={() => {
                deleteEmail({ id: id });
                toggleActiveEmail(false);
            }}><span className="glyphicon glyphicon-trash"></span></div>
            <div className="topHeadingItem hideOnMobile" onClick={() => {
                markUnread({ id: id});
                toggleMarkUnread(false);
            }}><span className="glyphicon glyphicon-modal-window"></span></div>
            <div className="topHeadingItem hideOnMobile"><span className="glyphicon glyphicon-dashboard"></span></div>
            <div className="topHeadingItem hideOnMobile"><span className="glyphicon glyphicon-level-up"></span></div>
            <div className="topHeadingItem hideOnMobile"><span className="glyphicon glyphicon-pawn"></span></div>
            <div className="topHeadingRightAlign hideOnMobile"><span className="glyphicon glyphicon-option-vertical"></span></div>
            <div className="topHeadingRightAlign hideOnMobile"><span className="glyphicon glyphicon-menu-left"></span></div>
            <div className="topHeadingRightAlign hideOnMobile"><span className="glyphicon glyphicon-menu-right"></span></div>
            <div className="topHeadingRightAlign hideOnMobile"><span className="glyphicon glyphicon-list-alt"></span></div>
            <div className="topHeadingRightAlign hideOnMobile"><span className="glyphicon glyphicon-cog"></span></div>
        </div>
    )
};

export default EmailOptionsMenu;
