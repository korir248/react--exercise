import React from 'react'
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/cartActions";

const CarDetails = () => {
    const {cars} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const {id}= useParams()

    const car =cars.find(car=>car.id ===id)

    const addingToCart=(id)=>{

        console.log("Adding to Cart...")

        dispatch(addToCart(id))        
    
         
    }
        

    return (
        <div>
            <div className="car-details">
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
                    <p>Fuel: {car.extra_details.fuel}</p>
                    <p>Transmision: {car.extra_details.transmission}</p>
                    <p>Engine size: {car.extra_details.engine_size}</p>

                    <button className="addtoCartBtn button" onClick={()=>addingToCart(car.id)}>Add to cart</button>
                </div>
            </div>
                

        </div>
    )

}

export default CarDetails
