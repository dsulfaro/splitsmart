export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const ADD_COMMENT = "ADD_COMMENT";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";

export const fetchComments = expense_id => ({
  type: FETCH_COMMENTS,
  expense_id
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});
