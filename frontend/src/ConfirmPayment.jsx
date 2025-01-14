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
          <div className="duration-100 active:scale-95 hover:bg-green-100 hover:border-slate-600 bg-green-50 border-2 border-green-600 rounded-lg mt-3 mb-2 py-4 shadow-md h-44 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-700">
              Confirm Payment
            </span>
          </div>
        </Link>
      </div>
    </>
  )
}
