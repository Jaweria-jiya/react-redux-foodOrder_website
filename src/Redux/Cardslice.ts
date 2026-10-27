import { createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  Img: string;
  qty: number;
};

const initialState: CartItem[] = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        AddItem:(state,action) => {
            let existItem = state.find((item) => item.id===action.payload.id)
            if(existItem){
                return state.map((item) => (item.id===action.payload.id?{...item, qty:item.qty+1}:item))
            }else{
                state.push(action.payload)
            }
        },
        RemoveItem:(state, action) => {
            return state.filter((item) => item.id!==action.payload)
        },
        IncreamentQty:(state,action) => {
            return state.map((item) => (item.id===action.payload?{...item, qty:item.qty+1}:item))
        },
        DeccreamentQty:(state,action) => {
            return state.map((item) => (item.id===action.payload?{...item, qty:item.qty-1}:item))
        }
    }
})


export const {AddItem, RemoveItem, IncreamentQty,DeccreamentQty} = cartSlice.actions
export default cartSlice.reducer