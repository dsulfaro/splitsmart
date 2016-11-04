import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import SignupFormContainer from './signup/signup_form_container';
import SplashContainer from './splash/splash_container';
import DashboardContainer from './dashboard/dashboard_container';
import { fetchAllFriends } from '../actions/friend_actions';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace("/dashboard");
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={ SplashContainer }
                        onEnter={this._redirectIfLoggedIn} />
            <Route path = "/dashboard"
                   component={ DashboardContainer } />
            <Route path="/signup"
                   component={SignupFormContainer}
                   onEnter={this._redirectIfLoggedIn} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
