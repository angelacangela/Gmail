import React from "react";
import "../styles/email-list.css";
const gmail = require("../assets/gmail.png");

const Header = ({
    inputContent,
    onChangeHandler
}) => {
    return (
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
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
            <div id="rightHeader">
                <div id="chart" className="glyphicon glyphicon-th"/>
                <div id="initialCircle">A</div>
            </div>
        </div>
    )
}

export default Header;