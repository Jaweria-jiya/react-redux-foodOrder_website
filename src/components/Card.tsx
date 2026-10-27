import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../Redux/Cardslice";
import { toast } from "react-toastify";

type CardProps = {
    id: number;
    name: string;
    Img: string;
    price: number;
    type: string;
};


export default function Card({id, name, Img, price, type}:CardProps){
    let dispatch = useDispatch()
    return <div className="w-[280px] h-[415px] bg-white rounded-xl p-3 hover:border-2 border-gray-400">
        <div className="flex flex-col gap-4">
            <img src={Img} alt="" className="w-[280px] h-[240px] rounded-xl overflow-hidden object-cover" />
            <h1 className="font-semibold text-xl">{name}</h1>
            <div className="text-green-500 font-semibold flex justify-between text-lg">
                <h1>{price}</h1>
                <span className="flex justify-center items-center gap-1.5">{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}<h1>{type}</h1></span>
            </div>
            <button className="w-full p-3 rounded-lg text-white transition-all duration-300 bg-green-400 hover:bg-green-300 cursor-pointer" onClick={() => {dispatch(AddItem({id:id, name:name, price:price, Img:Img, qty:1})); toast.success("Item added")} }>Add to dish</button>
        </div>
    </div>
}