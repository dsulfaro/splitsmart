import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { logout, login, signup } from '../../actions/session_actions';

const mapStateToProps = store => ({
  loggedIn: Boolean(store.session.currentUser),
  errors: store.session.errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
