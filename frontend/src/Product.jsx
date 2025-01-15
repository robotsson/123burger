import { useOrderContext } from './OrderContext';
import productimg from '/src/assets/dblcheese.jpg'
// import productimg2 from '/images/dblcheese.jpg'
import './Product.css';

export default function Product({id, name, price, filename}) 
{
  const { orderItems, setOrderItems } = useOrderContext();   

  function getImageURL(name) {
    return new URL(`${name}`, import.meta.url).href
  }
  

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

  var imgurl = getImageURL(`/src/assets/${filename}`);
  // console.log(imgurl);
  // var filename = "dblcheese.jpg";
  // var bgimg = `bg-[url('/src/assets/${filename}')]`;
  // var bgimg = `bg-[url('/${filename}')]`;
  // var bgimg = `bg-[url('${imgurl}')]`;
  // var bgimg = `bg-[url('/src/assets/${filename}')]`;
  var bgimg = `bg-[url('${imgurl}')]`;
  // console.log(bgimg);
  
  return (
    <div 
      className={`[text-shadow:_2px_2px_2px_rgb(0_0_0_/_100%)] bg-cover text-white font-bold duration-100 hover:bg-slate-50 hover:border-slate-400 hover:shadow-xl active:scale-95 rounded-lg border shadow-md bg-white-200 h-40`} 
      onClick={productClickHandler}
      style={{
        backgroundImage: `url('/src/assets/${filename}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >  
      
      {name}
      <div className="text-2xl">{price} €</div>
      {/* <img className="object-cover" src={imgurl}></img>  */}
    </div>
  )
}


