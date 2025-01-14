import { useOrderContext } from './OrderContext';

export default function OrderSummary({bottommargin,rightmargin}) 
{
  
  const { orderItems } = useOrderContext();   

  console.log(orderItems);

  // var orderItemsx = [ 
  //                     { name: "Cheeseburger", quantity: 1, price: 5 },
  //                     { name: "French Fries", quantity: 1, price: 3 },
  //                     { name: "Coke zero",    quantity: 1, price: 2 } 
  //                   ];

  var total = orderItems.reduce( calculateTotal, 0 );

  function calculateTotal(total, item) {
    return total+item.quantity*item.price;
  }

  return (

    <div className={`flex flex-row flex-grow justify-evenly h-44 bg-white border shadow-md rounded-lg ${rightmargin} ${bottommargin}`}>
      <div className="text-3xl font-bold py-4 text-slate-700 w-48">
        Order:
      </div>

      <div className="flex flex-grow flex-col px-10 py-5 overflow-y-auto">
        {orderItems.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.quantity} {item.name}</span>
            <span>{item.price} €</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col text-3xl font-bold px-5 py-5 text-slate-700 w-56">
        <span>Total:</span><br></br>
        <span className="text-5xl">{total} €</span>
      </div>

    </div>

  );

}

