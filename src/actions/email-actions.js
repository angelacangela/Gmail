import {
    SET_ACTIVE_EMAIL,
    DELETE_EMAIL,
    SEND_EMAIL,
    MARK_UNREAD
} from "./types.js";
import { createAction } from "redux-actions";

const setCurrentEmail = createAction(SET_ACTIVE_EMAIL);
const removeEmail = createAction(DELETE_EMAIL);
const createEmail = createAction(SEND_EMAIL);
const markAsUnread = createAction(MARK_UNREAD);

export const setActiveEmail = (options) => {
    return async function(dispatch) {
        dispatch(setCurrentEmail(options));
    };
};

export const deleteEmail = (options) => {
    return async function(dispatch) {
        dispatch(removeEmail(options));
    };
};

export const sendEmail = (options) => {
    return async function(dispatch) {
        dispatch(createEmail(options));
    };
};

export const markUnread = (options) => {
    return async function(dispatch) {
        dispatch(markAsUnread(options));
    };
};


