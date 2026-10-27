import { MdFastfood } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { useContext, useEffect } from "react";
import { dataContext } from "../context/userContext";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import type { RootState } from "../Redux/Store";

export default function Navbar(){
    const context = useContext(dataContext);

        if (!context) {
            throw new Error("DataContext Provider missing");
        }
        const {input,setInput,setCateg,setShowCart} = context;

    // let {input, setInput, categ, setCateg, showCart, setShowCart} = useContext(dataContext)
    useEffect(() => {
        let newlist = food_items.filter((item) => item.food_category.includes(input)|| item.food_name.toLowerCase().includes(input.toLowerCase()))
        setCateg(newlist)
    }, [input, setCateg])

    let items= useSelector((state: RootState)=> state.cart)
    
    return <div className="w-full h-25 flex justify-between items-center p-5 md:p-8">
        <div className="w-15 h-15 bg-white flex justify-center items-center rounded-md shadow-md">
            <MdFastfood className="w-[30px] h-[30px] text-green-500" />
        </div>
        <form className="w-[50%] md:w-[70%] h-[60px] bg-white gap-5 flex items-center px-5 rounded-xl rounded-md shadow-md" onSubmit={(e) => e.preventDefault()}>
            <IoSearchOutline className="text-green-500 w-5 h-5" />
            <input type="text"  placeholder="Search Items..." className="w-full outline-none" 
               onChange={(e) => setInput(e.target.value)} value={input}/>
        </form>
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md relative" onClick={() => {
            setShowCart(true)
        }}>
            <span className="absolute top-0 right-2 text-green-500 font-bold text-[17px] cursor-pointer">{items.length}</span>
            <LuShoppingBag className="w-[30px] h-[30px] text-green-500 cursor-pointer" />
        </div>
    </div>
}