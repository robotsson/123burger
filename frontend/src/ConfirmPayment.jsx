import './OrderPage.css';
import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';

function ConfirmPayment() 
{

  return (
    <>
      <OrderSummary />

      <div className="flex-end">
        <Link className="bbb" to="/OrderConfirmed">
          <div className="bg-red-200 rounded-lg mt-3 py-4 self-center shadow-md">
            <span className="text-2xl font-bold self-center">Confirm Payment</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ConfirmPayment;