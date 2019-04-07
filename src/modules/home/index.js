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

const mapStateToProps = state => {
    console.log(state, "====== STATE")
    return ({
        activeEmail: state.emailsReducer.activeEmail,
        emails: state.emailsReducer.emails
    })
}

const mapDispatchToProps = dispatch => ({
    deleteEmail: (options) => dispatch(deleteEmail(options)),
    favoriteEmail: (options) => dispatch(favoriteEmail(options)),
    sendEmail: (options) => dispatch(sendEmail(options)),
    setActiveEmail: (options) => dispatch(setActiveEmail(options)),
    unfavoriteEmail: (options) => dispatch(unfavoriteEmail(options))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

