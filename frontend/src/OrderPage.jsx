import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './OrderPage.css';
import { Link } from 'react-router-dom';
import OrderConfirmed from './OrderConfirmed';
import Products from './Products';
import OrderSummary from './OrderSummary';

function OrderPage() 
{

  return (
    <>
      <Products />
      
      <OrderSummary />
      
      <div className="flex-end">
        <Link className="bbb" to="/PayOrder">
          <div className="bg-red-200 rounded-lg mt-3 py-4 self-center shadow-md">
            <span className="text-2xl font-bold self-center">Pay</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default OrderPage;