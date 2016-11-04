import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING //
import { fetchAllFriendsUtil } from './util/friends_api_util';
import { receiveAllFriends, fetchAllFriends } from './actions/friend_actions';
import { selectAllFriends } from './reducers/selectors';
window.fetchAllFriendsUtil = fetchAllFriendsUtil;
window.receiveAllFriends = receiveAllFriends;
window.fetchAllFriends = fetchAllFriends;
window.selectAllFriends = selectAllFriends;


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = {session: {currentUser: window.currentUser}};
      store = configureStore(preloadedState);
    }
    else {
      store = configureStore();
    }

    const root = document.getElementById('root');
    window.store = store;
    ReactDOM.render(<Root store={store} />, root);
});
