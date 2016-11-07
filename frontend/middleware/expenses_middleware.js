import {
  fetchAllUnsettled,
  fetchUnsettled
} from '../util/expenses_api_util';

import {
  FETCH_ALL_EXPENSES,
  receiveAllExpenses,
  FETCH_EXPENSES,
  receiveExpenses
} from '../actions/expenses_actions';

export default ({ getState, dispatch }) => next => action => {

  const fetchAllExpensesSuccess = expenses => dispatch(receiveAllExpenses(expenses));
  const fetchExpensesSuccess = expenses => dispatch(receiveExpenses(expenses));
  const error = err => console.log(`error-in-middleware: ${err}`)

  switch (action.type) {
    case FETCH_ALL_EXPENSES:
      fetchAllUnsettled(fetchAllExpensesSuccess, error);
      return next(action);
    case FETCH_EXPENSES:
      fetchUnsettled(fetchExpensesSuccess, parseInt(action.id));
      return next(action);
    default:
      return next(action);
  }
}
