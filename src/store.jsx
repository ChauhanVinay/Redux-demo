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

  if(action.type === 'INCREMENTBY2') {
    return {counter: state.counter + 2};
  }

  if(action.type === 'DECREMENTBY2') {
    return {counter: state.counter - 2};
  }

  return state;
};

// 3. Create the Store
const store = createStore(counterReducer);


export default store;