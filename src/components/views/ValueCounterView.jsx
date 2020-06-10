import React from "react";

function ValueCounterView(props) {
  return (
    <div>
      <h1>{props.counterValue}</h1>
      <button onClick={props.handleIncrementByOne}>+1</button>
      <button onClick={props.handleDecrementByOne}>-1</button>
      <label>Add By Any Amount:</label>
      <input type="text" name="amountToIncrementBy" value={props.amountToIncrementBy} onChange={props.handleAmountChange}></input>
      <button onClick={props.handleIncrementByAmount}>Increment By Amount</button>
      <br></br>
      <label>Decrease By Any Amount:</label>
      <input type="text" name="amountToDecrementBy" value={props.amountToDecrementBy} onChange={props.handleAmountChange}></input>
      <button onClick={props.handleDecrementByAmount}>Decrement By Amount</button>
    </div>
  )
}

export default ValueCounterView;