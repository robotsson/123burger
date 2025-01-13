import Product from './Product';

function Products() 
{

  return (

    <div className="flex flex-col flex-grow bg-green-100 shadow-md rounded-lg">
      
      <div class="grid grid-cols-5 mt-3 gap-4">
        <Product name={"Hamburger"}/>
        <Product name={"Cheeseburger"}/>
        <Product name={"Dbl Cheese"}/>
        <Product name={"Chicken burger"}/>
        <Product name={"Veg burger"}/>

        <Product name={"French Fries"}/>
        <Product name={"Cheese Fries"}/>
        <Product name={"Mayo dip"}/>
        <Product name={"Garlic dip"}/>
        <Product name={"Guacamole"}/>

        <Product name={"Coca-cola"}/>
        <Product name={"Coke zero"}/>
        <Product name={"Fanta"}/>
        <Product name={"Sprite"}/>
        <Product name={"Dr Pepper"}/>      
      </div>
      
    </div>
  )
}

export default Products;