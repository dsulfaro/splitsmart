import { RECEIVE_ALL_FRIENDS } from '../actions/friend_actions';
import merge from 'lodash/merge';

const FriendReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_FRIENDS:
      return action.friends;
    default:
      return state;
  }
};

export default FriendReducer;
