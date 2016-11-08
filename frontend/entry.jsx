import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// FOR TESTING //
import { addExpense } from './actions/expenses_actions';
window.addExpense = addExpense;


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
