import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comment_actions';
import Comments from './comments';

const mapStateToProps = store => ({
  comments: store.comments
});

const mapDispatchToProps = dispatch => ({

})

export default connect(null)(Comments);
