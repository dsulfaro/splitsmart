import { connect } from 'react-redux';
import { logout, login, signup } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
