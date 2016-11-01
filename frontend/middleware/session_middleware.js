import { LOGIN, LOGOUT, SIGNUP,
         receiveCurrentUser,
         receiveErrors} from '../actions/session_actions';
import { login, logout, signup } from '../util/session_api_util';


export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = error => dispatch(receiveErrors(error.responseJSON));
  switch (action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      return logout(() => next(action));
    case SIGNUP:
      signup(action.user, successCallback, errorCallback);
      return next(action);
    default:
      return next(action);
  }
};
