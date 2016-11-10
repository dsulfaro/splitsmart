export const FETCH_ALL_EXPENSES = "FETCH_ALL_EXPENSES";
export const RECEIVE_ALL_EXPENSES = "RECEIVE_ALL_EXPENSES";
export const FETCH_EXPENSES = "FETCH_EXPENSES";
export const RECEIVE_EXPENSES = "RECEIVE_EXPENSES";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const RECEIVE_NEW_EXPENSE = "RECEIVE_NEW_EXPENSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";
export const GET_DELETED = "GET_DELETED";
export const FETCH_SETTLED = "FETCH_SETTLED";
export const RECEIVE_SETTLED = "RECEIVE_SETTLED";
export const UPDATE_EXPENSE = "UPDATE_EXPENSE";
export const RECEIVE_UPDATE = "RECEIVE_UPDATE";

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

export const addExpense = expense => ({
  type: ADD_EXPENSE,
  expense
});

export const receiveNewExpense = expense => ({
  type: RECEIVE_NEW_EXPENSE,
  expense
});

export const deleteExpense = id => ({
  type: DELETE_EXPENSE,
  id
});

export const getDeleted = expense => ({
  type: GET_DELETED,
  expense
});

export const fetchSettled = friend_id => ({
  type: FETCH_SETTLED,
  friend_id
});

export const receiveSettled = settled => ({
  type: RECEIVE_SETTLED,
  settled
});

export const updateExpense = id => ({
  type: UPDATE_EXPENSE,
  id
});

export const receiveUpdate = expense => ({
  type: RECEIVE_UPDATE,
  expense
});
