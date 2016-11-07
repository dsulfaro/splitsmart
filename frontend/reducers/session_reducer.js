import React from 'react';
import { RECEIVE_CURRENT_USER,
         RECEIVE_ERRORS,
         LOGOUT } from '../actions/session_actions';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.currentUser, errors: [] };
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case LOGOUT:
      return merge({}, _defaultState);
    default:
      return state;
  }
};

export default SessionReducer;
