import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import productSlice from "./product-slice";
import registerSlice from "./register-slice";

const store = configureStore({
    reducer:{cart:cartSlice.reducer,product:productSlice.reducer,register:registerSlice.reducer}
});

export default store;