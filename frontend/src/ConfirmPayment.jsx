import './SelectProducts.css';
import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';

export default function ConfirmPayment() 
{

  return (
    <>
      <OrderSummary />

      <div className="flex-end">
        <Link className="bbb" to="/OrderConfirmed">
          <div className="bg-green-50 border-2 border-green-600 rounded-lg mt-3 py-4 self-center shadow-md h-32">
            <span className="text-2xl font-bold self-center text-slate-700">Confirm Payment</span>
          </div>
        </Link>
      </div>
    </>
  )
}
