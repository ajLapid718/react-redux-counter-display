import React, { Component } from "react";
import { ValueCounterView } from "../views";
import { connect } from "react-redux";

import { incrementByOne, decrementByOne, incrementByAmount, decrementByAmount } from "../../store/utilities/counterValue";

/*

I want to keep my view layer as my view layer (ReactJS);

But...I still would like to have state management (Redux);

Therefore, I will incorporate Redux in order to keep track of (and modify) the number value;

If I am to use Redux, then I need to have this component connected to (subscription) the Redux store;

This gives me a heads-up that indicates we will use connect() in this smart container;

I will be about to read from (mapState) the Redux store and write to (mapDispatch) the Redux store;

*/

class ValueCounterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountToIncrementBy: 0,
      amountToDecrementBy: 0
    }
  }

  handleIncrementByOne = () => {
    this.props.incrementByOne();
  }

  handleDecrementByOne = () => {
    this.props.decrementByOne();
  }

  handleAmountChange = (event) => {
    this.setState({ [event.target.name]: Number(event.target.value) })
  }

  handleIncrementByAmount = () => {
    this.props.incrementByAmount(this.state.amountToIncrementBy);
  }

  handleDecrementByAmount = () => {
    this.props.decrementByAmount(this.state.amountToDecrementBy);
  }

  render() {
    return (
      <div>
      <ValueCounterView 
        counterValue={this.props.counterValue} 
        handleIncrementByOne={this.handleIncrementByOne} 
        handleDecrementByOne={this.handleDecrementByOne} 
        handleDecrementByAmount={this.handleDecrementByAmount}
        handleIncrementByAmount={this.handleIncrementByAmount}
        handleAmountChange={this.handleAmountChange}
      />
      </div>
    )
  }
}

/*

Down here, I will handle reading (mapState) and writing (mapDispatch) in regards to the Redux store;
More specifically, I want to be able to interact with that reducer function (valueCounterReducer) we wrote in the store;

*/

// This will generate, at this point, an object that has a key called "currentValue" and a value (for that key) which is state.counterValueRedcuer;
function mapState(state) {
  return {
    counterValue: state.counterValue
  }
}

function mapDispatch(dispatch) {
  return {
    incrementByOne: () => dispatch(incrementByOne()),
    decrementByOne: () => dispatch(decrementByOne()),
    incrementByAmount: (amount) => dispatch(incrementByAmount(amount)),
    decrementByAmount: (amount) => dispatch(decrementByAmount(amount))
  }
}

// We successfully establish a connection (subscription) to the Redux store from this particular component;
// Here, we will take the `this.props` object of the component and merge it with the object returned from mapState();
// `this.props` + { currentValue: state.counterValueReducer } + { incrementByOne: () => dispatch(incrementByOne()), decrementByOne: () => dispatch(decrementByOne()), incrementByAmount: (amount) => dispatch(incrementByAmount(amount)), decrementByAmount: (amount) => dispatch(decrementByAmount(amount))};
// The above "+" sign indicates a merging of one or more objects;
// Note: This is basically: `this.props` + mapState() + mapDispatch();
export default connect(mapState, mapDispatch)(ValueCounterContainer);