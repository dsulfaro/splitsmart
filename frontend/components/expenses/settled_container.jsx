import { connect } from 'react-redux';
import Settled from './settled';
import { fetchSettled } from '../../actions/expenses_actions';
import { selectExpenses } from '../../reducers/selectors';

const mapStateToProps = store => ({
  expenses: selectExpenses(store.expenses),
  currentUser: store.session.currentUser.username
});

const mapDispatchToProps = dispatch => ({
  fetchSettled: friend_id => dispatch(fetchSettled(friend_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settled);
