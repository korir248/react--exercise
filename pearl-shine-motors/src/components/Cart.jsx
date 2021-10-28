import React from 'react'
import { useSelector } from "react-redux";
// import {  } from "react-router-handler";

const Cart = ()=> {
    const cars = useSelector(state => state.car)
    // console.log(cart);
    return (
        <div>
        {cars.id}
        </div>
    )
}

export default Cart
