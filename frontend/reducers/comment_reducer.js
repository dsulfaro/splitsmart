import { RECEIVE_COMMENTS,
         RECEIVE_COMMENT } from '../actions/comment_actions';
import merge from 'lodash/merge';

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      debugger
      return action.comment;
    default:
      return state;
  }
}

export default CommentReducer;
