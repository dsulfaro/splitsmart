import React from 'react'
import ExpenseIndexItem from './expense_index_item'

class ExpensesIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllExpenses();
  }

  render () {
    if (this.props.expenses[0]){
      return (
        <section className="expenses-main">
          <nav className="expenses-nav">
            <h2 className="expenses-feed">Expenses Feed</h2>
            <button className="add-bill">Add Bill</button>
          </nav>
          <ul className="expenses-list">
            {this.props.expenses.map( (e, i) => {
              return <ExpenseIndexItem expense={e} key={i} />
            })}
          </ul>
        </section>
      )
    }
    else {
      return (<h3>All Settled Up</h3>);
    }
  }
}

export default ExpensesIndex;