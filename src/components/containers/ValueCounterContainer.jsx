import React, { Component } from "react";
import { ValueCounterView } from "../views";
/*

I want to keep my view layer as my view layer (ReactJS);

But...I still would like to have state management (Redux);

Therefore, I will incorporate Redux in order to keep track of (and modify) the number value;

*/

class ValueCounterContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return <ValueCounterView />
  }
}

export default ValueCounterContainer;