import React from 'react';

const ExpenseIndexItem = ({expense, currentUser}) => {

  const formatAmount = amount => {
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
  };

  return(

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
          <h3 className="total">${formatAmount(expense.total)}</h3>
        </div>
        <div className="due">
          <h3 className="ower">{expense.ower === currentUser.username ? "you owe" : expense.ower + " owes"}</h3>
          <h3 className="amount">${formatAmount(expense.amount)}</h3>
        </div>
      </div>
    </li>
  );
};

export default ExpenseIndexItem;
