import { RECEIVE_ALL_EXPENSES,
         RECEIVE_EXPENSES,
         RECEIVE_NEW_EXPENSE,
         GET_DELETED } from '../actions/expenses_actions';
import merge from 'lodash/merge';
import { values } from 'lodash';


const ExpenseReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_EXPENSES:
      return values(action.expenses);
    case RECEIVE_EXPENSES:
      return values(action.expenses);
    case RECEIVE_NEW_EXPENSE:
      newState = merge({}, state, {[action.expense.id]: action.expense});
      return newState;
    case GET_DELETED:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default ExpenseReducer;
