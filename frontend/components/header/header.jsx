import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidUpdate() {
    if (this.props.loggedIn){
      this.props.router.push("/");
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    const user = this.state;
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

  render() {
    if (!this.props.currentUser) {
      return (
        <header>
          <nav className="main-nav">
            <Link to="/"><h2 className="logo">S  p  l  i  t  S  m  a  r  t</h2></Link>
            <nav>
              <button onClick={this.showLoginForm} id="login-button">Log In</button>
              <Link to="/signup"><button id="signup-button">Sign Up</button></Link>
              <form className="login-form">
                {this.printErrors}
                <input type="text"
                       placeholder="Username"
                       onChange={this.update("username")} />
                <input type="password"
                       placeholder="Password"
                       onChange={this.update("password")} />
                     <input type="submit" onClick={this.handleLoginSubmit} value="Sign in to SplitSmart" id="login-submit"></input>
                     <input type="submit" onClick={this.handleGuestLogin} value="Guest Sign In" id="guest-login-submit"></input>
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
            <Link to="/"><h2 className="logo">S  p  l  i  t  S  m  a  r  t</h2></Link>
            <nav>
              <button onClick={this.handleLogout} id="logout-button">Logout</button>
            </nav>
          </nav>
        </header>
      );
    }
  }
}

export default Header;
