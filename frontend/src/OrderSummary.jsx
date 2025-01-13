
function OrderSummary() 
{

  return (

  <div className="flex flex-col">

    <div className="flex flex-row justify-evenly mt-3 bg-blue-100 shadow-md rounded-lg">
      <div className="text-3xl self-start font-bold px-5 py-5">
        Order:
      </div>
      <div className="flex h-30 text-left px-5 py-5 overflow-y-auto">
        1 cheese burger $price<br></br>
        1 french fries $price<br></br>
        1 large coca-cola zero $price<br></br>
        0 item filler $price<br></br>
        0 item filler $price<br></br>
      </div>
      <div className="text-3xl self-end font-bold px-5 py-5">
        total $total
      </div>
    </div>
  </div>

  )

}

export default OrderSummary;