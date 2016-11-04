import React from 'react';
import FriendsIndexContainer from './friends_index_container';
import UserSearchContainer from './user_search_container';

class FriendsSidebar extends React.Component {
  render () {
    return (
      <aside id="friends-sidebar">
        <h2 id="dashboard-title">
          <i className="fa fa-money" aria-hidden="true"></i>
          &nbsp; Dashboard
        </h2>
        <FriendsIndexContainer />
        <UserSearchContainer />
      </aside>
    );
  }
}

export default FriendsSidebar;
