import React from 'react';
import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendReducer from './friend_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friends: FriendReducer
});

export default RootReducer;
