import { connect } from 'react-redux';
import { fetchAllExpenses } from '../../actions/expenses_actions';

import ExpensesIndex from './expenses_index';

const mapStateToProps = store => ({
  expenses: store.expenses
});

const mapDispatchToProps = dispatch => ({
  fetchAllExpenses: () => dispatch(fetchAllExpenses())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpensesIndex);
