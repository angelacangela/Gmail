import { connect } from 'react-redux';
import Home from "./home";
import {
    deleteEmail,
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
    deleteEmail: (options) => dispatch(deleteEmail(options)),
    setActiveEmail: (options) => dispatch(setActiveEmail(options))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

