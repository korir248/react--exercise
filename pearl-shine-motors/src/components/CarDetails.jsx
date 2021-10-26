import React from 'react'
import { addToCart } from '../redux/actions/cartActions'
import { useDispatch } from "react-redux";

const CarDetails = () => {
    // const car = useSelector(state => state.car)
    const dispatch = useDispatch()
    
    const addingToCart=()=>{
        dispatch(addToCart)
    }


    return (
        <div>
            <button onClick={addingToCart}>Add to Cart</button>
        </div>
    )
}

export default CarDetails
