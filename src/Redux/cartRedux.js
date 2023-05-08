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
            let updatedProduct = {};
            state.quantity += 1;
            state.products.push(action.payload) //payload is a new product
            updatedProduct = updateProducts(state.products);
            state.total = updatedProduct.total;
        },
        updateQuantity: (state, action) => {
               let updatedProduct = {};
                const index = state.products.findIndex(t => t._id === action.payload._id)
                state.products[index].quantity = action.payload.quantity;
                updatedProduct = updateProducts(state.products);
                state.total = updatedProduct.total;
               
        },
        removeProduct: (state, action) => {
            let updatedProduct = {};
            const index = state.products.findIndex(t => t._id === action.payload._id);
            if(index !== -1){                
                state.quantity -= 1;
                state.products = state.products.filter(t => t.size !== action.payload.size);
                
            }
            updatedProduct = updateProducts(state.products);
            state.total = updatedProduct.total;
        }
    }

 })
 const updateProducts = (products) => {
    const keys = {total: 0, qunatity: 0};
    if(products.length) {
        products.forEach(item => {
            keys.total += item.price * item.quantity;
        })
    }
    return keys;
 }

 export const {addProduct, updateQuantity, removeProduct} = cartSlice.actions;
 export default cartSlice.reducer;