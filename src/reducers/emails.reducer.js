import {
  GET_EMAILS_REQUEST,
  GET_EMAILS_SUCCESS,
  GET_EMAILS_FAIL
} from "../actions/types.js"
import { handleActions } from "redux-actions";

export default handleActions({
  [GET_EMAILS_REQUEST]: (state) => ({
    ...state,
    inflight: true
  }),
  [GET_EMAILS_SUCCESS]: (state, { payload }) => ({
    ...state,
    emailList: payload,
    inflight: false
  }),
  [GET_EMAILS_FAIL]: (state) => ({
    ...state,
    inflight: false,
    lastRequestWasError: true
  }),
},
{
  inflight: false,
  lastRequestWasError: false,
  emailList: [],
  emailDetail: {
    comments: []
  }
}
)
