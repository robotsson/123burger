import Product from './Product';

function Products({products}) 
{

  return (
    <div className="flex flex-col ">
      <div className="grid grid-cols-5 mb-3 gap-4">
        { products.map((item, index) => (
            <Product key={index} id={item.id} name={item.name} price={item.price} filename={item.image}/>
        ))}
      </div>
    </div>  
  )

}

export default Products;