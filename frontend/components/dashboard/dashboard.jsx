import React from 'react';
import FriendsSidebar from '../friends_sidebar/friends_sidebar';
import { withRouter } from 'react-router';
import SettledContainer from '../expenses/settled_container';

class Dashboard extends React.Component {


  render () {
    return (
      <section id="dashboard">
        <FriendsSidebar />
        { this.props.children }
        <section id="dash-right">
          <section id="balance-pane">
            <h2 id="balance-title">Balance</h2>
            <h3 id="balance">Calculating...</h3>
          </section>
          {this.props.params.id ? <SettledContainer /> : ""}
        </section>
      </section>
    );
  }
}

export default withRouter(Dashboard);
