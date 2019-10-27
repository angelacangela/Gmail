import { createAction } from "redux-actions";
import {
  GET_EMAILS_REQUEST,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAIL
} from "./types";
import { fetchEmails } from "./api";

const getEmailsRequest = createAction(GET_EMAILS_REQUEST)
const getEmailsSuccess = createAction(GET_EMAILS_SUCCESS)
const getEmailsFail = createAction(GET_EMAILS_FAIL)

export const getEmailsContent = () => {
  return async function(dispatch) {
    dispatch(getEmailsRequest());
    try {
      let response = await fetchEmails();
      let responseJson = await response.json();
      if(response.status < 300 && response.status >= 200) {
        dispatch(getEmailsSuccess(responseJson));
      } else {
        await Promise.reject(responseJson);
      }
    } catch(err) {
      dispatch(getEmailsFail(err))
    }
  }
}
