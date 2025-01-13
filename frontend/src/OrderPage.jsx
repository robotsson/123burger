import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './OrderPage.css'


function OrderPage() 
{

  return (
    <>
      {/* product selector */}
      <div className="flex flex-col bg-green-100 shadow-md rounded-lg">
        <div className="flex flex-row justify-center">
          <h1>&#127828;</h1><h1>&#127828;</h1><h1>&#127828;</h1><h1>&#127828;</h1><p></p>
        </div>
        <div className="flex flex-row justify-center">
          <h1>&#127839;</h1><h1>&#127839;</h1><h1>&#127839;</h1>
        </div>
        <div className="flex flex-row justify-center">
          <h1>&#129380;</h1><h1>&#129380;</h1><h1>&#129380;</h1><h1>&#129380;</h1><h1>&#129380;</h1>
        </div>
      </div>
      {/* order summary */}
      <div className="flex flex-row bg-purple-100 shadow-md rounded-lg">
        <b>Order summary:</b><br></br>
        1 cheese burger<br></br>
        1 french fries<br></br>
        1 large coca-cola zero<br></br>

        <div className="bg-red-200 rounded-lg">
          <h1>Pay</h1>
        </div>
      </div>
    </>
  )
}

export default OrderPage;