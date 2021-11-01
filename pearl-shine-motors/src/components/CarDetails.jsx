import React from 'react'
import { useParams } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../redux/actions/cartActions";

const CarDetails = () => {
    const {cars} = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const {id}= useParams()

    const car =cars.filter(car=>car.id == id)

    console.log(id);
    console.log(car)

    const addingToCart=(id)=>{

        console.log("Adding to Cart...")

        dispatch(addToCart(id))        
    
         
    }
        

    return (
        <div>
            <div className="single-car">
                {car?.map(singleCar=>(
                <div className="card" key={singleCar.id}>
                    <div className="portrait">
                    
                        <img className="car-image" src={singleCar.image} alt="Car" height="400px"/>
                    
                    </div>
                    <div>
                        <p>Make: {singleCar.make}</p> 
                        <p>Model: {singleCar.model}</p>
                        <p>Mileage: {singleCar.mileage}</p>
                        <p>Year of Production: {singleCar.year_of_prod}</p>
                        <p>Price: Ksh. {singleCar.price}</p>
                        <p>Fuel: {singleCar.extra_details.fuel}</p>
                        <p>Transmission: {singleCar.extra_details.transmission} </p>
                        <p>Engine size: {singleCar.extra_details.engine_size} </p>
                    </div>
                        <button className="addtoCartBtn button" onClick={()=>addingToCart(singleCar.id)}>Add to cart</button>
                    </div>)
                    )}
            </div>
                   
             

        </div>
    )

}

export default CarDetails
