import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  hideForm(e) {
    e.preventDefault();
    $(".login-form").removeClass("show");
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    let user = this.state;
    if (this.state.username === "" && this.state.password === "" && e.currentTarget.value === "Guest Sign In"){
      user = {username: "guest", password: "password"}
    }
    this.props.login(user);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  showLoginForm(e) {
    e.preventDefault();
    $(".login-form").toggleClass("show");
  }

  printErrors() {
    return (
      <ul>
        {this.props.errors.map( (e, i) => <li key={i}>{e}</li>)}
      </ul>
    );
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  printErrors() {
    if (this.props.errors) {
      return (
        <ul id="signup-errors">
          {this.props.errors.map( (e, i) => <li key={i}>{e}</li>)}
        </ul>
      );
    }
  }

  render() {
    if (!this.props.currentUser) {
      return (
        <header>
          <nav className="main-nav">
            <Link to="/"><h2 className="logo">SPLITSMART</h2></Link>
            <nav>
              <button onClick={this.showLoginForm} id="login-button">Log In</button>
              <p>or</p>
              <Link to="/signup"><button id="signup-button">Sign Up</button></Link>
              <form className="login-form" onMouseLeave={this.hideForm}>
                {this.printErrors}
                <input type="text"
                       placeholder="Username"
                       onChange={this.update("username")} />
                <input type="password"
                       placeholder="Password"
                       onChange={this.update("password")} />
                     <input type="submit" onClick={this.handleLoginSubmit}
                            value="Sign in to SplitSmart"
                            id="login-submit" />
                          <input type="submit" onClick={this.handleLoginSubmit}
                            value="Guest Sign In"
                            id="guest-login-submit" />
                          {this.printErrors()}
              </form>
            </nav>
          </nav>
        </header>
      );
    }
    else {
      return (
        <header>
          <nav className="main-nav">
            <Link to="/"><h2 className="logo">SPLITSMART</h2></Link>
            <nav>
              <p>Welcome, &nbsp;{this.props.currentUser.username}</p>
              <button onClick={this.handleLogout} id="logout-button">Logout</button>
            </nav>
          </nav>
        </header>
      );
    }
  }
}

export default withRouter(Header);
