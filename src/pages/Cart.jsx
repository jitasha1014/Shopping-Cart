import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log(cart);
  const [totalAmount, setTotalAmount]= useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price,0));
  },[cart])

  return (
    <div className="max-w-6xl mx-auto">
    {
      cart.length > 0 ?
      (<div className="flex items-center space-x-4">
      <div className="w-1/2">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index}/>
          })
        }
      </div>

      <div className="w-1/2">
      <div className="m-5 flex flex-col justify-between min-h-[200px] mt-8">
      <div>
          <div className="font-semibold uppercase">Your Cart</div>
          <div className="text-3xl font-bold uppercase text-green-800 pb-3">Summary</div>
          <p>
            <span className="font-semibold">Total Items: {cart.length}</span>
            
          </p>
        </div>
        <div>
          <p className="font-semibold pb-3">Total Amount: <span className="font-bold">${totalAmount}</span> </p>
          <button className="text-white font-bold mx-1 bg-green-800 w-full h-10 rounded-md">Checkout Now</button>
        </div>
      </div>
        
      </div>
      </div>) :
      (<div className='flex flex-col justify-center h-screen items-center max-w-6xl mx-auto'>
        <h1 className="text-xl">Your cart is empty</h1>
        <Link to={"/"}>
          <button className="text-lg font-semibold text-green-700">
            Shop Now
          </button>
        </Link>
      </div>)
    }
    </div>
  );
};

export default Cart;
