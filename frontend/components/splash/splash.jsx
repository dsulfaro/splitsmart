import React from 'react';

class Splash extends React.Component {

  constructor(props) {
    super(props);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.handleGetStarted = this.handleGetStarted.bind(this);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"});
    this.props.router.push("/dashboard");
  }

  handleGetStarted(e) {
    e.preventDefault();
    this.props.router.push("/signup");
  }

  render () {
    return (
      <section className="splash-section">
        <h1 className="tagline">Split expenses with friends.</h1>
        <h3 className="app-description"><b className="b">Share</b> bills and IOU's. <b className="b">Make sure</b> everyone gets paid back.</h3>
        <button onClick={this.handleGetStarted}>Get started now</button>
        <button onClick={this.handleDemoLogin}>Demo Login</button>
      </section>
    );
  }
}

export default Splash;
