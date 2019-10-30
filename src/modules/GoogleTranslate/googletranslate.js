import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import debounce from "lodash/debounce";
import {ic_mic} from 'react-icons-kit/md/ic_mic';
import {ic_menu} from 'react-icons-kit/md/ic_menu';
import {androidApps} from 'react-icons-kit/ionicons/androidApps';
import {ic_compare_arrows} from 'react-icons-kit/md/ic_compare_arrows';
import {ic_g_translate} from 'react-icons-kit/md/ic_g_translate';
import {fileEmpty} from 'react-icons-kit/icomoon/fileEmpty';
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
      currentInput: ""
    }
    this.handleTextInputOnChange = this.handleTextInputOnChange.bind(this);
    this.handleTranslation = debounce(this.handleTranslation, 3000);
  }

  handleTextInputOnChange(event) {
    event.persist();
    event.preventDefault();
    this.setState({ currentInput: event.target.value });
    this.handleTranslation();
  }

  handleTranslation() {
    this.props.getTranslation({
      sourceLang: "auto",
      targetLang: "en",
      sourceText: this.state.currentInput
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
              <Icon size={26} icon={ic_menu}/>
              <img
                  className="googlelogo11"
                  src={googlelogo11}
              />
              Translate
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
                <Icon size={26} icon={ic_g_translate}/>
                <p>  Text</p>
              </div>
              <div className="docButton hideOnMobile">
                <Icon size={26} icon={fileEmpty}/>
                Documents
              </div>
            </div>
          </div>
        </div>
        <div className="translateTable">
          <div className="translateBox">
            <div className="squareBox">
              <div className="languageBar">
                <div className="translateFrom">
                  <div className="languageChoice1">
                  DETECTED
                  </div>
                  <div className="languageChoice hideOnMobile">
                  English
                  </div>
                  <div className="languageChoice hideOnMobile">
                  SPANISH
                  </div>
                </div>
                <div className="arrowBothWay">
                  <Icon size={29} icon={ic_compare_arrows}/>
                </div>
                <div className="translateTo">
                  <div className="languageChoice1">
                  English
                  </div>
                  <div className="languageChoice hideOnMobile">
                  SPANISH
                  </div>
                  <div className="languageChoice hideOnMobile">
                  ARABIC
                  </div>
                </div>
              </div>
            <div className="typeWords">
              <div className="typeInput">
                <textarea
                  className="typeText"
                  onChange={this.handleTextInputOnChange}
                  maxLength="5000"
                  onSubmit={this.onSubmit}
                  placeholder="Enter text"
                  value={currentInput}
                />
                <div className="maxChar">
                  <div className="detailButtons">
                    <Icon size={23} icon={ic_close}/>
                    <Icon size={23} icon={ic_mic}/>
                    <Icon size={23} icon={volumeUp}/>
                  </div>
                  <p className="wordLimit hideOnMobile">{currentInput.length}/5000</p>
                </div>
              </div>
              <div className="typeOutput">
              {translation ? translation : "Translation"}
                <div className="outputBottom">
                  <div className="detailButtons2">
                    <Icon size={23} icon={starEmpty}/>
                    <Icon size={23} icon={volumeUp}/>
                    <Icon size={23} icon={filesEmpty}/>
                    <Icon size={23} icon={ic_more_vert}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        Send feedback
      </div>
      <div className="background">
      <div className="choicesOutside">
        <div className="history">
          <div className="choiceIcon">
          <Icon size={30} icon={repeat}/>
          </div>
          History
        </div>
        <div className="saved">
          <div className="choiceIcon">
          <Icon size={30} icon={ic_grade}/>
          </div>
          Saved
        <div className="community">
          <div className="choiceIcon">
          <Icon size={30} icon={users}/>
          </div>
          Community
        </div>
      </div>
      </div>
    </div>
    </div>
    )
  }
}

export default GoogleTranslate;
