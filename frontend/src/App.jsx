import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OrderPage from './OrderPage';
import OrderConfirmed from './OrderConfirmed';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  console.log("hello console");

  return (
    <>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        {/* page */}
        <div className="flex flex-col justify-between h-full">
          {/* page header */}
          <div>
          <div className="flex justify-evenly bg-yellow-100 items-end shadow-md rounded-lg">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />

            </a><h1 className="text-purple-600 self-center">&#127828; 123-Burger &#127828;
            </h1>
            <img src={reactLogo} className="logo" alt="React logo" />

          </div>
          <p>Do you like burgers?  We have burgers!</p></div>
          {/* pages */}
          <Routes>        
            <Route path="/" element={<OrderPage />} /> 
            <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
          </Routes>
          {/* footer */}
          <div className="flex justify-evenly bg-yellow-100 items-end shadow-md rounded-lg">
            <Link className="aaa" to="/">Products</Link>
            <Link className="bbb" to="/PayOrder">Pay Order</Link> 
            <Link className="ccf" to="/OrderConfirmed">Order Sent</Link>          
          </div>
        </div>
      </Router>    
    </>
  )
};

export default App;
