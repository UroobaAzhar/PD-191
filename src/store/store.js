// simple counter import
// import { combineReducers, createStore } from "redux";
// import{ countReducer } from "./reducer";
// simple counter import above

// SIMPLE COUNTER

// we can have plenty of reducers in the root reducer

// the countReducer looks like this:
// countReducer {
// count: 0
// }
// so we access this from the useSelector, we dont access the initial state in the reducer directly.
// use selector will first go to state the countreducer then count: state.countReducer.count

// const rootReducer = combineReducers({
//   countReducer: countReducer,
// });

// using obj shorthand:
// const rootReducer = combineReducers({
//   countReducer,
// });

// const store = createStore(rootReducer);
// export default store;

// for the ecommerce store we wont use combineReducer. When we dont use the combineReducer API,
// we can directly access the state prperties. so it would be state.count.
// that is why we are directly accessing state.products in this ecommerce useSelector selector func

// --------------ecommerce below-------------

import { createStore } from "redux";
import cartReducer from "./reducer";

const store = createStore(cartReducer);
export default store;
