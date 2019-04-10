import React from "react";
import "../styles/email-list.css";

const EmailOptionsMenu = ({
    id,
    deleteEmail,
    toggleActiveEmail
}) => {
    return (
        <div id="topHeadingIcons">
            <div id="topHeadingItem"><span onClick={() => toggleActiveEmail(false)} className="glyphicon glyphicon-arrow-left"></span></div>
            <div id="topHeadingItem"> <span className="glyphicon glyphicon-collapse-down"></span></div>
            <div id="topHeadingItem"><span className="glyphicon glyphicon-exclamation-sign"></span></div>
            <div id="topHeadingItem" onClick={() => {
                deleteEmail({ id: id });
                toggleActiveEmail(false);
            }}><span className="glyphicon glyphicon-trash"></span></div>
            <div id="topHeadingItem"><span className="glyphicon glyphicon-modal-window"></span></div>
            <div id="topHeadingItem"><span className="glyphicon glyphicon-dashboard"></span></div>
            <div id="topHeadingItem"><span className="glyphicon glyphicon-level-up"></span></div>
            <div id="topHeadingItem"><span className="glyphicon glyphicon-pawn"></span></div>
            <div id="topHeadingRightAlign"><span className="glyphicon glyphicon-option-vertical"></span></div>
            <div id="topHeadingRightAlign"><span className="glyphicon glyphicon-menu-left"></span></div>
            <div id="topHeadingRightAlign"><span className="glyphicon glyphicon-menu-right"></span></div>
            <div id="topHeadingRightAlign"><span className="glyphicon glyphicon-list-alt"></span></div>
            <div id="topHeadingRightAlign"><span className="glyphicon glyphicon-cog"></span></div>
        </div>
    )
};

export default EmailOptionsMenu;