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
                   settled: false,
                   balance: 0,
                   errors: ""};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.settleUp = this.settleUp.bind(this);
    this.calcBalance = this.calcBalance.bind(this);
    this.commentsToggle = this.commentsToggle.bind(this);
    this.validate = this.validate.bind(this);
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
    $('#balance-pane').css("display", "block");
  }

  calcBalance() {

    /////// TODOOOOOOOOOOO ///////////
    let total = 0;
    this.props.expenses.forEach( e => {
      if (e.settled === false) {
        if (e.ower === this.props.currentUser.username){
          total += e.amount;
        }
        else {
          total -= e.amount;
        }
      }
    });
    return total;
  }

  componentDidUpdate() {
    let bal = this.calcBalance();
    let message = "";
    if (bal < 0){
      bal *= -1;
      bal = this.formatAmount(bal)
      message = `You are owed $${bal}`
      $("#balance").text(message);
      $("#balance").css("color", "#5bc5a7");
    }
    else if (bal === 0) {
      $("#balance").text("All settled up!");
    }
    else {
     message = `You owe $${this.formatAmount(bal)}`
     $("#balance").text(message);
     $("#balance").css("color", "#ff652f");
    }
  }

  handleSubmit(e) {
    let errs = this.validate();
    if (errs[0]){
      for (let i = 0; i < errs.length; i++) {
        $('.errors-div').append(`<li>${errs[i]}</li>`);
      }
    }
    else {
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
  }

  validate() {
    let errs = [];
    if (this.state.description === ""){
      errs.push("description cannot be blank. ")
    }
    if (this.state.amount === "") {
      errs.push("amount cannot be blank. ");
    }
    if (this.state.total === "") {
      errs.push("total cannot be blank. ");
    }
    if (parseFloat(this.state.amount) > parseFloat(this.state.total)) {
      errs.push("amount cannot be greater than total. ");
    }
    if (isNaN(parseFloat(this.state.amount)) || isNaN(parseFloat(this.state.total))){
      errs.push("monetary input fields must be numerical")
    }
    return errs;
  }

  settleUp() {
    this.props.expenses.forEach( e => {
      if (e.settled === false && e.ower === this.props.currentUser.username) {
        this.props.updateExpense(e.id)
      }
    });
  }

  commentsToggle(e) {
    $(e.currentTarget).next().toggleClass("show-comments");
  }

  modal() {
    return (
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
            <a id="add-expense-cancel" onClick={this.closeModal}>Cancel</a>
            <button id="add-expense-submit">Submit</button>
          </div>
          <ul className="errors-div"></ul>
        </form>
      </Modal>
    )
  }

  render () {
    if (this.props.currentUser && this.props.expenses[0]){
      return (
        <section className="expenses-main">
          <nav className="expenses-nav">
            <h2 className="expenses-feed">{this.findFriend(this.props.params.id).username}</h2>
            <div>
              <button
                className="settle-up"
                onClick={this.settleUp}>Settle Up</button>
              <button
                className="add-bill"
                onClick={this.openModal}>Add Bill</button>
            </div>
          </nav>
          <ul className="expenses-list">
            {this.props.expenses.map( (e, i) => {
              if (e.settled === false){
                return <ExpenseIndexItem
                  expense={e}
                  key={i}
                  currentUser={this.props.currentUser}
                  deleteExpense={this.props.deleteExpense}
                  onCommentsToggle={(e) => this.commentsToggle(e)}
                  comments={ e.comments } />;
              }
            } ) }
          </ul>
          {this.modal()}
        </section>
      );
    }
    else {
      return (
        <section className="expenses-main">
          <nav className="expenses-nav">
            <h2 className="expenses-feed">{this.findFriend(this.props.params.id).username}</h2>
            <div>
              <button
                className="settle-up"
                onClick={this.settleUp}>Settle Up</button>
              <button
                className="add-bill"
                onClick={this.openModal}>Add Bill</button>
            </div>
          </nav>

          {this.modal()}

        </section>
      );
    }
  }
}

export default ExpenseFriend;
