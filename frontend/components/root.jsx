import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import SignupFormContainer from './signup/signup_form_container';
import SplashContainer from './splash/splash_container';
import Dashboard from './dashboard/dashboard';
import ExpenseFriendContainer from './expenses/expense_friend_container';
import ExpensesIndexContainer from './expenses/expenses_index_container';
import { fetchAllFriends } from '../actions/friend_actions';
import { fetchExpenses, fetchSettled } from '../actions/expenses_actions';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
    this.fetchSingleFriend = this.fetchSingleFriend.bind(this);
  }

  _redirectIfLoggedIn(nextState, replace) {
    if (this.props.store.getState().session.currentUser) {
      replace("/dashboard");
    }
  }

  fetchSingleFriend(nextState) {
    this.props.store.dispatch(fetchExpenses(nextState.params.id));
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={ SplashContainer }
                        onEnter={this._redirectIfLoggedIn} />
            <Route path="/dashboard" component={ Dashboard }>
              <IndexRoute component={ ExpensesIndexContainer } />
              <Route path="/friends/:id" component={ExpenseFriendContainer}
                     onEnter={this.fetchSingleFriend}/>
            </Route>
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
