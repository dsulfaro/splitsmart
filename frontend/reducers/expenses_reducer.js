import { RECEIVE_ALL_EXPENSES,
         RECEIVE_EXPENSES,
         RECEIVE_NEW_EXPENSE,
         GET_DELETED } from '../actions/expenses_actions';
import merge from 'lodash/merge';

const ExpenseReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_EXPENSES:
      return action.expenses.expenses;
    case RECEIVE_EXPENSES:
      return action.expenses.expenses;
    case RECEIVE_NEW_EXPENSE:
      let bill = action.expense.expense;
      newState = merge({}, state, {[action.expense.id]: action.expense});
      return newState;
    case GET_DELETED:
      newState = state.slice(0);
      let idx = 0;
      for (let i = 0; i < newState.length; ++i) {
        if (newState[i].id === action.expense.id){
          idx = i;
          break;
        }
      }
      let newNewState = newState.slice(0, idx).concat(newState.slice(idx + 1));
      return newNewState;
    default:
      return state;
  }
};

export default ExpenseReducer;
