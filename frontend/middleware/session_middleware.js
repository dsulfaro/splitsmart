import { LOGIN, LOGOUT, SIGNUP,
         receiveCurrentUser,
         receiveErrors} from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';
import { hashHistory } from 'react-router';


export default ({ getState, dispatch }) => next => action => {

  const successCallback = user => {
    dispatch(receiveCurrentUser(user));
    hashHistory.push('/dashboard');
  };

  const errorCallback = error => {
    dispatch(receiveErrors(error.responseJSON));
  };

  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      return logout(() => {
        next(action);
        hashHistory.push('/');
      });
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
