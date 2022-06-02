import smoothie from "../../../assets/smoothie.jpg";
import burger from "../../../assets/burger.jpg";
import bburger from "../../../assets/burger.jpg";
import zburger from "../../../assets/burger.jpg";
import pizza from "../../../assets/pizza.jpg";
import fries from "../../../assets/fries.jpg";
import sshake from "../../../assets/smoothie.jpg";
import bshake from "../../../assets/banana.jpg"

const ProductData = [
    {
        title: "Smoothie",
        price: "",
        cat: true,
        src: smoothie,
        details: [
            { title: "Strawbery Shake", price: "250", src: sshake, cat: false , id:"s1" ,sale:true,feature:false},
            { title: "Banana Shake", price: "250", src: bshake, cat: false ,id:"s2",sale:true ,feature:true}
        ]
    },
    {
        title: "Burger",
        price: "",
        cat: true,
        src: burger,
        details: [
            { title: "Beef Burger", price: "550", src: bburger, cat: false , id:"b1" ,sale:true ,feature:false},
            { title: "Zinger Burger", price: "350", src: zburger, cat: false , id:"b2",sale:false,feature:false}
        ]
    },
    {
        title: "Pizza",
        price: "",
        cat: true,
        src: pizza,
        details: [
            { title: "Tikka Pizza", price: "999", src: pizza, cat: false , id:"p1" ,sale:true  ,feature:false},
            { title: "Fajita Pizza", price: "999", src: pizza, cat: false , id:"p2" , sale:false , feature:true}
        ]
    },
    {
        title: "Fries",
        price: "",
        cat: true,
        src: fries,
        details: [
            { title: "Masala Fries", price: "50", src: fries, cat: false  , id:"f1" ,sale:true ,feature:false},
            { title: "Loaded fries", price: "300", src: fries, cat: false  , id:"f2",sale:false ,feature:false}
        ]
    },
];

export default ProductData;