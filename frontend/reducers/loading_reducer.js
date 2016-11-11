import { FETCH_ALL_EXPENSES,
         RECEIVE_ALL_EXPENSES,
         FETCH_EXPENSES,
         RECEIVE_EXPENSES } from '../actions/expenses_actions';

const LoadingReducer = (state = false, action) => {
  switch (action.type) {
    case FETCH_ALL_EXPENSES:
    case FETCH_EXPENSES:
      return true;
    case RECEIVE_ALL_EXPENSES:
    case RECEIVE_EXPENSES:
      return false;
    default:
      return state;
  }
}

export default LoadingReducer;
