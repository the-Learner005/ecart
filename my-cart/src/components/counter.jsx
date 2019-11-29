import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0
  };
  handleIncrement() {
    console.log("Hello Incremnt");
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getbadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : this.state.count;
  }
  getbadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

// short cuts
// cc == generate basic class syntax
//imrc == import classed
