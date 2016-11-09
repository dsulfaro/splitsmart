export const fetchCommentsUtil = (success, expense_id, error) => {
  $.ajax({
    method: 'GET',
    url: `api/expenses/${expense_id}/comments`,
    success,
    error
  })
}

export const addCommentUtil = (success, comment, error) => {
  $.ajax({
    method: 'POST',
    url: `api/expenses/${comment.expense_id}/comments`,
    data: { comment },
    success,
    error
  })
}
