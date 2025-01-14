import './OrderConfirmed.css'
import OrderSummary from './OrderSummary';

function OrderConfirmed() 
{

  return (
    <>
      <OrderSummary height="h-80" />
      
      <div className="flex flex-col flex-grow rounded-lg justify-evenly mt-3 text-3xl font-bold bg-green-100 items-center shadow-md">
          Thank you, order received.<br></br><br></br>
          Your order is #123
      </div>
    </>
  )
}

export default OrderConfirmed;