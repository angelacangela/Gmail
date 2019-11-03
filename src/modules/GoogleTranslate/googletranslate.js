import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import debounce from "lodash/debounce";
import {ic_mic} from 'react-icons-kit/md/ic_mic';
import {ic_menu} from 'react-icons-kit/md/ic_menu';
import {androidApps} from 'react-icons-kit/ionicons/androidApps';
import {ic_keyboard_arrow_down} from 'react-icons-kit/md/ic_keyboard_arrow_down';
import {ic_compare_arrows} from 'react-icons-kit/md/ic_compare_arrows';
import {ic_g_translate} from 'react-icons-kit/md/ic_g_translate';
import {ic_insert_drive_file} from 'react-icons-kit/md/ic_insert_drive_file';
import {ic_more_vert} from 'react-icons-kit/md/ic_more_vert';
import {volumeUp} from 'react-icons-kit/fa/volumeUp';
import {filesEmpty} from 'react-icons-kit/icomoon/filesEmpty';
import {ic_close} from 'react-icons-kit/md/ic_close';
import {repeat} from 'react-icons-kit/fa/repeat';
import {ic_grade} from 'react-icons-kit/md/ic_grade';
import {users} from 'react-icons-kit/icomoon/users';
import {starEmpty} from 'react-icons-kit/icomoon/starEmpty';
const googlelogo11 = require("../../assets/googlelogo.png");

class GoogleTranslate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      sourceLang: "auto",
      targetLang: "en"
    }
    this.clearInputQuery = this.clearInputQuery.bind(this);
    this.handleTextInputOnChange = this.handleTextInputOnChange.bind(this);
    this.handleTranslation = debounce(this.handleTranslation, 1000);
  }

  clearInputQuery() {
    this.setState({ currentInput: "" });
  }

  handleTextInputOnChange(event) {
    event.persist();
    event.preventDefault();
    this.setState({ currentInput: event.target.value });
    this.handleTranslation();
  }

  handleTranslation() {
   const { currentInput, sourceLang, targetLang } = this.state;
   this.props.getTranslation({
     sourceLang,
     targetLang,
     sourceText: currentInput
   });
  }

  render(){
    console.log(this.props);
    const { translation } = this.props;
    const { currentInput } = this.state;
    return(
      <div className="entireTranslate">
        <div className="topWindowMenu">
          <div className="topMenuTranslate">
            <div className="topMenuLeft">
              <Icon className="gridIcon" size={26} icon={ic_menu}/>
              <img
                  className="googlelogo11"
                  src={googlelogo11}
              />
              <div className="translateLogo">Translate</div>
            </div>
            <div className="topMenuRight">
              <div className="androidIcon hideOnMobile">
                <Icon size={26} icon={androidApps}/>
              </div>
              <div className="signInButton11">
              Sign in
              </div>
            </div>
          </div>
          <div className="topMenuTranslate2 hideOnMobile">
            <div className="txtdocument hideOnMobile">
              <div className="textButton hideOnMobile">
                <Icon size={21} icon={ic_g_translate}/>
                <p>Text</p>
              </div>
              <div className="docButton hideOnMobile">
                <Icon className="insertDriveIcon" size={21} icon={ic_insert_drive_file}/>
                <p>Documents</p>
              </div>
            </div>
          </div>
        </div>
        <div className="translateTable">
          <div className="translateBox">
            <div className="squareBox">
              <div className="languageBar">
                <div className="translateFrom">
                  <div className="languagesContainer">
                    <div className="languageChoice1">
                      DETECT LANGUAGE
                    </div>
                    <div className="languageChoice hideOnMobile">
                      ENGLISH
                    </div>
                    <div className="languageChoice hideOnMobile">
                      SPANISH
                    </div>
                    <div className="languageChoice hideOnMobile">
                      FRENCH
                    </div>
                  </div>
                  <div className="hideOnMobile">
                    <Icon className="arrowDownIcon hideOnMobile" size={29} icon={ic_keyboard_arrow_down}/>
                  </div>
                </div>
                <div className="arrowBothWay">
                  <Icon size={29} icon={ic_compare_arrows}/>
                </div>
                <div className="translateTo">
                  <div className="languagesContainer">
                    <div className="languageChoice1">
                      ENGLISH
                    </div>
                    <div className="languageChoice hideOnMobile">
                      SPANISH
                    </div>
                    <div className="languageChoice hideOnMobile">
                      ARABIC
                    </div>
                  </div>
                  <div className="hideOnMobile">
                    <Icon className="arrowDownIcon" size={29} icon={ic_keyboard_arrow_down}/>
                  </div>
                </div>
              </div>
            <div className="typeWords">
              <div className="typeInput">
                <div className="typeWordsInside">
                  <textarea
                    className="typeText"
                    onChange={this.handleTextInputOnChange}
                    maxLength="5000"
                    name="text"
                    onInput='this.style.height = "";this.style.height = this.scrollHeight + "px"'
                    onSubmit={this.onSubmit}
                    placeholder="Enter text"
                    value={currentInput}
                  />
                  <Icon
                    className="closeButton"
                    icon={ic_close}
                    onClick={this.clearInputQuery}
                    size={23}
                  />
                </div>
                <div className="maxChar">
                  <div className="detailButtons">
                    <Icon className="iconMic" size={23} icon={ic_mic}/>
                    {translation && (
                      <Icon className="iconVol" size={23} icon={volumeUp}/>
                    )}
                  </div>
                  <p className="wordLimit hideOnMobile">{currentInput.length}/5000</p>
                </div>
              </div>
              <div className={`outputContainer ${translation ? "" : "hideOnMobile"}`}>
                <div className="outputBottom">
                  <div className="outputTxtInside">
                    <div className="typeOutput">
                    {translation ? translation : "Translation"}
                    </div>
                    {translation && (
                      <div className="starIcon">
                        <Icon className="iconStar" size={23} icon={starEmpty}/>
                      </div>
                    )}
                  </div>
                  {translation && (
                    <div className="detailButtons2">
                      <Icon className="iconVolume" size={23} icon={volumeUp}/>
                      <div className="iconTranslateTo">
                        <Icon className="iconEmpty" size={23} icon={filesEmpty}/>
                        <Icon className="iconVer" size={23} icon={ic_more_vert}/>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        Send feedback
      </div>
      <div className="bottomMenu">
        <div className="choicesOutside">
          <div className="bottomMenuItemContainer">
            <div className="bottomMenuItem">
              <Icon size={30} icon={repeat}/>
            </div>
            History
          </div>
          <div className="bottomMenuItemContainer">
            <div className="bottomMenuItem">
              <Icon size={30} icon={ic_grade}/>
            </div>
            Saved
          </div>
          <div className="bottomMenuItemContainer">
            <div className="bottomMenuItem">
              <Icon size={30} icon={users}/>
            </div>
            Community
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default GoogleTranslate;
