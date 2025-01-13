import './OrderConfirmed.css'
import OrderSummaryBig from './OrderSummaryBig';

function OrderConfirmed() 
{

  return (
    <>
      <OrderSummaryBig />
      
      <div className="flex flex-col flex-grow rounded-lg justify-evenly mt-3 text-3xl font-bold bg-green-100 items-center shadow-md">
          Thank you, order received.<br></br><br></br>
          Your order is #123
      </div>
    </>
  )
}

export default OrderConfirmed;