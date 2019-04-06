import React from "react";
import "../styles/email-list.css";

const Tabs = ({
    primary,
    promotions,
    selectInboxCategory,
    social
}) => {
    return (
        <div id="bigRightBox">
            <div id="topHeading">
                <div 
                    id="topKey"
                    onClick={() => selectInboxCategory("primary")}
                    style={{
                    borderBottom: primary ? "3px solid #d93025" : null
                    }}
                >
                    <div id="topKeyInside">
                        <span 
                            style={{ color: primary ? "#d93025" : "#5F6368" }}
                            className="glyphicon glyphicon-inbox"
                        />
                        <div style={{ color: primary ? "#d93025" : "#5F6368" }}>
                            Primary
                        </div>
                    </div>
                </div>
                <div 
                    id="topKey"
                    onClick={() => selectInboxCategory("social")}
                    style={{ borderBottom: social ? "3px solid #1a73e8" : null }}
                >
                    <div  id="topKeyInside">
                        <span 
                            className="glyphicon glyphicon-user"
                            style={{ color: social ? "#1a73e8" : "#5F6368" }}
                        />
                        <div style={{ color: social ? "#1a73e8" : "#5F6368" }}>
                            Social
                        </div>
                    </div>
                </div>
                <div 
                    id="topKey"
                    onClick={() => selectInboxCategory("promotions")}
                    style={{ borderBottom: promotions ? "3px solid #1e8e3e" : null }}
                >
                    <div id="topKeyInside">
                        <span 
                            className="glyphicon glyphicon-tag"
                            style={{ color: promotions ? "#1e8e3e" : "#5F6368" }}
                        />
                        <div style={{ color: promotions ? "#1e8e3e" : "#5F6368" }}>
                            Promotions
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;