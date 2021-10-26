import React from 'react'
import { addToCart } from '../redux/actions/cartActions'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CarDetails = () => {
    const {cars} = useSelector(state => state)
    

    const dispatch = useDispatch()
    
    const addingToCart=()=>{
        console.log(cars)
        dispatch(addToCart)
    }


    return (
        <div>
            <button onClick={addingToCart}>Add to Cart</button> 
        </div>
    )
}

export default CarDetails
