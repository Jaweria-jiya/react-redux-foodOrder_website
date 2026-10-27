import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { DeccreamentQty, IncreamentQty, RemoveItem } from "../Redux/Cardslice";

type Card2Props = {
  name: string;
  id: number;
  Img: string;
  price: number;
  qty: number;
};


export default function Card2({name, id, Img, price,qty}:Card2Props){
    let dispatch= useDispatch()

    return <div className="w-full min-h-30 md:h-30 p-2 shadow-lg flex justify-between">
        <div className="w-[60%] h-full flex gap-4">
            <div className="w-full h-[75%] md:w-[60%] md:h-full flex justify-center items-center mt-2 md:mt-0 overflow-hidden rounded-lg">
                <img src={Img} alt="" className="object-cover" />
            </div>
            <div className="w-[40%] h-full flex flex-col gap-4">
                <div className="text-lg font-semibold text-gray-600">{name}</div>
                <div className="w-[100px] h-[30px] bg-slate-400 flex rounded-xl shadow-lg overflow-hidden border-2 border-green-500 font-semibold text-[19px]">
                    <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-500 font-semibold hover:bg-gray-200" onClick={() => dispatch(IncreamentQty(id))}>+</button>
                    <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center">{qty}</span>
                    <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-500 hover:bg-gray-200" onClick={() => qty>1?dispatch(DeccreamentQty(id)): qty}>-</button>
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-start items-end gap-6">
            <span className="text-lg md:text-xl text-green-400 font-semibold">{price}</span>
            <MdDeleteForever className="text-3xl text-red-600 cursor-pointer" onClick={() => dispatch(RemoveItem(id))} />
        </div>
    </div> 
}