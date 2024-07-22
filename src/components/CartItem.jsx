import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    <div className="border-b-2 border-black pt-5 mt-5 pb-7">
      <div className="flex justify-center items-center space-x-10 mx-4">
        <div className="w-[150px] ml-2">
          <img src={item.image}/>
        </div>
        <div className="w-11/12">
        <div>
          <h1 className="font-bold text-lg pb-3">{item.title}</h1>
          <h2 className="pb-4 text-base">{item.description.split(" ").slice(0,15).join(" ")+"..."}</h2>
        </div>
        <div className="flex justify-between items-center">
        <div>
          <p className="text-green-700 font-bold">${item.price}</p>
        </div>
        <div
        className="text-red-700 bg-red-200 rounded-full p-2" onClick={removeFromCart}>
        <MdDelete />
        </div>
        </div>
        
        </div>
        

      </div>
    </div>
  );
};

export default CartItem;
