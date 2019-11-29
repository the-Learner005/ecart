import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: ""
    },
    tags: ["tag1", "tag2"]
  };
  render() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        {/* How to loop items */}
        <ul>
          {this.state.tags.map(tag => (
            <li>{tag}</li>
          ))}
        </ul>
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
