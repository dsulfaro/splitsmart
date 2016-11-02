import React from 'react';
import {withRouter} from 'react-router';

class SignupForm extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
  }

  handleSignupSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup(user);
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  printErrors() {
    return (
      <ul>
        {this.props.errors.map( (e, i) => <li key={i}>{e}</li>)}
      </ul>
    );
  }

  render () {
    return (
      <div className="signup-form">
        <h2>Welcome to SplitSmart!</h2>
        <form>
          <input type="text"
                 placeholder="Username"
                 onChange={this.update("username")}
                 id="signup-form-username"/>
          <input type="password"
                 placeholder="Password"
                 onChange={this.update("password")}
                 id="signup-form-password" />
          <input type="submit"
                 value="Sign in to SplitSmart"
                 onClick={this.handleSignupSubmit}
                 id="signup-form-submit"/>
               {this.printErrors}
        </form>
      </div>
    );
  }
}

export default SignupForm;
