import React from 'react'
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/cartActions";

const CarDetails = () => {
    const {cars} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const {id}= useParams()

    const car =cars.find(car=>car.id ==id)

    const addingToCart=(id)=>{

        console.log("Adding to Cart...")

        dispatch(addToCart(id))        
    
         
    }
        

    return (
        <div>
        <p className="car-detail-title">{car.make} {car.model}</p>
        <div className="portrait-car">            
            <img className="car-image" src={car.image} alt="Car" height="400px"/>  
        </div>
            <div>
                <p>Make: {car.make}</p> 
                <p>Model: {car.model}</p>
                <p>Mileage: {car.mileage}</p>
                <p>Year of Production: {car.year_of_prod}</p>
                <p>Price: Ksh. {car.price}</p>
            </div>
                <button className="addtoCartBtn button" onClick={()=>addingToCart(car.id)}>Add to cart</button>

        </div>
    )

}

export default CarDetails
