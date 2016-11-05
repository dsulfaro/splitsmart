import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchAllFriends,
        fetchPendingFriends,
        fetchRequestingFriends,
        approveFriend,
        denyFriend } from '../../actions/friend_actions';

const mapStateToProps = store => ({
  friends: store.friends.friends,
  pending: store.friends.pending,
  requesting: store.friends.requesting,
  users: store.friends.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllFriends: () => dispatch(fetchAllFriends()),
  approveFriend: friend => dispatch(approveFriend(friend)),
  denyFriend: friend => dispatch(denyFriend(friend))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsIndex);
