import './SelectProducts.css';
import { Link } from 'react-router-dom';
import Products from './Products';
import OrderSummary from './OrderSummary';
import { useState, useEffect } from 'react';
import { useOrderContext } from './OrderContext';


function PayButton({isDisabled}) {

  if( !isDisabled )
  {
    return (
      <Link className="" to="/PayOrder">
      <div className="duration-100 active:scale-95 hover:bg-green-100 hover:border-slate-600 bg-green-50 border-2 border-green-600 rounded-lg ml-2 text-3xl font-bold text-slate-700 w-44 h-44 flex shadow-lg items-center justify-center">
        Pay
      </div>
      </Link>
    )
  } else
  {
    return (
      <div className="opacity-25 bg-green-50 border-2 border-green-600 rounded-lg ml-2 text-3xl font-bold text-slate-700 w-44 h-44 flex shadow-lg items-center justify-center">
      Pay
      </div>
    )
  }
}

export default function SelectProducts() 
{
  var emptyProductList = [ { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, 
                           { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, 
                           { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, 
                           { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 },
                           { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }, { id: 0, name:"", price:0 }
                         ];
 
  // what /api/burgerproduct returns
  // var productList = [
  //   { id: 1, name: "Double Cheeseburger", price: 4, type: "Burger", image: "dblcheese.jpg" },
  //   { id: 2, name: "Cheeseburger", price: 2.5, type: "Burger", image: "cheese.jpg" },
  //   { id: 3, name: "Hamburger", price: 2, type: "Burger", image: "burger.jpg" },
  //   { id: 4, name: "Chicken burger", price: 3, type: "Burger", image: "chickenburger.jpg" },
  //   { id: 5, name: "Veggie burger", price: 3, type: "Burger", image: "veggieburger.jpg" },
  //   { id: 6, name: "French fries", price: 1.5, type: "Side Order", image: "fries.jpg" },
  //   { id: 7, name: "Cheese fries", price: 2, type: "Side Order", image: "cheesefries.jpg" },
  //   { id: 8, name: "Mayo dip", price: 0.5, type: "Side Order", image: "mayodip.jpg" },
  //   { id: 9, name: "Garlic dip", price: 0.5, type: "Side Order", image: "garlicdip.jpg" },
  //   { id: 10, name: "Guacamole", price: 1, type: "Side Order", image: "guacamole.jpg" },
  //   { id: 11, name: "Coca-cola", price: 1, type: "Drink", image: "cocacola.jpg" },
  //   { id: 12, name: "Coke zero", price: 1, type: "Drink", image: "cokezero.jpg" },
  //   { id: 13, name: "Fanta", price: 1, type: "Drink", image: "fanta.jpg" },
  //   { id: 14, name: "Sprite", price: 1, type: "Drink", image: "sprite.jpg" },
  //   { id: 15, name: "Dr Pepper", price: 1, type: "Drink", image: "drpepper.jpg" }
  // ];

                         
  const [productList, setProductList] = useState(emptyProductList)
  const { orderItems } = useOrderContext();   

  useEffect( () => {
    fetch('https://localhost:7210/api/burgerproducts')
      .then(response => {
        if( !response.ok ) {
          throw new Error('fetch response not ok');
        }
        return response.json();
      })
      .then( data => setProductList(data) )
      .catch( error => console.error('fetch error:', error) );
  }, [] );


  
  return (

    <>
      <Products products={productList}/>
      
      <div className="flex flex-row"> 
        <OrderSummary height="h-42" rightmargin="mr-2"/> 
    
        <PayButton isDisabled={orderItems <= 0}/>

      </div>

  
    </>
  )
}
