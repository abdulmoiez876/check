import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name:"register",
    initialState:{
        regHistory:[],
        totalCash:0
    },
    reducers:{
        calculate(state,action){
            const obj = action.payload;
            state.regHistory.push({
                cash:obj.cash,
                act:obj.act,
                reason:obj.reason
            });
            if(obj.act==="ADD"){
                state.totalCash=state.totalCash+(+obj.cash);
            }else{
                state.totalCash=state.totalCash-obj.cash;
            }
        }
    }
});

export const registerActions = registerSlice.actions;

export default registerSlice;