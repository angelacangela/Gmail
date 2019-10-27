import { connect } from 'react-redux';
import Home from "./home";
import {
    deleteEmail,
    setActiveEmail,
    sendEmail,
} from "../../actions/email-actions";
import {
    favoriteEmail,
    unfavoriteEmail
} from "../../actions/star-actions";
import { getEmailsContent } from "../../actions/emails.actions";
import { getEmailEmail, getEmailName, getEmailBody } from "../../selectors/emails.selectors"

const mapStateToProps = state => {
    console.log(state, "====== STATE")
    return ({
        activeEmail: state.emailsReducer.activeEmail,
        emails: state.emailsReducer.emails,
        emailList: state.emailsReducer.emailList
    })
}

const mapDispatchToProps = dispatch => ({
    deleteEmail: (options) => dispatch(deleteEmail(options)),
    favoriteEmail: (options) => dispatch(favoriteEmail(options)),
    sendEmail: (options) => dispatch(sendEmail(options)),
    setActiveEmail: (options) => dispatch(setActiveEmail(options)),
    unfavoriteEmail: (options) => dispatch(unfavoriteEmail(options)),
    getEmailsContent: () => dispatch(getEmailsContent())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
