import { connect } from 'react-redux';
import ExpenseFriend from './expense_friend';
import { fetchExpenses } from '../../actions/expenses_actions';

const mapStateToProps = store => ({
  expenses: store.expenses,
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchExpenses: id => dispatch(fetchExpenses(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpenseFriend);
