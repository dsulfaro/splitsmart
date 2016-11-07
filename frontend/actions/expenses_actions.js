export const FETCH_ALL_EXPENSES = "FETCH_ALL_EXPENSES";
export const RECEIVE_ALL_EXPENSES = "RECEIVE_ALL_EXPENSES";
export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";

export const fetchAllExpenses = expenses => ({
  type: FETCH_ALL_EXPENSES,
  expenses
});

export const receiveAllExpenses = expenses => ({
  type: RECEIVE_ALL_EXPENSES,
  expenses
});

export const fetchExpenses = id => ({
  type: FETCH_EXPENSES,
  id
});

export const receiveExpenses = expenses => ({
  type: RECEIVE_EXPENSES,
  expenses
});
