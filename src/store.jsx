import { legacy_createStore as createStore } from 'redux';

// 1. Initial State
const initialState = {
  counter: 0
};

// 2. Reducer Function
const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {counter: state.counter + 1};
  }
  
  if (action.type === 'decrement') {
    return {counter: state.counter - 1};
  }

  if(action.type === 'increase') {
    return {counter: state.counter + action.amount};
  }

  if(action.type === 'decrease') {
    return {counter: state.counter - action.amount};
  }

  if(action.type === 'INCREMENTBY5') {
    return {counter: state.counter + 5};
  }

  if(action.type === 'DECREMENTBY5') {
    return {counter: state.counter - 5};
  }

  return state;
};

// 3. Create the Store
const store = createStore(counterReducer);


export default store;