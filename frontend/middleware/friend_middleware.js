import { fetchAllFriendsUtil,
        requestFriendshipUtil,
        approveFriendshipUtil,
        denyFriendshipUtil } from '../util/friends_api_util';

import { FETCH_ALL_FRIENDS,
        REQUEST_FRIEND,
        APPROVE_FRIEND,
        DENY_FRIEND,
        fetchAllFriends,
        requesetFriend,
        approveFriend,
        receiveApprovedFriend,
        receiveDeniedFriend,
        requestReceiveFriend,
        receiveAllFriends } from '../actions/friend_actions';

export default ({ getState, dispatch }) => next => action => {

  const fetchAllFriendsSuccess = friends => dispatch(receiveAllFriends(friends));
  const requestFriendSuccess = friend => dispatch(requestReceiveFriend(friend));
  const approveFriendSuccess = friend => dispatch(receiveApprovedFriend(friend));
  const denyFriendSuccess = friend => dispatch(receiveDeniedFriend(friend));

  switch (action.type) {
    case FETCH_ALL_FRIENDS:
      fetchAllFriendsUtil(fetchAllFriendsSuccess);
      return next(action);
    case REQUEST_FRIEND:
      requestFriendshipUtil(action.friend.id, requestFriendSuccess);
      return next(action);
    case APPROVE_FRIEND:
      approveFriendshipUtil(action.friend.id, approveFriendSuccess);
      return next(action);
    case DENY_FRIEND:
      denyFriendshipUtil(action.friend.id, denyFriendSuccess);
      return next(action);
    default:
      return next(action);
  }
};
