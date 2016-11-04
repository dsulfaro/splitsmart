import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FriendMiddleware from './friend_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FriendMiddleware
);

export default RootMiddleware;
