import { connect } from 'react-redux';
import ExpenseFriend from './expense_friend';
import { fetchExpenses, addExpense, deleteExpense, updateExpense } from '../../actions/expenses_actions';
import { selectExpenses } from '../../reducers/selectors';
import { hashHistory } from 'react-router';

const mapStateToProps = store => {

  return ({
    expenses: selectExpenses(store.expenses),
    currentUser: store.session.currentUser,
    friends: store.friends.friends,
    loading: store.loading
  });
};

const mapDispatchToProps = dispatch => ({
  fetchExpenses: id => dispatch(fetchExpenses(id)),
  addExpense: expense => dispatch(addExpense(expense)),
  deleteExpense: expense => dispatch(deleteExpense(expense)),
  updateExpense: id => dispatch(updateExpense(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseFriend);
