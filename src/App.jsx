import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  // 1. Read the counter value from the Redux store
  const counter = useSelector((state) => state.counter);

  // 2. Get the dispatch function
  const dispatch = useDispatch();

  // 3. Create functions to handle button clicks
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const incrementByFiveHandler = () => {
    // The assignment asks to dispatch the action 5 times to increase by 5
    dispatch({ type: 'increment' });
    dispatch({ type: 'increment' });
    dispatch({ type: 'increment' });
    dispatch({ type: 'increment' });
    dispatch({ type: 'increment' });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter App</h1>
      
      {/* Display the central state value */}
      <h2>Counter Value: {counter}</h2>
      
      {/* Buttons to trigger actions */}
      <button onClick={incrementHandler} style={{ margin: '5px' }}>
        Increment
      </button>
      
      <button onClick={decrementHandler} style={{ margin: '5px' }}>
        Decrement
      </button>
      
      <button onClick={incrementByFiveHandler} style={{ margin: '5px' }}>
        Increment by 5
      </button>
    </div>
  );
}

export default App;