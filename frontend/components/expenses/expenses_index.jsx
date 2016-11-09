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

  commentsToggle(e) {
    $(e.currentTarget).next().toggleClass("show-comments");
  }

  renderNav() {
    return (
      <nav className="expenses-nav">
        <h2 className="expenses-feed">Your Expenses</h2>
      </nav>
    )
  }

  render () {
    if (this.props.currentUser && this.props.expenses[0]){
      return (
        <section className="expenses-main">
          {this.renderNav()}
          <ul className="expenses-list">
            {this.props.expenses.map( (e, i) => {
              return <ExpenseIndexItem
                        expense={e}
                        key={i}
                        currentUser={this.props.currentUser}
                        deleteExpense={this.props.deleteExpense}
                        comments={e.comments}
                        onCommentsToggle={(e) => this.commentsToggle(e)}
                        onDash={true} />;
            })}
          </ul>
        </section>
      );
    }
    else {
      return (
        <section className="expenses-main">
          {this.renderNav()}
        </section>
      )
    }
  }
}

export default ExpensesIndex;
