import { connect } from 'react-redux';
import UserSearch from './user_search';

const mapStateToProps = store => ({
  users: store.friends.users
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSearch);
