import { connect } from 'react-redux';
import EmailList from "./email-list";
import {
    setActiveEmail
} from "../../actions/email-actions";

const mapStateToProps = state => {
    console.log(state, "====== STATE")
    return ({
        activeEmail: state.emailsReducer.activeEmail,
        emails: state.emailsReducer.emails
    })
}

const mapDispatchToProps = dispatch => ({
    setActiveEmail: (options) => dispatch(setActiveEmail(options))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailList);

