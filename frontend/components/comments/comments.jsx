import React from 'react';

class Comments extends React.Component {

  constructor() {
    super();
    this.state = {comment: ""}
    this.submitComment = this.submitComment.bind(this);
    this.isEnter = this.isEnter.bind(this);
  }

  submitComment(e) {
    let comment = {};
    if (e.currentTarget) {
      comment = {body: $(e.currentTarget).next().val(),
        author_id: this.props.currentUser.id,
        expense_id: this.props.expenseId}
        $(e.currentTarget).next().val("");
    }
    else {
      comment = {body: e.next().val(),
                author_id: this.props.currentUser.id,
                expense_id: this.props.expenseId}
      e.next().val("");
    }
    this.props.addComment(comment);
  }

  isEnter(e) {
    if (e.keyCode == 13) {
      this.submitComment($(e.currentTarget).prev());
    }
    else {
      return e => this.setState({comment: e.target.value});
    }
  }

  render () {
    if (this.props.comments && this.props.comments[0]){
      return (
        <div>
          <h3 className="comments-title">Comments:</h3>
          <ul className="comments-list">
            {this.props.comments.map( (c, i) => {
              return <li key={i} className="comment">
                <h4><span id="bo">{c.author}</span>: {c.body}</h4>
                <h4>{c.time}</h4>
              </li>
            })}
            <div className="add-comment-div">
              <button className="add-comment-button"
                      onClick={ (e) => this.submitComment(e)}>Add Comment
              </button>
              <input type="text"
                     className="add-comment-input"
                     onKeyDown={this.isEnter} />
            </div>
          </ul>
        </div>
      )
    }
    else {
      return (
        <div className="add-comment-div">
          <button className="add-comment-button"
                  onClick={ (e) => this.submitComment(e)}>Add Comment
          </button>
          <input type="text"
                 className="add-comment-input"
                 onKeyDown={this.isEnter} />
        </div>
      )
    }
  }
}

export default Comments;
