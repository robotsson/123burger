import Product from './Product';

function Products() 
{
  async function fetchjson() {
    const response = await fetch('https://localhost:7210/api/burgerproducts');
    const data = await response.json();

    console.log(data); 
  }

  fetchjson();

  // TODO get this from db/web api with fetch
  var productList = [
                      { name: "Hamburger", price: 3},
                      { name: "Cheeseburger", price: 4 },
                      { name: "Dbl Cheese", price: 5 },
                      { name: "Chicken burger", price: 4 },
                      { name: "Veg burger", price: 4 },
                      
                      { name: "French fries", price: 3 },
                      { name: "Cheese fries", price: 4 },
                      { name: "Mayo dip", price: 1 },
                      { name: "Garlic dip", price: 1 },
                      { name: "Guacamole", price: 1.5 },

                      { name: "Coca-cola", price: 2 },
                      { name: "Coke zero", price: 2 },
                      { name: "Fanta", price: 2 },
                      { name: "Sprite", price: 2 },
                      { name: "Dr Pepper", price: 2 }
                    ];

  return (
    <div className="flex flex-col flex-grow ">
      <div className="grid grid-cols-5 mt-3 gap-4">
        { productList.map((item, index) => (
            <Product key={index} name={item.name} price={item.price} />
        ))}
      </div>
    </div>  
  )

}

export default Products;