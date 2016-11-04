import { connect } from 'react-redux';
import { requestFriend } from '../../actions/friend_actions';
import UserSearch from './user_search';

const mapStateToProps = store => ({
  users: store.friends.users
});

const mapDispatchToProps = dispatch => ({
  requestFriend: friend => dispatch(requestFriend(friend))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
