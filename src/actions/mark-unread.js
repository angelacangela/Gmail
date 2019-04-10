import {
    MARK_UNREAD,
} from "./types.js";
import { createAction } from "redux-actions";

const markAsUnread = createAction(MARK_UNREAD);

export const markUnread = (options) => {
    return async function(dispatch) {
        dispatch(markAsUnread(options));
    };
};

