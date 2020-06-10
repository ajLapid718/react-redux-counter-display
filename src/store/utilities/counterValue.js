// ACTION TYPES;
const INCREMENT_BY_ONE = "INCREMENT_BY_ONE";
const DECREMENT_BY_ONE = "DECREMENT_BY_ONE";
const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
const DECREMENT_BY_AMOUNT = "DECREMENT_BY_AMOUNT";

// ACTION CREATOR;
export function incrementByOne() {
  return {
    type: INCREMENT_BY_ONE
  }
}

export function decrementByOne() {
  return {
    type: DECREMENT_BY_ONE
  }
}

export function incrementByAmount(amount) {
  return {
    type: INCREMENT_BY_AMOUNT,
    payload: amount
  }
}

export function decrementByAmount(amount) {
  return {
    type: DECREMENT_BY_AMOUNT,
    payload: amount
  }
}

// Reducer;
export default (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_BY_ONE:
        return state + 1;
    case DECREMENT_BY_ONE:
        return state - 1;
    case INCREMENT_BY_AMOUNT:
        return state + action.payload;
    case DECREMENT_BY_AMOUNT:
        return state - action.payload;
    default:
      return state;
  }
}