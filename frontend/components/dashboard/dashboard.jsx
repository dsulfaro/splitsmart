import React from 'react';
import FriendsSidebar from '../friends_sidebar/friends_sidebar';
import Expenses from '../expenses/expenses';

class Dashboard extends React.Component {
  render () {
    return (
      <section id="dashboard">
        <FriendsSidebar />
        <Expenses />
      </section>
    );
  }
}

export default Dashboard;
