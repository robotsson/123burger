import './SelectProducts.css';
import { Link } from 'react-router-dom';
import Products from './Products';
import OrderSummary from './OrderSummary';
import { useState, useEffect } from 'react';

export default function SelectProducts() 
{
  var emptyProductList = [ { name:"", price:0 }, { name:"", price:0 }, { name:"", price:0 }, 
                           { name:"", price:0 }, { name:"", price:0 }, { name:"", price:0 },
                           { name:"", price:0 }, { name:"", price:0 }, { name:"", price:0 },
                           { name:"", price:0 }, { name:"", price:0 }, { name:"", price:0 },
                           { name:"", price:0 }, { name:"", price:0 }, { name:"", price:0 }
                         ];
 
    // Something like what api/burgerproducts returns
    // var productList = [
    //   { name: "Hamburger", price: 3},
    //   { name: "Cheeseburger", price: 4 },
    //   { name: "Dbl Cheese", price: 5 },
    //   { name: "Chicken burger", price: 4 },
    //   { name: "Veg burger", price: 4 },
      
    //   { name: "French fries", price: 3 },
    //   { name: "Cheese fries", price: 4 },
    //   { name: "Mayo dip", price: 1 },
    //   { name: "Garlic dip", price: 1 },
    //   { name: "Guacamole", price: 1.5 },

    //   { name: "Coca-cola", price: 2 },
    //   { name: "Coke zero", price: 2 },
    //   { name: "Fanta", price: 2 },
    //   { name: "Sprite", price: 2 },
    //   { name: "Dr Pepper", price: 2 }
    // ];
                         
  const [productList, setProductList] = useState(emptyProductList)

  useEffect(() => {
    fetch('https://localhost:7210/api/burgerproducts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProductList(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);

  return (
    <>
      <Products products={productList}/>
      
      <OrderSummary/> 
      
      <div className="flex-end">
        <Link className="bbb" to="/PayOrder">
          <div className="bg-red-200 rounded-lg mt-3 py-4 self-center shadow-md">
            <span className="text-2xl font-bold self-center">Pay</span>
          </div>
        </Link>
      </div>
    </>
  )
}
