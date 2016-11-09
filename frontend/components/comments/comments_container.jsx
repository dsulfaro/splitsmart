import { connect } from 'react-redux';
import { fetchComments, addComment } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = store => ({
  currentUser: store.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  addComment: comment => dispatch(addComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Comments);
