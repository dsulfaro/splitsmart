import React from 'react';
import Modal from 'react-modal';
import CommentsContainer from '../comments/comments_container';

class ExpenseIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isDeleteOpen: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.openDelete = this.openDelete.bind(this);
    this.closeDelete = this.closeDelete.bind(this);
    this.truncateDescription = this.truncateDescription.bind(this);
  }

  openDelete() {
    this.setState({ isDeleteOpen: true});
  }

  closeDelete() {
    this.setState({ isDeleteOpen: false });
  }

  componentWillMount() {
    Modal.setAppElement('body');
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

  truncateDescription() {
    if (this.props.expense.description.length > 24){
      return this.props.expense.description.slice(0, 24) + "...";
    }
    else {
      return this.props.expense.description
    }
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteExpense(this.props.expense.id);
    this.closeDelete();
  }

  render() {
    return(
      <div>
        <li className="expense-index-item" onClick={this.props.onCommentsToggle}>

          <div className="expense-info">
            <div className="expense-date">
              <h3 className="expense-date-month">{this.props.expense.month}</h3>
              <h3 className="expense-date-day">{this.props.expense.day}</h3>
            </div>
            <h3 className="expense-description">{this.truncateDescription()}</h3>
          </div>

          <div className="expense-payments">
            <div className="paid">
              <h3 className="lender">{this.props.expense.lender === this.props.currentUser.username ? "you" : this.props.expense.lender} paid</h3>
              <h3 className="total">${this.formatAmount(this.props.expense.total)}</h3>
            </div>
            <div className="due">
              <h3 className="ower">{this.props.expense.ower === this.props.currentUser.username ? "you owe" : this.props.expense.ower + " owes"}</h3>
              <h3 className="amount">${this.formatAmount(this.props.expense.amount)}</h3>
            </div>
            <button className="delete-expense" onClick={this.openDelete}>X</button>
            <br />
            <Modal
              isOpen={this.state.isDeleteOpen}
              onRequestClose={this.closeDelete}
              className="delete-modal">
              <header>
                <h2>Delete this expense?</h2>
              </header>
              <div className="delete-choices">
                <button className="y" onClick={this.handleDelete}>Yes</button>
                <button className="y" onClick={this.closeDelete}>No</button>
              </div>
            </Modal>

            </div>

          </li>
          <section className="expense-index-item-comments">
            <CommentsContainer comments={this.props.comments}
                               expenseId={this.props.expense.id}/>
          </section>
        </div>
    );
  }
}

export default ExpenseIndexItem;
