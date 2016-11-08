export const fetchAllUnsettled = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/expenses',
    success,
    error
  });
};

export const fetchUnsettled = (success, friendId, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/expenses',
    data: {friend_id: friendId},
    success,
    error
  });
};

export const addExpenseUtil = (success, expense, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/expenses',
    data: { expense },
    success,
    error
  });
};

export const deleteExpenseUtil = (success, id, error) => {
  $.ajax({
    method: 'DELETE',
    url: `api/expenses/${id}`,
    data: { expense_id: id },
    success,
    error
  });
};
