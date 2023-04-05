 import {createSlice} from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products:[],
        quantity: 0,
        total:0,
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload) //payload is a new product
            state.total += action.payload.price * action.payload.quantity;
        },
        updateQuantity: (state, action) => {
                const index = state.products.findIndex(t => t._id === action.payload._id)
                state.products[index].quantity = action.payload.quantity;
                //state.products = state.products.
                console.log(state)
        }
    }

 })

 export const {addProduct, updateQuantity} = cartSlice.actions;
 export default cartSlice.reducer;