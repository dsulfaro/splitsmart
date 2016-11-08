export const FETCH_COMMENTS = "FETCH_COMMENTS";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

export const fetchComments = expense_id => ({
  type: FETCH_COMMENTS,
  expense_id
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});
