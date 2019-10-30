import { combineReducers } from 'redux';
import emailsReducer from "./emails.reducer";
import translation from "./translation.reducer"

const rootReducer = combineReducers({
    emailsReducer,
    translation
})

export default rootReducer;
