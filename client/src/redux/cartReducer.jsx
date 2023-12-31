import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            } else {
                state.products.push(action.payload);
            }
        },
        addQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.products.find((item) => item.id === id);
            if (item) {
                item.quantity += 1;
            }
        },
        removeItem: (state, action) => {
            state.products = state.products.filter((item) => item.id !== action.payload);
        },
        removeQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.products.find((item)=> item.id === id);
            if (item){
                item.quantity -= 1;
                console.log(item.quantity)
            }
            if (item.quantity === 0){
                removeItem
            }
        
        },
        resetCart: (state) => {
            state.products = [];
        },
    }
})

export const { addToCart,addQuantity ,removeQuantity,removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;