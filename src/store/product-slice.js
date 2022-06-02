import { createSlice } from "@reduxjs/toolkit";
import ProductData from "../components/Main/Product/ProductData";
import images from "../assets/images.png"

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:ProductData
    },
    reducers:{
        addItemToProduct(state,action){
            const newProduct = action.payload;
            const existingProduct = state.products.find((product)=>product.title==="Uncategorised");
            if(!existingProduct){
                state.products.push({
                    title:"Uncategorised",
                    price:"",
                    cat:true,
                    src:images,
                    details:[
                        { title:newProduct.title, price: newProduct.price, src: images, cat: false , id:newProduct.id ,sale:false , feature:false }
                    ]
                })
            }else{
                existingProduct.details.push(
                    { title:newProduct.title, price: newProduct.price, src: images, cat: false , id:newProduct.id ,sale:false , feature:false  }
                )
            }
        }
    }
});

export const productActions = productSlice.actions;


export default productSlice;