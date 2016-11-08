import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import CommentsContainer from '../comments/comments_container';

class ExpensesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllExpenses();
  }

  render () {
    if (this.props.currentUser && this.props.expenses[0]){
      return (
        <section className="expenses-main">
          <nav className="expenses-nav">
            <h2 className="expenses-feed">Expenses Feed</h2>
          </nav>
          <ul className="expenses-list">
            {this.props.expenses.map( (e, i) => {
              return <ExpenseIndexItem
                        expense={e}
                        key={i}
                        currentUser={this.props.currentUser}
                        deleteExpense={this.props.deleteExpense}
                        comments={e.comments} />;
            })}
          </ul>
        </section>
      );
    }
    else {
      return (<h3>All Settled Up</h3>);
    }
  }
}

export default ExpensesIndex;
