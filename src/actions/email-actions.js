import {
    SET_ACTIVE_EMAIL
} from "./types.js";
import { createAction } from "redux-actions";

const setCurrentEmail = createAction(SET_ACTIVE_EMAIL);

export const setActiveEmail = (options) => {
    return async function(dispatch) {
        dispatch(setCurrentEmail(options));
    };
};