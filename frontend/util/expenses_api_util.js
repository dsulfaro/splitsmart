export const fetchAllUnsettled = (success, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/expenses',
    success,
    error
  })
}

export const fetchUnsettled = (success, friendId, error) => {
  $.ajax({
    method: 'GET',
    url: 'api/expenses',
    data: {friend_id: friendId},
    success,
    error
  });
}
