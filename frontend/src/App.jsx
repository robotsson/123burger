import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import OrderPage from './OrderPage';
import ConfirmPayment from './ConfirmPayment';
import OrderConfirmed from './OrderConfirmed';
import { OrderProvider } from './OrderContext';

function App() {
  const [count, setCount] = useState(0)
  
  console.log("hello console");

  return (
    <OrderProvider>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        {/* page */}
        <div className="p-2 flex flex-col justify-between h-full w-screen">
          
          {/* page header */}
          <div className="bg-purple-100 shadow-md rounded-lg mb-3 w-full">
            <div className="flex w-full">
              <h1 className="text-purple-600 self-center w-full">
              &#127828; 123-Burger &#127828;
              </h1>
            </div>
          </div>
         
          {/* pages */}
          <div className="flex flex-grow flex-col bg-purple-50">
            <Routes>        
              <Route path="/" element={<OrderPage />} /> 
              <Route path="/PayOrder" element={<ConfirmPayment />} />
              <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
            </Routes>
          </div>

          {/* footer */}
          <div className="flex mt-3 justify-evenly bg-yellow-100 shadow-md rounded-lg">
            <Link className="aaa" to="/">1. Products</Link>
            <Link className="bbb" to="/PayOrder">2. Pay Order</Link> 
            <Link className="ccf" to="/OrderConfirmed">3. Order Sent</Link>          
          </div>
        </div>
      </Router>    
    </OrderProvider>
  )
};

export default App;
