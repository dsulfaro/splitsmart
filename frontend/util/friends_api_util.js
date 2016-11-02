export const fetchAllFriends = (success, error) => {
  $.ajax({
    method: 'GET',
    url: '/api/friends',
    success,
    error
  });
};

export const requestFriendship = (friendId, success, error) => {
  $.ajax({
    method: 'POST',
    url: `/api/friendships`,
    data: { friend_id: friendId },
    success,
    error
  });
};

export const approveFriendship = (friendId, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `/api/friendships/${friendId}`,
    data: { friend_id: friendId },
    success,
    error
  });
};

export const denyFriendship = (friendId, success, error) => {
  $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${friendId}`,
    data: { friend_id: friendId },
    success,
    error
  });
};

// IMPLEMENT THIS LATER //
export const searchUsers = 0;
