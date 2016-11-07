import React from 'react'

const ExpenseIndexItem = ({expense}) => (
  <li className="expense-index-item">

    <div className="expense-info">
      <div className="expense-date">
        <h3 className="expense-date-month">{expense.month}</h3>
        <h3 className="expense-date-day">{expense.day}</h3>
      </div>
      <h3 className="expense-description">{expense.description}</h3>
    </div>

    <div className="expense-payments">
      <div className="paid">
        <h3 className="lender">{expense.lender === currentUser.username ? "you" : expense.lender} paid</h3>
        <h3 className="total">${expense.total}.00</h3>
      </div>
      <div className="due">
        <h3 className="ower">{expense.ower === currentUser.username ? "you owe" : expense.ower + " owes"}</h3>
        <h3 className="amount">${String(expense.amount).includes('.') ? expense.amount : expense.amount + ".00"}</h3>
      </div>
    </div>
  </li>
)

export default ExpenseIndexItem;
