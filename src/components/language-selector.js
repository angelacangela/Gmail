import React from "react";
import { readableToAbbrevLanguages } from "../modules/GoogleTranslate/utils";
import "./styles.css";

const LanguageSelector = ({
  currentlyChangingLanguage="sourceLang",
  setLanguage,
  toggleLanguageSelector
}) => (
  <div className="languageSelectorContainer">
    <div>Translate {currentlyChangingLanguage === "sourceLang" ? "from" : "to"}</div>
    {Object.keys(readableToAbbrevLanguages).slice(1).map(
      (language) => (
        <div onClick={() => {
          setLanguage(readableToAbbrevLanguages[language], currentlyChangingLanguage);
          toggleLanguageSelector();
        }}>
          {language}
        </div>
      )
    )}
  </div>
);

export default LanguageSelector;
