import { useOrderContext } from './OrderContext';

export default function OrderSummary({height="h-40"}) 
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

    <div className="flex flex-row justify-evenly bg-blue-100 shadow-md rounded-lg">
      <div className="text-3xl font-bold px-10 py-5">
        Order:
      </div>

      <div className={`flex flex-grow bg-blue-100 flex-col mx-5 px-5 py-5 overflow-y-auto ${height}`}>
        {orderItems.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span>{item.quantity} {item.name}</span>
            <span>{item.price} €</span>
          </div>
        ))}
      </div>

      <div className="text-3xl font-bold px-10 py-5 text-right">
        Total:<br />
        {total} €
      </div>
    </div>

  );

}

