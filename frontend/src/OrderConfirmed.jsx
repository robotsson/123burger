import './OrderConfirmed.css'
import OrderSummary from './OrderSummary';
import { useState, useEffect } from 'react';
import { useOrderContext } from './OrderContext';

function OrderConfirmed() 
{
  const [orderId, setOrderId] = useState(47110);
  const { burgerOrder, setBurgerOrder } = useOrderContext();  

  useEffect( () => {  
    
    console.log("OrderConfirmed useEffect");
    console.log(burgerOrder);
    
    if( !burgerOrder.sent ) {

      burgerOrder.sent = true;

      fetch('https://localhost:7210/api/burgerorders', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(burgerOrder)
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
    } // if !burgerOrder

  }, [] ); // useEffect

  return (
    <>
      <div className="bg-white flex flex-col flex-grow rounded-lg justify-evenly border mb-3 text-5xl font-bold  items-center shadow-md">
          Thank you, order received.<br></br><br></br>
          Your order is #{orderId}
      </div>

      <OrderSummary bottommargin="mb-2" itemfont="text-xl"/>
    </>
  )
}

export default OrderConfirmed;