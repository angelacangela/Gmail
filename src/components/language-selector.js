import React from "react";
import { readableToAbbrevLanguages } from "../modules/GoogleTranslate/utils";
import { Link } from "react-router-dom";
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close';
import {iosSearchStrong} from 'react-icons-kit/ionicons/iosSearchStrong';
import "./styles.css";

const LanguageSelector = ({
  currentlyChangingLanguage="sourceLang",
  setLanguage,
  toggleLanguageSelector
}) => (
  <div className="languageSelectorContainer">
    <div className="allLanguages">Recent Languages</div>
    <div className="allLanguages">All languages</div>
    <div className="translateFrom hideOnMobile">Translate {currentlyChangingLanguage === "sourceLang" ? "from" : "to"}
      <Icon size={29} icon={iosSearchStrong}/>
      <Icon className="iconClose20" size={29} icon={ic_close}/>
    </div>
    {Object.keys(readableToAbbrevLanguages).slice(1).map(
      (language) => (
        <div
            onClick={() => {
            setLanguage(readableToAbbrevLanguages[language], currentlyChangingLanguage);
            toggleLanguageSelector();
          }}>
          <div className="language20">
            <div className="eachLanguage">{language}</div>
          </div>
        </div>
      )
    )}
  </div>
);

export default LanguageSelector;
