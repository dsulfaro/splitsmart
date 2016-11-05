import { RECEIVE_ALL_FRIENDS,
        REQUEST_RECEIVE_FRIEND,
        APPROVE_FRIEND,
        DENY_FRIEND } from '../actions/friend_actions';
import merge from 'lodash/merge';

const FriendReducer = (state = {}, action) => {

  Object.freeze(state);
  let newState = {};
  let newFriends = [];
  let newPending = [];
  let newReq = [];
  let newUsers = [];

  switch (action.type) {

    case RECEIVE_ALL_FRIENDS:
      return action.friends;

    case REQUEST_RECEIVE_FRIEND:
      newReq = [].concat(state.requesting.slice(0)).concat(action.friend);
      newUsers = state.users.filter( friend => {
        return friend.username !== action.friend.username
      });
      newState = {friends: state.friends.slice(0),
                      pending: state.pending.slice(0),
                      requesting: newReq,
                      users: newUsers}
      return newState;

    case APPROVE_FRIEND:
      newFriends = [].concat(state.friends.slice(0)).concat(action.friend);
      newPending = state.pending.filter( friend => {
        return friend.username !== action.friend.username
      });
      newState = {friends: newFriends,
                    pending: newPending,
                    requesting: state.requesting.slice(0),
                    users: state.users.slice(0)}
      return newState;

    case DENY_FRIEND:
      newPending = state.pending.filter( friend => {
        return friend.username !== action.friend.username
      });
      newUsers = [].concat(state.users).concat(action.friend);
      newState = {friends: state.friends.slice(0),
                  pending: newPending,
                  requesting: state.requesting.slice(0),
                  users: newUsers}


      return newState;

    default:
      return state;
  }
};

export default FriendReducer;
