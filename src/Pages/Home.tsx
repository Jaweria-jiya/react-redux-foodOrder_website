import Navbar from "../components/Nav";
import { categories } from "../Category";
import Card from "../components/Card";
import {food_items} from "../food"
import { useContext} from "react";
import { dataContext } from "../context/userContext";
import { RxCross1 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import type { RootState } from "../Redux/Store";

export default function Home(){
    const context = useContext(dataContext);

        if (!context) {
            throw new Error("DataContext Provider missing");
        }

        const {categ,setCateg,input,showCart,setShowCart} = context;

    // let {categ, setCateg, input, showCart, setShowCart}= useContext(dataContext)

    function filter(categ:string){
        if(categ==="All"){
            setCateg(food_items)
        }else{
           let newList = food_items.filter((item) => (item.food_category===categ))
           setCateg(newList)
        }
    }

    let items= useSelector((state:RootState)=> state.cart)
    let subTotal = items.reduce((total, item) => total+item.qty*item.price,0)
    let deliveryFee = 200
    let taxes = subTotal*0.5/100
    let total = Math.floor(subTotal+deliveryFee+taxes)

    return <div className="bg-slate-200 w-full min-h-screen">
        <Navbar/>
            {!input ?
                <div className="flex flex-wrap justify-center items-center gap-5 w-full">
                    {categories.map((elem) => {
                        return <div className="w-[140px] h-[150px] bg-white flex flex-col justify-start items-start gap-5 p-5 text-center text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200" onClick={() => filter(elem.name)}>
                            {elem.image}
                            <h1>{elem.name}</h1>
                        </div>
                    })}
                </div>:null}
                <div className="flex flex-wrap justify-center gap-5 px-5 pt-20 pb-16">
                    {categ.length>1?categ.map((item) => {
                        return (<Card id={item.id} name={item.food_name} Img={item.food_image} price={item.price} type={item.food_type}  />)
                    }): <div className="text-center text-2xl text-green-500 font-semibold p-5">No dish Found</div> }
                </div>

                <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 md:p-9 transition-all duration-500 overflow-auto hide-scrollbar ${showCart?"translate-x-0":"translate-x-full"}`}>
                    <header className="w-full flex justify-between items-center">
                        <span className="text-green-400 text-[20px] md:text-2xl font-semibold">Order items</span>
                        <span><RxCross1 className="w-7 h-7 text-green-400 text-[20px] cursor-pointer hover:text-gray-500" onClick={() => {setShowCart(false)}} /></span>
                    </header>
                    {items.length>0?   <>
                    <div className="w-full mt-9 flex flex-col gap-7">
                        {items.map((item) => (
                            <Card2 key={item.id} name={item.name} price={item.price} Img={item.Img} id={item.id} qty={item.qty} />
                        ))}
                    </div>

                    <div className="w-full border-t-[2.5px] border-b-[2.5px] border-gray-400 mt-7 flex flex-col gap-2 p-8">
                        <div className="w-full flex justify-between items-center">
                            <span className="text-lg text-gray-600 font-semibold">Subtotal</span>
                            <span className="text-green-400 font-semibold text-lg">Rs {subTotal}/-</span>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <span className="text-lg text-gray-600 font-semibold">Delivery Fee</span>
                            <span className="text-green-400 font-semibold text-lg">Rs {deliveryFee}/-</span>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <span className="text-lg text-gray-600 font-semibold">Taxes</span>
                            <span className="text-green-400 font-semibold text-lg">Rs {taxes}/-</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col gap-2 p-8">
                        <div className="w-full flex justify-between items-center">
                            <span className="text-lg text-gray-600 font-semibold">Total</span>
                            <span className="text-green-400 font-semibold text-lg">Rs {total}/-</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center">
                        <button className="w-[80%] p-3 rounded-lg text-white transition-all duration-300 bg-green-400 hover:bg-green-300 cursor-pointer hover:text-gray-500 text-lg" onClick={() => toast.success("Order Placed")}>Place Order</button>
                    </div>
                    </>: <div className="text-center text-2xl text-green-500 font-semibold p-5">Empty Cart</div> }
                </div>
    </div>
}