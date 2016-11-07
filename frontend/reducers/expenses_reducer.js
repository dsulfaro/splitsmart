import { RECEIVE_ALL_EXPENSES,
         RECEIVE_EXPENSES } from '../actions/expenses_actions';

const ExpenseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EXPENSES:
      return action.expenses.expenses
    case RECEIVE_EXPENSES:
      return action.expenses.expenses
    default:
      return state;
  }
}

export default ExpenseReducer;
