import React from 'react';
import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import FriendReducer from './friend_reducer';
import ExpenseReducer from './expenses_reducer';
import CommentReducer from './comment_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  friends: FriendReducer,
  expenses: ExpenseReducer
});

export default RootReducer;
