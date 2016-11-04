import { RECEIVE_ALL_FRIENDS,
        REQUEST_RECEIVE_FRIEND,
        APPROVE_FRIEND } from '../actions/friend_actions';
import merge from 'lodash/merge';

const FriendReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {

    case RECEIVE_ALL_FRIENDS:
      return action.friends;

    case REQUEST_RECEIVE_FRIEND:
      let newReq = [].concat(state.requesting.slice(0)).concat(action.friend);
      let newUsers = state.users.filter( friend => {
        return friend.username !== action.friend.username
      });
      newState = {friends: state.friends.slice(0),
                      pending: state.pending.slice(0),
                      requesting: newReq,
                      users: newUsers}
      return newState;

    case APPROVE_FRIEND:
      let newFriends = [].concat(state.friends.slice(0)).concat(action.friend);
      let newPending = state.pending.filter( friend => {
        return friend.username !== action.friend.username
      });
      newState = {friends: newFriends,
                    pending: newPending,
                    requesting: state.requesting.slice(0),
                    users: state.users.slice(0)}
      return newState;

    default:
      return state;
  }
};

export default FriendReducer;
