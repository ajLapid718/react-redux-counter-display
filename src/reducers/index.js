// Central export station for all of our reducer functions;
// These will be passed to combineReducers();
// The names in this file will be the keys on the Redux store;

/*

Redux store will look like this:

{
  counterValue: whateverFunctionReducerYouGrabbedFrom;
}

*/

export { default as counterValue } from "../store/utilities/counterValue";