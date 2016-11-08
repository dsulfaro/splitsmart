import React from 'react';
import ExpenseIndexItem from './expense_index_item';
import Modal from 'react-modal';

class ExpenseFriend extends React.Component {

  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false,
                   amount: "",
                   total: "",
                   lender_id: "",
                   ower_id: "",
                   description: "",
                   settled: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  findFriend(id) {
    if (this.props.friends) {
      for (let i = 0; i < this.props.friends.length; ++i) {
        if (this.props.friends[i].id === parseInt(id)) {
          return this.props.friends[i];
        }
      }
    }
    return "Error loading friend name";
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.refs.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleSubmit(e) {
    e.preventDefault();
    let bill = {lender_id: this.props.currentUser.id,
                ower_id: parseInt(this.props.params.id),
                amount: parseFloat(this.state.amount),
                total: parseFloat(this.state.total),
                description: this.state.description,
                settled: false};
    this.props.addExpense(bill);
    this.closeModal();
  }

  render () {
    if (this.props.currentUser && this.props.expenses[0]){
      return (
        <section className="expenses-main">
          <nav className="expenses-nav">
            <h2 className="expenses-feed">{this.findFriend(this.props.params.id).username}</h2>
            <button className="add-bill"
                    onClick={this.openModal}>Add Bill</button>
          </nav>
          <ul className="expenses-list">
            {this.props.expenses.map( (e, i) => {
              return <ExpenseIndexItem expense={e}
                key={i}
                currentUser={this.props.currentUser} />;
            })}
          </ul>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel={"Example Modal"}
            className="add-expense-modal">

            <header className="modal-header">
              <h2>Add a bill</h2>
              <button onClick={this.closeModal}>X</button>
            </header>
            <form className="add-expense-form" onSubmit={this.handleSubmit}>
              <h3 id="between">Between you and {this.findFriend(this.props.params.id).username}:</h3>
              <input type="text"
                     placeholder="Enter a description"
                     id="add-bill-form-desc"
                     onChange={this.update("description")} />
              <div id="text-inputs">
                I paid: $
                <input type="text"
                       placeholder="0.00"
                       onChange={this.update("total")} />
                     {this.findFriend(this.props.params.id).username} owes: $
                <input type="text"
                       placeholder="0.00"
                       onChange={this.update("amount")} />
              </div>
              <br />
              <div id="form-buttons">
                <button id="add-expense-cancel" onClick={this.closeModal}>Cancel</button>
                <button id="add-expense-submit">Submit</button>
              </div>
            </form>

          </Modal>

        </section>
      );
    }
    else {
      return (<h3>All Settled Up</h3>);
    }
  }
}

export default ExpenseFriend;
