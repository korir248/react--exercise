import React from 'react'
import { useSelector } from "react-redux";
// import {  } from "react-router-handler";

const Cart = ()=> {
    const cart = useSelector(state => state.cart)
    console.log(cart);
    return (
        <div>
        {cart}
        </div>
    )
}

export default Cart
