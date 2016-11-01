import React from 'react';

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

  handleGuestLogin(e) {
    e.preventDefault();
    console.log("Guest Login");
  }

  render () {
    return (
      <div className="signup-form">
        <form>
          <input type="text"
                 placeholder="Username"
                 onChange={this.update("username")} />
          <input type="password"
                 placeholder="Password"
                 onChange={this.update("password")} />
          <input type="submit"
                 value="Log in to SplitSmart"
                 onClick={this.handleSignupSubmit} />
        </form>
      </div>
    );
  }
}

export default SignupForm;
