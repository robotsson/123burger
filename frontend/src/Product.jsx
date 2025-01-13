import { useOrderContext } from './OrderContext';

export default function Product({index, name, price}) 
{
  const { orderItems, setOrderItems } = useOrderContext();   

  function productClickHandler()
  {
    // deep copy
    var newOrderItems = JSON.parse(JSON.stringify(orderItems));

    var indexOf = newOrderItems.findIndex( (item) => item.name === name )
    if( indexOf >= 0 )
    {
      newOrderItems[indexOf].quantity++;
    }
    else 
    {
      var newObject = { name: name, price: price, quantity: 1 };
      newOrderItems.push( newObject );
    }

    console.log(newOrderItems);
    console.log(index +" "+ name +" "+ price);

    setOrderItems(newOrderItems);
  }

  return (
    <div key={index} className="rounded-lg shadow-md bg-blue-100 h-40" onClick={productClickHandler}>
      {name} {price} €
    </div>
  )
}

