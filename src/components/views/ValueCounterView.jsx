import React from "react";

function ValueCounterView(props) {
  return (
    <div>
      <h1>{props.counterValue}</h1>
      <button onClick={props.handleIncrementByOne}>+1</button>
      <button onClick={props.handleDecrementByOne}>-1</button>
    </div>
  )
}

export default ValueCounterView;