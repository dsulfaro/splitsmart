import { fetchAllFriendsUtil,
        requestFriendshipUtil,
        approveFriendshipUtil,
        denyFriendshipUtil } from '../util/friends_api_util';

import { FETCH_ALL_FRIENDS,
        fetchAllFriends,
        receivePendingFriends,
        receiveRequestingFriends,
        receiveAllFriends } from '../actions/friend_actions';

export default ({ getState, dispatch }) => next => action => {

  const fetchAllFriendsSuccess = friends => dispatch(receiveAllFriends(friends));

  switch (action.type) {
    case FETCH_ALL_FRIENDS:
      fetchAllFriendsUtil(fetchAllFriendsSuccess);
      return next(action);
    default:
      return next(action);
  }
};
