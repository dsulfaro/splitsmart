import { connect } from 'react-redux';
import FriendsIndex from './friends_index';
import { fetchAllFriends,
        fetchPendingFriends,
        fetchRequestingFriends } from '../../actions/friend_actions';
import { selectFriends, selectPending, selectRequesting } from '../../reducers/selectors';

const mapStateToProps = store => ({
  friends: store.friends.friends,
  pending: store.friends.pending,
  requesting: store.friends.requesting,
  users: store.friends.users
});

const mapDispatchToProps = dispatch => ({
  fetchAllFriends: () => dispatch(fetchAllFriends())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsIndex);
