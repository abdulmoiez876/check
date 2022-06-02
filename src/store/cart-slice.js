import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      state.totalQuantity++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount=state.totalAmount+(+newItem.price);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title:newItem.title,
          src:newItem.src
        });
      }else{
          existingItem.quantity++;
          existingItem.totalPrice=+existingItem.totalPrice+(+newItem.price);
      }
    },
    removeItemFromCart(state,action) {
      state.totalQuantity--;
        const id = action.payload;
        const existingItem = state.items.find(item=>item.id===id);
        state.totalAmount=state.totalAmount-existingItem.price;
        if(existingItem.quantity===1){
            state.items=state.items.filter(item=>item.id !== id);
        }else{
            existingItem.quantity--;
            existingItem.totalPrice=existingItem.totalPrice-existingItem.price;
        }
    },
    emptyCart(state){
      state.totalAmount=0;
      state.totalQuantity=0;
      state.items=[];
    },
    removeItem(state,action){
      const id = action.payload;
      const existingItem = state.items.find(item=>item.id===id);
      state.totalQuantity=state.totalQuantity-existingItem.quantity;
      state.totalAmount=state.totalAmount-existingItem.quantity*existingItem.price;
      state.items=state.items.filter(item=>item.id !== id);
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
