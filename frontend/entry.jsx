import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING //
import { requestFriendship, approveFriendship, denyFriendship } from './util/friends_api_util';
window.requestFriendship = requestFriendship;
window.approveFriendship = approveFriendship;
window.denyFriendship = denyFriendship;


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
