export const FETCH_ALL_FRIENDS = "GET_ALL_FRIENDS";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";

export const REQUEST_FRIEND = "REQUEST_FRIEND";
export const APPROVE_FRIEND = "APPROVE_FRIEND";
export const DENY_FRIEND = "DENY_FRIEND";

export const fetchAllFriends = friends => ({
  type: FETCH_ALL_FRIENDS,
  friends
});

export const receiveAllFriends = friends => ({
  type: RECEIVE_ALL_FRIENDS,
  friends
});

export const requestFriend = friend => ({
  type: requestFriend,
  friend
});

export const approveFriend = friend => ({
  type: APPROVE_FRIEND,
  friend
});

export const denyFriend = friend => ({
  type: DENY_FRIEND,
  friend
});
