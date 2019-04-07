import {
    FAVORITE_EMAIL,
    UNFAVORITE_EMAIL
} from "./types.js";
import { createAction } from "redux-actions";

const starEmail = createAction(FAVORITE_EMAIL);
const unstarEmail = createAction(UNFAVORITE_EMAIL);

export const favoriteEmail = (options) => {
    return async function(dispatch) {
        dispatch(starEmail(options));
    };
};

export const unfavoriteEmail = (options) => {
    return async function(dispatch) {
        dispatch(unstarEmail(options));
    };
};