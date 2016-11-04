import React from 'react'

class UserSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {search: ""}
  }

  matchUsers() {
    if (this.props.users && this.props.users !== {}){
      return (
        this.props.users.map( (user, idx) => {
          if (user.username.includes(this.state.search) && this.state.search !== "") {
            return <li key={idx}>{user.username}</li>
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
          onChange={this.update()} />
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
