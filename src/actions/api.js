export const fetchEmails = () => {
  return fetch("http://jsonplaceholder.typicode.com/comments")
};

export const fetchTranslation = ({ sourceText, targetLang, sourceLang }) => {
  return fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${sourceText}`);
};
