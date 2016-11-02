import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  login: id => dispatch(login(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
