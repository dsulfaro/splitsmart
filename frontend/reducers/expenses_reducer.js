import { RECEIVE_ALL_EXPENSES,
         RECEIVE_EXPENSES,
         RECEIVE_NEW_EXPENSE,
         GET_DELETED,
         RECEIVE_SETTLED,
         RECEIVE_UPDATE } from '../actions/expenses_actions';
import { RECEIVE_COMMENT } from '../actions/comment_actions';
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
      newState = values(merge({}, state));
      for (let i = 0; i < newState.length; i++){
        if (newState[i].id === action.expense.id){
          newState = newState.slice(0, i).concat(newState.slice(i + 1));
        }
      }
      return newState;
    case RECEIVE_COMMENT:
      newState = values(merge({}, state));
      for (let i = 0; i < newState.length; ++i) {
        if (newState[i].id === action.comment.expense_id) {
          newState[i].comments.push(action.comment);
          break;
        }
      }
      return newState;
    case RECEIVE_UPDATE:
      newState = values(merge({}, state));
      for (let i = 0; i < newState.length; ++i) {
        if (newState[i].id === action.expense.id) {
          newState[i].settled = true;
        }
      }
      return newState;
    default:
      return state;
  }
};

export default ExpenseReducer;
