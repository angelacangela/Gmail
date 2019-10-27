import get from "lodash/get";

export const getEmailEmail = (email) => get(email, "email", "");
export const getEmailName = (email) => get(email, "name", "");
export const getEmailBody = (email) => get(email, "body", "");
