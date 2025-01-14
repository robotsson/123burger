import { useOrderContext } from './OrderContext';

export default function Product({id, name, price}) 
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
    else if( name!="" )
    {
      var newObject = { id: id, name: name, price: price, quantity: 1 };
      newOrderItems.push( newObject );
    }

    // console.log(newOrderItems);
    // console.log(id +" "+ name +" "+ price);

    setOrderItems(newOrderItems);
  }

  return (
    <div className="duration-100 hover:bg-slate-50 hover:border-slate-400 active:scale-95 rounded-lg border shadow-md bg-white-200 h-40" onClick={productClickHandler}>
      {`${name} ${price?(price+" €"):""}`}
    </div>
  )
}


