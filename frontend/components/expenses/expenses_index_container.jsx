import { connect } from 'react-redux';
import { fetchAllExpenses, deleteExpense } from '../../actions/expenses_actions';
import { selectExpenses } from '../../reducers/selectors';
import ExpensesIndex from './expenses_index';

const mapStateToProps = store => ({
  expenses: selectExpenses(store.expenses),
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAllExpenses: () => dispatch(fetchAllExpenses()),
  deleteExpense: expense => dispatch(deleteExpense(expense))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesIndex);
