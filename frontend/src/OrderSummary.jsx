
function OrderSummary() 
{
  
  var orderItems = [ 
                     { name: "Cheeseburger", quantity: 1, price: 5 },
                     { name: "French Fries", quantity: 1, price: 3 },
                     { name: "Coke zero", quantity: 1, price: 2 } 
                   ];

  var total = orderItems.reduce( calculateTotal, 0 );

  function calculateTotal(total, item) {
    return total+item.quantity*item.price;
  }

  return (

  <div className="flex flex-col">

    <div className="flex flex-row justify-evenly mt-3 bg-blue-100 shadow-md rounded-lg">
      <div className="text-3xl self-start font-bold px-5 py-5">
        Order:
      </div>
      <div className="flex flex-col h-40 text-left px-5 py-5 overflow-y-auto">
        { orderItems.map((item, index) => (
            <div key={index}>
              {item.quantity} {item.name} {item.price} € 
            </div>
        ))}
      </div>
      <div className="text-3xl self-end font-bold px-5 py-5">
        total {total} €
      </div>
    </div>
  </div>

  )

}

export default OrderSummary;