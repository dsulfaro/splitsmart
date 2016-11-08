export const fetchCommentsUtil = (success, expense_id, error) => {
  $.ajax({
    method: 'GET',
    url: `api/expenses/${expense_id}/comments`,
    success,
    error
  })
}
