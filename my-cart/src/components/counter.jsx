import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: ""
    },
    tags: ["tag1", "tag2"]
  };
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags</p>;
    return (
      <ul>
        {" "}
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <div>
          {this.state.tags.length === 0 && "Please create a new tag"}
          {this.renderTags()}
        </div>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
}

export default Counter;

// short cuts
// cc == generate basic class syntax
//imrc == import classed
