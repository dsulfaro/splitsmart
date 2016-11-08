import {
  fetchCommentsUtil
} from '../util/comments_api_util';

import {
  FETCH_COMMENTS,
  fetchComments,
  receiveComments
} from '../actions/comment_actions';

export default ({ getState, dispatch }) => next => action => {

  const fetchCommentsSuccess = comments => dispatch(receiveComments(comments));
  const error = error => console.log('error in comments middleware')
  switch (action.type) {
    case FETCH_COMMENTS:
      fetchCommentsUtil(fetchCommentsSuccess, action.expense_id, error);
      return next(action);
    default:
      return next(action);
  }
}
