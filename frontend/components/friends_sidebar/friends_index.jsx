import React from 'react';
import { withRouter } from 'react-router';

class FriendsIndex extends React.Component {

  constructor(props) {
    super(props);
    this.accept = this.accept.bind(this);
    this.deny = this.deny.bind(this);
    this._findUserInPending = this._findUserInPending.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllFriends();
  }

  handleClick(url) {
    this.props.router.push(url)
  }

  accept(e) {
    this.props.approveFriend(this._findUserInPending(e));
  }

  deny(e) {
    this.props.denyFriend(this._findUserInPending(e));
  }

  _findUserInPending(e) {
    let user;
    for (let i = 0; i < this.props.pending.length; i++){
      if (this.props.pending[i].username === e.currentTarget.value){
        user = this.props.pending[i];
      }
    }
    return user;
  }

  renderFriends() {
    if (this.props.friends && this.props.friends !== {}) {
      return (
        <section id="friends">
          <h3 className="friends-title">My Friends</h3>
          <ul className="friends-list frand">
            {this.props.friends.map( (f, i) => <li key={i}
            onClick={() => {this.handleClick(`friends/${f.id}`)}}>
              <i className="fa fa-user-o" aria-hidden="true"></i>
                &nbsp;{f.username}
              </li>
            )}
          </ul>
        </section>
      );
    }
    else {
      return (
        <h3>You have no friends haha lol</h3>
      );
    }
  }

  renderPending() {
    if (this.props.pending && this.props.pending != {}) {
      return (
        <section id="pending">
          <h3 className="friends-title">Pending Friend Requests</h3>
          <ul className="friends-list" id="x">
            {this.props.pending.map( (p, i) => <li key={i} className="pending-item">
              <i className="fa fa-user-o" aria-hidden="true"></i>
                &nbsp;<p>{p.username}</p>
              <button id="deny-friend"
                      value={p.username}
                      onClick={this.deny} >
                        <i className="fa fa-times" aria-hidden="true" ></i>
              </button>
              <button id="accept-friend"
                      value={p.username}
                      onClick={this.accept}>
                        <i className="fa fa-check" aria-hidden="true"></i>
              </button>
              </li>
            )}
          </ul>
        </section>
      );
    }
    else {
      return (
        <h3>You have no pending haha lol</h3>
      );
    }
  }

  renderRequesting() {
    if (this.props.requesting && this.props.requesting != {}) {
      return (
        <section id="requesting">
          <h3 className="friends-title">Sent Requests</h3>
          <ul className="friends-list">
            {this.props.requesting.map( (r, i) => <li key={i}>
              <i className="fa fa-user-o" aria-hidden="true"></i>
                &nbsp;{r.username}
              </li>
            )}
          </ul>
        </section>
      );
    }
    else {
      return (
        <h3>You have no requesting haha lol</h3>
      );
    }
  }



  render () {
    return (
      <aside id="friends-section">
        {this.renderFriends()}
        {this.renderPending()}
        {this.renderRequesting()}
      </aside>
    )
  }
}

export default withRouter(FriendsIndex);
