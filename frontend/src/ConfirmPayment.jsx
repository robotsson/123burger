import './SelectProducts.css';
import { Link } from 'react-router-dom';
import OrderSummary from './OrderSummary';
import { useOrderContext } from './OrderContext';
// import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


export default function ConfirmPayment() 
{
  const { orderItems, setBurgerOrder } = useOrderContext();  

  function calculateTotal(total, item) {
    return total+item.quantity*item.price;
  }

  useEffect( () => { 
    var newBurgerOrder = { 
      sent: false, 
      orderTotal: orderItems.reduce( calculateTotal, 0 ), 
      orderDate: (new Date()).toISOString(), 
      orderItems: [] 
    };
  
    orderItems.map( ( item ) => 
  
              newBurgerOrder.orderItems.push( { 
                   quantity: item.quantity, 
                   name: item.name, 
                   burgerProductId: item.id 
                 } 
              ));
  
    // console.log(newBurgerOrder);
    setBurgerOrder( newBurgerOrder );
  }, [] );


  return (
    <>
      <OrderSummary />

      <div className="flex-end">
        <Link className="bbb" to="/OrderConfirmed"> 
          <div className="duration-100 active:scale-95 hover:bg-green-100 hover:border-slate-600 bg-green-50 border-2 border-green-600 rounded-lg mt-3 mb-2 py-4 shadow-md h-44 flex items-center justify-center">
            <span className="text-2xl font-bold text-slate-700"  d>
              Confirm Payment
            </span>
          </div>
        </Link>
      </div>
    </>
  )
}
