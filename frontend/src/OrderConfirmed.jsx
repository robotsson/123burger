import './OrderConfirmed.css'
import OrderSummary from './OrderSummary';
import { useState, useEffect } from 'react';

function OrderConfirmed() 
{
  const [orderId, setOrderId] = useState(4711)


  return (
    <>
      <div className="flex flex-col flex-grow rounded-lg justify-evenly border mb-3 text-5xl font-bold  items-center shadow-md">
          Thank you, order received.<br></br><br></br>
          Your order is #{orderId}
      </div>

      <OrderSummary  />
    </>
  )
}

export default OrderConfirmed;