import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
}



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {


            const item = state.products.find((item) => item.id === action.payload.id && item.size === action.payload.size);

            if (item && item.size === action.payload.size) {
                item.quantity += 1;
            }
            else if (item && item.size != action.payload.size) {
                state.products.push(action.payload);
            } else {
                state.products.push(action.payload);
            }

            
        },
        addQuantity: (state, action) => {
            const item = state.products.find((item) => item.id === action.payload.id && item.size === action.payload.size);
            if (item) {
                item.quantity += 1;
            }
        },
        removeItem: (state, action) => {
            const { id, size } = action.payload;
            state.products = state.products.filter((item) => !(item.id === id && item.size === size));
        },
        removeQuantity: (state, action) => {
            const { id } = action.payload;
            const item = state.products.find((item) => item.id === id && item.size === action.payload.size);
            if (item) {
                item.quantity -= 1;
            }

        },
        resetCart: (state) => {
            state.products = [];
        },
    }
})

export const { addToCart, addQuantity, removeQuantity, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;