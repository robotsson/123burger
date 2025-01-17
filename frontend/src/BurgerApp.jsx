import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './BurgerApp.css';
import SelectProducts from './SelectProducts';
import ConfirmPayment from './ConfirmPayment';
import OrderConfirmed from './OrderConfirmed';
import { OrderProvider } from './OrderContext';
import { H2Icon } from '@heroicons/react/20/solid';

export default function BurgerApp() {
  // const [count, setCount] = useState(0)
  
  console.log("hello console");

  return (
    <OrderProvider>
      <Router future={{v7_startTransition: true, v7_relativeSplatPath: true}}>
        {/* page */}
        <div className="p-2 flex flex-col justify-between h-full w-screen">
          
          {/* page header */}
          <div className="bg-slate-50 h-24 mb-3 w-full">
            <div className="flex w-full h-full justify-center items-center">
              <h1 className="text-7xl [text-shadow:_1px_1px_1px_rgb(0_0_0_/_100%)] text-purple-600 font-semibold text-center">
                &#127828;&ensp;
                <Link className="font-bold" to="/">1</Link>
                <Link className="font-bold" to="/PayOrder">2</Link>
                <Link className="font-bold" to="/OrderConfirmed">3</Link>-Burger&ensp;&#127828;
              </h1>
            </div>
          </div>
         
          {/* pages */}
          <div className="flex flex-grow flex-col">
            <Routes>        
              <Route path="/" element={<SelectProducts />} /> 
              <Route path="/PayOrder" element={<ConfirmPayment />} />
              <Route path="/OrderConfirmed" element={<OrderConfirmed />} />
            </Routes>
          </div>

          {/* secret footer */}
          <div className="flex flex-row my-2">
            <div className="text-4xl text-white text-center">
              <Link className="text-slate-50 hover:text-slate-100" to="/">1. Products</Link>&ensp;
              <Link className="text-slate-50 hover:text-slate-100" to="/PayOrder">2. Pay Order</Link>&ensp;
              <Link className="text-slate-50 hover:text-slate-100" to="/OrderConfirmed">3. Confirmed</Link>
            </div>
          </div>

        </div>
      </Router>    
    </OrderProvider>
  )
};
