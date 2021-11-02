import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, reduceQuantity} from './../../redux/actions/cartActions'

const addToCart = ({id})=> {

    const {cart} = useSelector(state => state.cart)
    
    const dispatch = useDispatch()
    const increasingQuantity= (id)=>{
        dispatch(increaseQuantity(id))
    }
    const reducingQuantity = (id)=>{
        dispatch(reduceQuantity(id))
    }

    return (
        <div>
            <div>
                <button onClick={()=>reducingQuantity()}>-</button>
                {id}
                <button onClick={()=>increasingQuantity()}>+</button>
            </div>
            
        </div>
    )
}

export default addToCart
