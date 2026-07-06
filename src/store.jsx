import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';


const initialCounterState = { counter: 0 };
const counterReducer = (state = initialCounterState, action) => {
  if (action.type === 'increment') return { counter: state.counter + 1 };
  if (action.type === 'increase') return { counter: state.counter + action.amount };
  if (action.type === 'decrement') return { counter: state.counter - 1 };
  return state;
};

// Create the central store using configureStore
const store = configureStore({
  reducer: {
    // We map our reducers to specific keys here
    counter: counterReducer, 
    auth: authReducer,       
  },
});

export default store;