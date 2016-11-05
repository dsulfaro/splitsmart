export const FETCH_ALL_FRIENDS = "GET_ALL_FRIENDS";
export const RECEIVE_ALL_FRIENDS = "RECEIVE_ALL_FRIENDS";

export const REQUEST_FRIEND = "REQUEST_FRIEND";
export const REQUEST_RECEIVE_FRIEND = "REQUEST_RECEIVE_FRIEND";

export const APPROVE_FRIEND = "APPROVE_FRIEND";
export const RECEIVE_APPROVED_FRIEND = "RECEIVE_APPROVED_FRIEND";

export const DENY_FRIEND = "DENY_FRIEND";
export const RECEIVE_DENIED_FRIEND = "RECEIVE_DENIED_FRIEND";

export const fetchAllFriends = friends => ({
  type: FETCH_ALL_FRIENDS,
  friends
});

export const receiveAllFriends = friends => ({
  type: RECEIVE_ALL_FRIENDS,
  friends
});

export const requestFriend = friend => ({
  type: REQUEST_FRIEND,
  friend
});

export const requestReceiveFriend = friend => ({
  type: REQUEST_RECEIVE_FRIEND,
  friend
})

export const approveFriend = friend => ({
  type: APPROVE_FRIEND,
  friend
});

export const receiveApprovedFriend = friend => ({
  type: RECEIVE_APPROVED_FRIEND,
  friend
});

export const denyFriend = friend => ({
  type: DENY_FRIEND,
  friend
});

export const receiveDeniedFriend = friend => ({
  type: RECEIVE_DENIED_FRIEND,
  friend
});
