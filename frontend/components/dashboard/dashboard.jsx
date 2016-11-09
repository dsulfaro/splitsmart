import React from 'react';
import FriendsSidebar from '../friends_sidebar/friends_sidebar';
import { withRouter } from 'react-router';

class Dashboard extends React.Component {


  render () {
    return (
      <section id="dashboard">
        <FriendsSidebar />
        { this.props.children }
        <section id="balance-pane">
          <h2 id="balance-title">Balance</h2>
          <h3 id="balance">Calculating...</h3>
        </section>
      </section>
    );
  }
}

export default withRouter(Dashboard);
