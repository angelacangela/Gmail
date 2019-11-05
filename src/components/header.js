import React from "react";
import "../styles/email-list.css";
import { Icon } from 'react-icons-kit';
import {navicon} from 'react-icons-kit/ionicons/navicon';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import {androidCreate} from 'react-icons-kit/ionicons/androidCreate';
import {ic_replay} from 'react-icons-kit/md/ic_replay';

const gmail13 = require("../assets/gmail.png");

const Header = ({
    inputContent,
    onChangeHandler
}) => {
    return (
      <div>
        <div className="topBox">
            <div style={{
                minWidth: "248px",
                textAlign: "left"
            }}>
                <div
                    className="glyphicon glyphicon-menu-hamburger hideOnMobile"
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
                    className="gmailpng13 hideOnMobile"
                    src={gmail13}
                    style={{
                        paddingRight: "32px",
                        objectFit: "contain"
                    }}
                />
            </div>
            <div className="middleHeader hideOnMobile">
                <div className="searchContainer hideOnMobile">
                    <div className="glyphicon glyphicon-search hideOnMobile"/>
                    <input
                        placeholder="Search mail"
                        value={inputContent}
                        onChange={onChangeHandler}
                    />
                </div>
            </div>
            <div className="rightHeader hideOnMobile">
                <div className="chart hideOnMobile" className="glyphicon glyphicon-th hideOnMobile"/>
                <div className="initialCircle hideOnMobile">A</div>
            </div>
            <div className="topBoxMobile13 showOnMobile">
              <Icon className="iconNav13" size={27} icon={navicon}/>
              <Icon className="iconRefr13" size={26} icon={ic_replay}/>
              Primary
              <Icon className="iconPen13" size={25} icon={androidCreate}/>
            </div>
        </div>
          <Icon size={29} icon={iosSearchStrong}/>
          <input
              id="searchInput13"
              placeholder="Search"
          />
      </div>
    )
}

export default Header;
