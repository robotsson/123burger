import { useOrderContext } from './OrderContext';
// import productimg from '/src/assets/dblcheese.jpg'
// import productimg2 from '/images/dblcheese.jpg'

export default function Product({id, name, price, filename}) 
{
  const { orderItems, setOrderItems } = useOrderContext();   
  
  //function getImageURL(name) {
  //  // comes from node:url
  //  return new URL(`${name}`, import.meta.url).href
  // }

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

  // var imgurl = getImageURL(`/src/assets/${filename}`);
  // console.log(imgurl);
  // <div class="w-48" style="box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;">
  // </div>
  
  // <div 
  // className={`[text-shadow:_2px_2px_2px_rgb(0_0_0_/_100%)] bg-cover text-white font-bold duration-100 hover:bg-slate-50 hover:border-slate-400 hover:shadow-2xl shadow-sm active:scale-95 rounded-lg border bg-white-200 h-40`} 
  // onClick={productClickHandler}
  // style={{
  //   boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
  //   backgroundImage: `url('/src/assets/${filename}')`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  // }}
  // >  



  return (
    <div 
      className={`[text-shadow:_2px_2px_2px_rgb(0_0_0_/_100%)] bg-cover text-white font-bold duration-100 hover:bg-slate-50 hover:border-slate-400 hover:shadow-xl shadow active:scale-95 rounded-lg border bg-white-200 h-40`} 
      onClick={productClickHandler}
      style={{
        backgroundImage: `url('/src/assets/${filename}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'white'
      }}
      >  
      
      {name}
      <div className="text-2xl">{price} €</div>
      {/* <img className="object-cover" src={imgurl}></img>  */}
    </div>
  )
}


