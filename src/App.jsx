import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './authSlice';
import './App.css'; // Importing the CSS file

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const counter = useSelector((state) => state.counter.counter);
  
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault(); 
    dispatch(authActions.login()); 
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className="app-container">
      
      {/* --- HEADER --- */}
      <header className="header">
        <h1>Redux Auth</h1>
        
        {isAuth && (
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link">My Products</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">My Sales</a>
              </li>
              <li>
                <button onClick={logoutHandler} className="logout-btn">
                  Logout
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <main className="main-content">
        
        {/* --- LOGIN FORM --- */}
        {!isAuth && (
          <section className="card">
            <form onSubmit={loginHandler}>
              <div className="form-group">
                <label className="form-label">EMAIL</label>
                <input type="email" required className="form-input" />
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label">PASSWORD</label>
                <input type="password" required className="form-input" />
              </div>
              <button type="submit" className="purple-btn">Login</button>
            </form>
          </section>
        )}

        {/* --- USER PROFILE CARD --- */}
        {isAuth && (
          <section className="card">
            <h2 style={{ color: '#292929', margin: 0 }}>My User Profile</h2>
          </section>
        )}

        {/* --- COUNTER CARD --- */}
        <section className="counter-card">
          <h2 className="counter-title">REDUX COUNTER</h2>
          
          <div className="counter-value">
            {counter}
          </div>
          
          <div>
            <button onClick={() => dispatch({ type: 'increment' })} className="purple-btn">
              Increment
            </button>
            <button onClick={() => dispatch({ type: 'increase', amount: 10 })} className="purple-btn">
              Increase by 10
            </button>
            <button onClick={() => dispatch({ type: 'decrement' })} className="purple-btn">
              Decrement
            </button>
          </div>

          <button className="purple-btn" style={{ marginTop: '1rem' }}>
            Toggle Counter
          </button>
        </section>

      </main>
    </div>
  );
}

export default App;