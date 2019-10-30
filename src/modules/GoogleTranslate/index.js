import { connect } from 'react-redux';
import { getTranslation } from "../../actions/translation.actions";
import GoogleTranslate from './googletranslate';

const mapStateToProps = state => ({
  state,
  translation: state.translation.translation
});

const mapDispatchToProps = dispatch => ({
  getTranslation: (options) => dispatch(getTranslation(options))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GoogleTranslate);
