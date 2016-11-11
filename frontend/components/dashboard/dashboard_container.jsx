import { connect } from 'react-redux';
import Dashboard from './dashboard';

const mapStateToProps = store => ({
  loading: store.loading
});

export default connect(mapStateToProps)(Dashboard)
