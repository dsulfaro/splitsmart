import React from 'react';
import FriendsSidebar from '../friends_sidebar/friends_sidebar';
import { withRouter } from 'react-router';

class Dashboard extends React.Component {
  render () {
    return (
      <section id="dashboard">
        <FriendsSidebar />
        { this.props.children }
      </section>
    );
  }
}

export default withRouter(Dashboard);
