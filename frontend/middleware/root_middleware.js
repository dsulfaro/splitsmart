import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import FriendMiddleware from './friend_middleware';
import ExpenseMiddleware from './expenses_middleware';
import CommentMiddleware from './comments_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  FriendMiddleware,
  ExpenseMiddleware,
  CommentMiddleware
);

export default RootMiddleware;
