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

export const fetchSettledUtil = (success, friend_id, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/expenses',
    data: {settled: true, friend_id: friend_id},
    success
  });
};

export const updateExpenseUtil = (success, expense_id, error) => {
  $.ajax({
    method: 'PUT',
    url: `api/expenses/${expense_id}`,
    success,
    error
  });
};
