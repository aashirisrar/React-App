import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onIncrement, onReset, onDelete, counters } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
        <button onClick={onReset} className="btn btn-sm btn-primary m-2">
          Reset
        </button>
      </div>
    );
  }
}

export default Counters;
