import { createSlice } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

export const cartSlice = createSlice({
  initialState: initialState,
  name: "cart",
  reducers: {
    addProduct: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    removeProduct: (state, action) => {
      const productToRemove = action.payload;
      const cartFiltred = state.cart.filter(
        (product) => product.id !== productToRemove.id
      );
      state.cart = cartFiltred;
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
