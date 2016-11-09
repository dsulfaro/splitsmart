import {
  fetchAllUnsettled,
  fetchUnsettled,
  addExpenseUtil,
  deleteExpenseUtil
} from '../util/expenses_api_util';

import {
  addCommentUtil
} from '../util/comments_api_util';

import {
  ADD_COMMENT,
  addComment,
  receiveComment
} from '../actions/comment_actions';

import {
  FETCH_ALL_EXPENSES,
  receiveAllExpenses,
  FETCH_EXPENSES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  GET_DELETED,
  receiveExpenses,
  addExpense,
  receiveNewExpense,
  deleteExpense,
  getDeleted
} from '../actions/expenses_actions';

export default ({ getState, dispatch }) => next => action => {

  const fetchAllExpensesSuccess = expenses => dispatch(receiveAllExpenses(expenses));
  const fetchExpensesSuccess = expenses => dispatch(receiveExpenses(expenses));
  const addExpenseSuccess = expense => dispatch(receiveNewExpense(expense));
  const deleteExpenseSuccess = expense => dispatch(getDeleted(expense));
  const addCommentSuccess = comment => dispatch(receiveComment(comment));
  const error = err => console.log(`error-in-middleware: ${err}`);

  switch (action.type) {
    case FETCH_ALL_EXPENSES:
      fetchAllUnsettled(fetchAllExpensesSuccess, error);
      return next(action);
    case FETCH_EXPENSES:
      fetchUnsettled(fetchExpensesSuccess, parseInt(action.id));
      return next(action);
    case ADD_EXPENSE:
      addExpenseUtil(addExpenseSuccess, action.expense, error);
      return next(action);
    case DELETE_EXPENSE:
      deleteExpenseUtil(deleteExpenseSuccess, action.id, error);
      return next(action);
    case ADD_COMMENT:
      addCommentUtil(addCommentSuccess, action.comment, error)
      return next(action);
    default:
      return next(action);
  }
};
