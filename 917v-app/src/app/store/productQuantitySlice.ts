'use client'
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuantityState {
    quantity: number;
    basePrice: number;
    cartItem: CartItem[];
}

interface CartItem {
    image: string;
    title: string;
    quantity: number;
    basePrice: number;
    totalPrice: number;
    description: string | null;
};

const initialState: QuantityState = {
    quantity: 1,
    basePrice: 0,
    cartItem: []
};

const quantitySlice = createSlice({
    name: 'quantity',
    initialState,
    reducers: {
        increment: (state) => {
            state.quantity += 1;
        },
        decrement: (state) => {
            if (state.quantity > 1) {
                state.quantity -= 1;
            }
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.quantity += action.payload
        },
        decrementByAmount: (state, action: PayloadAction<number>) => {
            state.quantity -= action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.basePrice = action.payload;
        },
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            state.cartItem.push(action.payload);
        },
    }
})

export const { 
    increment, 
    decrement, 
    incrementByAmount, 
    decrementByAmount,
    setPrice ,
    addItemToCart
} = quantitySlice.actions;

export default quantitySlice.reducer;