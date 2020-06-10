// Necessities and accessories for constructing our Redux store;
import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// Individual reducers altogether under an alias;

// Make a dummy reducer function here;
function counterValueReducer(state = 0, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Construct our Redux store;
const rootReducer = combineReducers(counterValueReducer);
const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(logger));
const store = createStore(rootReducer, middleware); // 2nd arg: middleware;

// Export our store by default, which will be provided to and injected within our entire application;
export default store;