import { connect } from 'react-redux';
import ExpenseFriend from './expense_friend';
import { fetchExpenses, addExpense, deleteExpense } from '../../actions/expenses_actions';
import { selectExpenses } from '../../reducers/selectors';
import { hashHistory } from 'react-router';

const mapStateToProps = store => {

  return ({
    expenses: selectExpenses(store.expenses),
    currentUser: store.session.currentUser,
    friends: store.friends.friends
  });
};

const mapDispatchToProps = dispatch => ({
  fetchExpenses: id => dispatch(fetchExpenses(id)),
  addExpense: expense => dispatch(addExpense(expense)),
  deleteExpense: expense => dispatch(deleteExpense(expense))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseFriend);
