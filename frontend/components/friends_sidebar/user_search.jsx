import React from 'react'

class UserSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: ""}
    this.sendRequest = this.sendRequest.bind(this);
  }

  sendRequest(e) {
    let user;
    for (let i = 0; i < this.props.users.length; i++){
      if (this.props.users[i].username === e.currentTarget.id){
        user = this.props.users[i];
      }
    }
    this.props.requestFriend(user);
    this.setState({search: ""});
  }

  matchUsers() {
    if (this.props.users && this.props.users !== {}){
      return (
        this.props.users.map( (user, idx) => {
          if (user.username.includes(this.state.search) && this.state.search !== "") {
            return <li key={idx}
                      onClick={this.sendRequest}
                      className="searched-user"
                      id={user.username}>
                      <i className="fa fa-plus" aria-hidden="true"></i>
                      &nbsp;&nbsp;&nbsp;<p>{user.username}</p>
                    </li>
          }
        })
      );
    }
  }

  update() {
    return e => this.setState({
      search: e.currentTarget.value
    });
  }

  render () {
    return (
      <section id="user-search">
        <h4 id="find-friends">Find Friends</h4>
        <input type="text"
          id="user-search-input"
          value={this.state.search}
          onChange={this.update()}
          placeholder="...here" />
        <section id="filtered-users">
          <ul id="filtered-users-list">
            {this.matchUsers()}
          </ul>
        </section>
      </section>
    )
  }
}

export default UserSearch;
