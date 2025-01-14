import './OrderConfirmed.css'
import OrderSummary from './OrderSummary';
import { useState, useEffect } from 'react';

function OrderConfirmed() 
{
  const [orderId, setOrderId] = useState(4711)

  useEffect( () => {
    fetch('https://localhost:7210/api/burgerorders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          orderTotal: 250,
          orderDate: (new Date()).toISOString(),
          orderItems: [
            {
              quantity: 10,
              burgerProductId: 1
            }
          ]
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then( data => { 
        setOrderId(data.id); 
        console.log(data); 
      })
      .catch( error => console.log(error) );
  }, [] );

  return (
    <>
      <div className="flex flex-col flex-grow rounded-lg justify-evenly border mb-3 text-5xl font-bold  items-center shadow-md">
          Thank you, order received.<br></br><br></br>
          Your order is #{orderId}
      </div>

      <OrderSummary bottommargin="mb-2" />
    </>
  )
}

export default OrderConfirmed;