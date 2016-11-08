import React from 'react';

class Comments extends React.Component {

  constructor() {
    super();
  }

  render () {
    if (this.props.comments){
      debugger
      return (
        <ul className="comments-list">
          {this.props.comments.map( (c, i) => {
            return <li key={i}>{c.body}</li>
          })}
        </ul>
      )
    }
    else {
      return (<div></div>)
    }
  }
}

export default Comments;
