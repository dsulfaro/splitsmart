import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SignupFormContainer from './signup/signup_form_container';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _redirectIfLoggedIn() {
    if (this.props.store.getState().session.currentUser) {
      this.props.router.replace("/");
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <Route path="/signup" component={SignupFormContainer} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
