import React from 'react'
import { withRouter } from 'react-router';

class Settled extends React.Component {

  constructor() {
    super();
  }

  formatAmount(amount) {
    if (String(amount).includes('.')){
      if (String(amount)[String(amount).length - 2] === '.'){
        return amount + "0";
      }
      else {
        return amount;
      }
    }
    else {
      return amount + ".00";
    }
  }

  render () {
    if (this.props.expenses && this.props.expenses[0]){
      return (
        <section className="transaction-history">
          <h3 className="transaction-history-title">Transaction History</h3>
          <ul className="transaction-history-list">
            {this.props.expenses.map( (e, i) => {
              if (e.settled === true) {
                if (e.lender === this.props.currentUser){
                  return (
                    <li key={i}>
                      <p>{e.ower} paid you:</p>
                      <p className="got-paid">${this.formatAmount(e.amount)}</p>
                      <p>for {e.description}</p>
                    </li>
                  )
                }
                else {
                  return (
                    <li key={i}>
                      <p>You paid {e.lender}:</p>
                      <p className="you-paid">${this.formatAmount(e.amount)}</p>
                      <p>for {e.description}</p>
                    </li>
                  )
                }
              }
            })}
          </ul>
        </section>
      )
    }
    else {
      return (
        <section className="transaction-history">
          <h3 className="transaction-history-title">Transaction History</h3>
        </section>
      )
    }
  }
}

export default withRouter(Settled);
